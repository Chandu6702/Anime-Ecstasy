import React from 'react'

function AnimeCard({ animeObj, image_url, title, watchList, handleAddToWatchList, handleRemoveFromWatchList }) {
  const isInWatchList = watchList.some((a) => a.mal_id === animeObj.mal_id);

  const toggleWatchList = () => {
    if (isInWatchList) {
      handleRemoveFromWatchList(animeObj);
    } else {
      handleAddToWatchList(animeObj);
    }
  };

  return (
    <div
      className="relative w-[200px] rounded-xl overflow-hidden shadow-lg bg-[#1e1e1e] hover:bg-[#2a2a2a] transition-all duration-300 hover:scale-[1.03] border border-pink-500/20  hover:shadow-pink-500/40 hover:shadow-md group"
    >
      <img
        src={image_url}
        alt={title}
        className="w-full h-[300px] object-cover rounded-t-xl"
      />

      <div className="p-3">
        <h3 className="text-center text-white font-bold text-lg tracking-wide group-hover:text-pink-400 transition-colors duration-300">
          {title || "Untitled"}
        </h3>
      </div>

      <button
        onClick={toggleWatchList}
        className={`group absolute top-3 right-3 flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium tracking-wide z-20 transition-all duration-300 
          ${isInWatchList
            ? 'bg-gradient-to-r from-pink-500 to-red-500 text-white shadow-md shadow-pink-500/30'
            : 'bg-gray-900 text-pink-400 border border-pink-400 hover:bg-pink-500 hover:text-white'
          }`}
        title={isInWatchList ? "Remove from Watchlist" : "Add to Watchlist"}
      >
        {/* Symbol */}
        <span className="text-lg transition-transform duration-300 group-hover:scale-110">
          {isInWatchList ? '✓' : '+'}
        </span>

        {/* Glowing effect */}
        <span className="absolute inset-0 rounded-full blur-sm opacity-25 bg-pink-400 group-hover:opacity-40 transition-all duration-300 pointer-events-none"></span>
      </button>

    </div>
  );
}

export default AnimeCard;