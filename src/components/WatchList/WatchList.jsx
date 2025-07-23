import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

function WatchList() {
  const [watchList, setWatchList] = useState([]);
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState(["All Genres"]);
  const [currGenre, setCurreGenre] = useState("All Genres");

  useEffect(() => {
    if (!localStorage.getItem("watchlist")) {
      return;
    }
    setWatchList(JSON.parse(localStorage.getItem("watchlist")));
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleFilter = (item) => {
    setCurreGenre(item);
  };

  const handleRemoveFromWatchList = (animeObj) => {
    const filteredWatchlist = watchList.filter((added) => {
      return added.mal_id != animeObj.mal_id;
    });
    localStorage.setItem("watchlist", JSON.stringify(filteredWatchlist));
    setWatchList(filteredWatchlist);
  };

  const sortIncreasing = () => {
    let Increasing = watchList.sort((item1, item2) => {
      return item1.score - item2.score;
    });
    setWatchList([...Increasing]);
  };

  const sortDecreasing = () => {
    let decreasing = watchList.sort((item1, item2) => {
      return item2.score - item1.score;
    });
    setWatchList([...decreasing]);
  };

  useEffect(() => {
    let temp = watchList.map((item) => {
      return item.genres[0].name;
    });
    temp = new Set(temp);
    setGenreList(["All Genres", ...temp]);
  }, [watchList]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="flex justify-center items-center flex-wrap m-4 ">
        {genreList.map((genre, index) => (
          <div
            key={index}
            onClick={() => handleFilter(genre)}
            className={
              currGenre === genre
                ? "flex justify-center items-center p-2 h-[3rem] w-[9rem] bg-blue-400 dark:bg-blue-600 rounded-xl text-white font-bold mx-4 cursor-pointer hover:bg-blue-500 dark:hover:bg-blue-700 transition-colors"
                : "flex justify-center items-center h-[3rem] w-[9rem] bg-gray-400/50 dark:bg-gray-600/50 rounded-xl text-white font-bold mx-4 cursor-pointer hover:bg-gray-500/50 dark:hover:bg-gray-500/50 transition-colors"
            }
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
          placeholder="search Anime"
          className="h-[3rem] w-[18rem] bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white outline-none px-4 rounded-lg border dark:border-gray-600 focus:ring-2 focus:ring-blue-500 transition-colors"
        />
      </div>
      <div className="border rounded overflow-hidden border-gray-200 dark:border-gray-700 m-8 bg-white dark:bg-gray-800 transition-colors duration-200">
        <table className="w-full text-gray-600 dark:text-gray-300 text-center">
          <thead className="border-b-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700">
            <tr>
              <th className="py-3 text-gray-900 dark:text-white">Name</th>
              <th className="flex justify-center py-3">
                <div
                  className="p-2 hover:cursor-pointer hover:scale-125 duration-200 text-gray-700 dark:text-gray-300"
                  onClick={sortIncreasing}
                >
                  <FaArrowUp />
                </div>
                <div className="p-2 text-gray-900 dark:text-white">Rating</div>
                <div
                  className="p-2 hover:cursor-pointer hover:scale-125 duration-200 text-gray-700 dark:text-gray-300"
                  onClick={sortDecreasing}
                >
                  <FaArrowDown />
                </div>
              </th>
              <th className="py-3 text-gray-900 dark:text-white">Popularity</th>
              <th className="py-3 text-gray-900 dark:text-white">Genre</th>
              <th className="py-3 text-gray-900 dark:text-white">Action</th>
            </tr>
          </thead>
          <tbody>
            {watchList
              .filter((item) => {
                if (currGenre == "All Genres") {
                  return true;
                } else {
                  return item.genres[0].name == currGenre;
                }
              })
              .filter((item) => {
                return item.title
                  .toLowerCase()
                  .includes(search.toLocaleLowerCase());
              })
              .map((item) => (
                <tr className="border-b-2 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors" key={item.mal_id}>
                  <td className="flex items-center px-6 py-4">
                    <img
                      src={item.images.jpg.image_url}
                      className="h-[100px] w-[100px] rounded-lg shadow-md"
                    />
                    <div className="mx-10 text-gray-900 dark:text-white font-medium">{item.title}</div>
                  </td>
                  <td className="text-gray-700 dark:text-gray-300">{item.score}</td>
                  <td className="text-gray-700 dark:text-gray-300">{item.popularity}</td>
                  <td className="text-gray-700 dark:text-gray-300">{item.genres[0].name}</td>
                  <td
                    className="text-red-600 dark:text-red-400 hover:cursor-pointer hover:scale-125 duration-200 font-medium hover:text-red-700 dark:hover:text-red-300"
                    onClick={() => handleRemoveFromWatchList(item)}
                  >
                    Delete
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default WatchList;
