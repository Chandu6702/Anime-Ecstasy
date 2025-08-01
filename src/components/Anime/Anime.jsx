import React, { useEffect, useState } from 'react';
import Banner from './Banner.jsx';
import axios from 'axios';
import AnimeCard from './AnimeCard.jsx';
import Pagination from '../Pagination.jsx';
import Spinner from '../Spinner.jsx';
import { useSearchParams } from 'react-router-dom';
import { useProfile } from '../../context/ProfileContext.jsx';
import { useAuth } from '../../context/AuthContext.jsx';

function Anime() {
  const [anime, setAnime] = useState([]);
  const [page, setPage] = useState(1); 
  const totalPages = 10; 
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search');
  
  const { user } = useAuth();
  const { watchlist, addToWatchlist, removeFromWatchlist } = useProfile();

  const handleAddToWatchList = (animeObj) => {
    if (!user) {
        alert("Please log in to add anime to your watchlist.");
        return;
    }
    addToWatchlist(animeObj);
  };

  const handleRemoveFromWatchList = (animeObj) => {
    if (!user) return;
    const animeToRemove = watchlist.find(item => item.mal_id === animeObj.mal_id);
    if (animeToRemove) {
      removeFromWatchlist(animeToRemove);
    }
  };

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const url = searchQuery 
          ? `${import.meta.env.VITE_JIKAN_API}anime?q=${searchQuery}`
          : `${import.meta.env.VITE_API_URL}${page}`;
        const res = await axios.get(url);
        setAnime(res.data.data || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [page, searchQuery]);
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  if (loading) return <Spinner />;

  return (
    <div className='overflow-hidden'>
      <Banner />
      <div>
        <div className='w-full text-3xl text-center p-5 m-4'>
          {searchQuery ? `Search Results for "${searchQuery}"` : 'Trending Anime'}
        </div>

        <div className='flex flex-row flex-wrap justify-around gap-10 p-4'>
          {anime.map((animeObj) => (
            <AnimeCard
              key={animeObj.mal_id}
              watchList={watchlist}
              animeObj={animeObj}
              image_url={animeObj.images.jpg.image_url}
              title={animeObj.title_english || animeObj.title}
              handleAddToWatchList={handleAddToWatchList}
              handleRemoveFromWatchList={handleRemoveFromWatchList}
            />
          ))}
        </div>

        {!searchQuery && (
          <Pagination
            handleNext={() => setPage((prev) => Math.min(totalPages, prev + 1))}
            handlePrev={() => setPage((prev) => Math.max(1, prev - 1))}
            pageNo={page}
            totalPages={totalPages}
            setPage={setPage}
          />
        )}
      </div>
    </div>
  );
}

export default Anime;
