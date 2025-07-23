import React, { useEffect, useState } from "react";
import Banner from "./Banner.jsx";
import axios from "axios";
import AnimeCard from "./AnimeCard.jsx";
import Pagination from "../Pagination.jsx";

function Anime() {
  const [anime, setAnime] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [watchList, setWatchList] = useState(
    JSON.parse(localStorage.getItem("watchlist")) || []
  );

  const handleAddToWatchList = (animeObj) => {
    const newWatchList = [...watchList, animeObj];
    localStorage.setItem("watchlist", JSON.stringify(newWatchList));
    setWatchList(newWatchList);
  };

  const handleRemoveFromWatchList = (animeObj) => {
    const filteredWatchlist = watchList.filter((added) => {
      return added.mal_id !== animeObj.mal_id;
    });
    localStorage.setItem("watchlist", JSON.stringify(filteredWatchlist));
    setWatchList(filteredWatchlist);
  };

  function handlePrev() {
    if (pageNo === 1) {
      setPageNo(1);
    } else {
      setPageNo(pageNo - 1);
    }
  }

  function handleNext() {
    setPageNo(pageNo + 1);
  }

  useEffect(() => {
    async function fetchData() {
      const api_URL = import.meta.env.VITE_API_URL;

      try {
        const res = await axios.get(`${api_URL}${pageNo}`);
        setAnime(res.data.data || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
    console.log(watchList);
  }, [pageNo]);

  return (
    <div>
      <Banner />
      <div>
        <div className="w-full text-3xl text-center p-5 m-4">
          Trending Anime
        </div>
        <div className="flex flex-row flex-wrap justify-around gap-10">
          {/* ✅ Safer UI: handles loading or empty list */}
          {!Array.isArray(anime) || anime.length === 0 ? (
            <div className="text-center text-gray-500">
              Loading or no anime found...
            </div>
          ) : (
            <div className="flex flex-row flex-wrap justify-around gap-10">
              {anime.map((animeObj) => (
                <AnimeCard
                  key={animeObj.mal_id}
                  watchList={watchList}
                  animeObj={animeObj}
                  image_url={animeObj.images?.jpg?.image_url || "fallback.jpg"}
                  title={animeObj.title_english || animeObj.title || "No Title"}
                  handleAddToWatchList={handleAddToWatchList}
                  handleRemoveFromWatchList={handleRemoveFromWatchList}
                />
              ))}
            </div>
          )}
        </div>
        <Pagination
          pageNo={pageNo}
          handlePrev={handlePrev}
          handleNext={handleNext}
        />
      </div>
    </div>
  );
}

export default Anime;
