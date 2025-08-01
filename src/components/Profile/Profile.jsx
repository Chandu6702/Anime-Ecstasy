import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useProfile } from '../../context/ProfileContext';
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Spinner from '../Spinner';
import { Edit, LogOut, Save, User, Star, X, History, ListVideo } from 'lucide-react';
import './Profile.css';

const Profile = () => {
  const { user, updateUserName } = useAuth();
  const { profileData, updateProfile, loading, watchlist, history, removeFromWatchlist } = useProfile();
  const navigate = useNavigate();

  const [displayName, setDisplayName] = useState('');
  const [bio, setBio] = useState('');
  const [favoriteGenres, setFavoriteGenres] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('watchlist');

  // Sync local state with context data
  useEffect(() => {
    if (user) {
      setDisplayName(user.displayName || '');
    }
    if (profileData) {
      setBio(profileData.bio);
      setFavoriteGenres(profileData.favoriteGenres);
    }
  }, [user, profileData]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const handleSave = async () => {
    // Update display name in Firebase Auth if it has changed
    if (displayName !== user.displayName) {
      await updateUserName(displayName);
    }
    // Update bio and genres in Firestore
    await updateProfile(bio, favoriteGenres);
    setIsEditing(false);
  };

  if (loading && !user) {
    return <Spinner />;
  }
  
  const renderContent = () => {
    const list = activeTab === 'watchlist' ? watchlist : history;
    return (
      <div className="watchlist-grid">
        {list && list.length > 0 ? (
          list.map(anime => (
            <div key={anime.mal_id} className="watchlist-item-card">
              <img src={anime.images.jpg.image_url} alt={anime.title} className="watchlist-item-image" />
              <div className="watchlist-item-overlay">
                <h3 className="watchlist-item-title">{anime.title}</h3>
                {activeTab === 'watchlist' && (
                  <button 
                    onClick={() => removeFromWatchlist(anime)} 
                    className="watchlist-item-remove-button"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="watchlist-empty-message">Your {activeTab} is empty.</p>
        )}
      </div>
    );
  };

  return (
    <div className="profile-page-container font-poppins">
      {user ? (
        <div className="profile-grid">
          {/* Left Column: User Info */}
          <div className="profile-info-card">
            <div className="flex flex-col items-center text-center">
              <img
                src={user.photoURL || 'https://avatar.iran.liara.run/public/boy'}
                alt="Profile"
                className="profile-avatar"
              />
              {isEditing ? (
                <input
                  type="text"
                  className="profile-name-input"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                />
              ) : (
                <h1 className="text-3xl font-bold mt-4">{displayName || 'User'}</h1>
              )}
              <p className="text-gray-400 mt-1">{user.email}</p>
            </div>

            <div className="profile-details">
              {/* About Me Section */}
              <div className="detail-section">
                <h2 className="detail-title"><User size={20} /> About Me</h2>
                {isEditing ? (
                  <textarea
                    className="profile-textarea-modern"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                  />
                ) : (
                  <p className="detail-content">{bio}</p>
                )}
              </div>

              {/* Favorite Genres Section */}
              <div className="detail-section">
                <h2 className="detail-title"><Star size={20} /> Favorite Genres</h2>
                {isEditing ? (
                  <input
                    type="text"
                    className="profile-input-modern"
                    value={favoriteGenres}
                    onChange={(e) => setFavoriteGenres(e.target.value)}
                  />
                ) : (
                  <p className="detail-content">{favoriteGenres}</p>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="profile-actions-modern">
              {isEditing ? (
                <button onClick={handleSave} className="action-button save-button">
                  <Save size={18} /> Save Changes
                </button>
              ) : (
                <button onClick={() => setIsEditing(true)} className="action-button edit-button">
                  <Edit size={18} /> Edit Profile
                </button>
              )}
              <button onClick={handleLogout} className="action-button logout-button">
                <LogOut size={18} /> Logout
              </button>
            </div>
          </div>

          {/* Right Column: Watchlist */}
          <div className="watchlist-container-modern">
             <div className="content-tabs">
                <button onClick={() => setActiveTab('watchlist')} className={`tab-btn ${activeTab === 'watchlist' ? 'active' : ''}`}>
                  <ListVideo size={20} /> Watchlist
                </button>
                <button onClick={() => setActiveTab('history')} className={`tab-btn ${activeTab === 'history' ? 'active' : ''}`}>
                  <History size={20} /> History
                </button>
              </div>
              <div className="tab-content">
                {renderContent()}
              </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-full text-2xl text-gray-400">
          Please log in to view your profile.
        </div>
      )}
    </div>
  );
};

export default Profile;
