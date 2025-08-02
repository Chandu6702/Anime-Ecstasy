import React, { useEffect, useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import Spinner from "../Spinner";
import { useProfile } from "../../context/ProfileContext"; // Import useProfile

function WatchList() {
  const { watchlist, removeFromWatchlist, loading } = useProfile();
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState(["All Genres"]);
  const [currGenre, setCurreGenre] = useState("All Genres");
  const [sortedWatchlist, setSortedWatchlist] = useState([]);

  useEffect(() => {
    // Keep local sorted state in sync with context
    setSortedWatchlist([...watchlist]);
  }, [watchlist]);
  
  const handleSearch = (e) => setSearch(e.target.value);
  const handleFilter = (item) => setCurreGenre(item);

  const handleRemoveFromWatchList = (animeToRemove) => {
    // The anime object from the state is the exact one we need to remove
    removeFromWatchlist(animeToRemove);
  };

  const sortIncreasing = () => {
    const sorted = [...sortedWatchlist].sort((a, b) => (a.score || 0) - (b.score || 0));
    setSortedWatchlist(sorted);
  };

  const sortDecreasing = () => {
    const sorted = [...sortedWatchlist].sort((a, b) => (b.score || 0) - (a.score || 0));
    setSortedWatchlist(sorted);
  };

  useEffect(() => {
    if (watchlist.length > 0) {
      const genres = watchlist
        .map((item) => item.genres?.[0]?.name)
        .filter(Boolean); // Filter out any undefined genres
      const uniqueGenres = new Set(genres);
      setGenreList(["All Genres", ...uniqueGenres]);
    } else {
      setGenreList(["All Genres"]);
    }
  }, [watchlist]);

  if (loading) return <Spinner />;

  return (
    <>
      <div className="flex justify-center items-center flex-wrap gap-4 mt-6 mb-4">
        {genreList.map((genre, index) => (
          <div
            key={index}
            onClick={() => handleFilter(genre)}
            className={`cursor-pointer px-6 py-2 rounded-full font-semibold text-sm shadow-md transition-all duration-300 ${
              currGenre === genre
                ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white scale-105"
                : "bg-gray-700/50 text-gray-200 hover:bg-blue-600 hover:text-white"
            }`}
          >
            {genre}
          </div>
        ))}
      </div>

      <div className="flex justify-center my-4">
        <input
          onChange={handleSearch}
          value={search}
          type="text"
          placeholder="Search your watchlist..."
          className="h-[3rem] w-[20rem] bg-gray-800 text-white px-5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400 shadow-lg"
        />
      </div>

      <div className="overflow-x-auto m-6 bg-black/70 border border-blue-500/20 rounded-xl shadow-2xl backdrop-blur-lg">
        <table className="w-full text-white text-sm lg:text-base text-center table-auto">
          <thead className="border-b border-blue-500/20">
            <tr className="uppercase tracking-wider text-blue-400">
              <th className="py-3 px-6">Name</th>
              <th className="py-3">
                <div className="flex justify-center items-center gap-1">
                  <button className="hover:text-green-400 hover:scale-110 transition-all" onClick={sortIncreasing} title="Sort by low rating"><FaArrowUp /></button>
                  <span>Rating</span>
                  <button className="hover:text-red-400 hover:scale-110 transition-all" onClick={sortDecreasing} title="Sort by high rating"><FaArrowDown /></button>
                </div>
              </th>
              <th className="py-3">Popularity</th>
              <th className="py-3">Genre</th>
              <th className="py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {sortedWatchlist
              .filter((item) => currGenre === "All Genres" ? true : item.genres?.[0]?.name === currGenre)
              .filter((item) => item.title.toLowerCase().includes(search.toLowerCase().trim()))
              .map((item) => (
                <tr key={item.mal_id} className="border-b border-gray-700 hover:bg-gray-900/60 transition-all duration-300">
                  <td className="flex items-center gap-6 px-6 py-4 text-left">
                    <img src={item.images.jpg.image_url} alt={item.title} className="h-[100px] w-auto object-cover rounded-md shadow-md"/>
                    <span className="font-medium">{item.title}</span>
                  </td>
                  <td>{item.score || 'N/A'}</td>
                  <td>{item.popularity}</td>
                  <td>{item.genres?.[0]?.name || 'N/A'}</td>
                  <td>
                    <button className="text-red-500 hover:text-white hover:scale-125 transition-transform font-semibold" onClick={() => handleRemoveFromWatchList(item)}>
                      ✖ Remove
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
