import React, { useEffect, useState } from 'react';
import Banner from './Banner.jsx';
import axios from 'axios';
import AnimeCard from './AnimeCard.jsx';
import Pagination from '../Pagination.jsx';
import Spinner from '../Spinner.jsx';
import { useSearchParams } from 'react-router-dom';

function Anime() {
  const [anime, setAnime] = useState([]);
  const [page, setPage] = useState(1); 
  const totalPages = 10; 
  const [watchList, setWatchList] = useState(
    JSON.parse(localStorage.getItem("watchlist")) || []
  );
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search');

  const handleAddToWatchList = (animeObj) => {
    const newWatchList = [...watchList, animeObj];
    localStorage.setItem("watchlist", JSON.stringify(newWatchList));
    setWatchList(newWatchList);
  };

  const handleRemoveFromWatchList = (animeObj) => {
    const filteredWatchlist = watchList.filter((added) => added.mal_id !== animeObj.mal_id);
    localStorage.setItem("watchlist", JSON.stringify(filteredWatchlist));
    setWatchList(filteredWatchlist);
  };

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        if (searchQuery) {
          const res = await axios.get(`${import.meta.env.VITE_JIKAN_API}anime?q=${searchQuery}`);
          setAnime(res.data.data || []);
        } else {
          const api_URL = import.meta.env.VITE_API_URL;
          const res = await axios.get(`${api_URL}${page}`);
          setAnime(res.data.data || []);
        }
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

        <div className='flex flex-row flex-wrap justify-around gap-10'>
          {anime.map((animeObj) => (
            <AnimeCard
              key={animeObj.mal_id}
              watchList={watchList}
              animeObj={animeObj}
              image_url={animeObj.images.jpg.image_url}
              title={animeObj.title_english}
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
