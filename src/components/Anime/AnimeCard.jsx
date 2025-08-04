import React, { useEffect, useState } from 'react';
import { HeartIcon, BookmarkPlusIcon } from 'lucide-react';

function AnimeCard({
  animeObj,
  image_url,
  title,
  watchList,
  handleAddToWatchList,
  handleRemoveFromWatchList,
}) {
  const [liked, setLiked] = useState(false);
  const [fullData, setFullData] = useState(null);

  const isInWatchList = watchList.some((a) => a.mal_id === animeObj.mal_id);

  const toggleWatchList = () => {
    if (isInWatchList) {
      handleRemoveFromWatchList(animeObj);
    } else {
      handleAddToWatchList(animeObj);
    }
  };

  // Fetch full anime data to get relations (prequel/sequel info)
  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/anime/${animeObj.mal_id}/full`)
      .then((res) => res.json())
      .then((data) => setFullData(data.data))
      .catch((err) => console.error('Error fetching full anime data:', err));
  }, [animeObj.mal_id]);

  // Safe destructuring
  const {
    score,
    scored_by,
    episodes,
    synopsis,
  } = animeObj;

  const relations = fullData?.relations || [];
  const prequels = relations.filter((rel) => rel.relation === 'Prequel').length;
  const sequels = relations.filter((rel) => rel.relation === 'Sequel').length;
  const totalSeasons = 1 + prequels + sequels;

  return (
    <div className="relative w-[200px] rounded-xl overflow-hidden shadow-md group border border-pink-500/20 bg-zinc-900 hover:scale-105 transition duration-300">

      {/* Poster */}
      <img
        src={image_url}
        alt={title}
        className="w-full h-[300px] object-cover rounded-xl"
      />

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white p-3 flex flex-col justify-between rounded-xl z-10">
        
        {/* Top Info */}
        <div>
          <h3 className="font-bold text-md mb-1">{title || 'Untitled'}</h3>

          <p className="text-sm text-gray-300 mb-1">
            {score?.toFixed(1) || 'N/A'} ★ ({scored_by ? `${(scored_by / 1000).toFixed(1)}K` : '0'} votes)
          </p>

          {/* Total Seasons */}
          <p className="text-sm text-pink-300 mb-1">
            {totalSeasons} {totalSeasons === 1 ? 'Season' : 'Seasons'}
          </p>

          {/* Episodes */}
          <p className="text-sm text-pink-300 mb-2">
            {episodes || '?'} Episodes
          </p>

          {/* Description */}
          <p className="text-xs text-gray-300 line-clamp-4">
            {synopsis || 'No description available.'}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-3">
          {/* Like */}
          <button
            onClick={() => setLiked(!liked)}
            title={liked ? "Unlike" : "Like"}
            className={`transition hover:text-pink-400 ${liked ? 'text-pink-500' : ''}`}
          >
            <HeartIcon size={20} fill={liked ? 'currentColor' : 'none'} />
          </button>

          {/* Watchlist */}
          <button
            onClick={toggleWatchList}
            title={isInWatchList ? 'Remove from Watchlist' : 'Add to Watchlist'}
            className={`transition hover:text-pink-400 ${isInWatchList ? 'text-pink-500' : ''}`}
          >
            <BookmarkPlusIcon size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AnimeCard;
