import React, { useEffect, useState } from 'react'
import Banner from './Banner.jsx'
import axios from 'axios'
import AnimeCard from './AnimeCard.jsx';
import Pagination from '../Pagination.jsx';

function Anime() {
  const [anime, setAnime] = useState([])
  const [pageNo,setPageNo]= useState(1)
  const [watchList,setWatchList]=useState( JSON.parse(localStorage.getItem('watchlist')) || []);

  const handleAddToWatchList = (animeObj)=>{
    const newWatchList = [...watchList,animeObj]
    localStorage.setItem("watchlist",JSON.stringify(newWatchList));
    setWatchList(newWatchList)
    // console.log(newWatchList)
  }

  const handleRemoveFromWatchList = (animeObj)=>{
    const filteredWatchlist = watchList.filter((added)=>{
      return added.mal_id != animeObj.mal_id
    })
    localStorage.setItem("watchlist",JSON.stringify(filteredWatchlist));
    setWatchList(filteredWatchlist)
  }

  function handlePrev(){
    if(pageNo===1){
      setPageNo(1)
    }
    else{
      setPageNo(pageNo-1)
    }
  }

  function handleNext(){
        setPageNo(pageNo+1)
  }

  useEffect(() => {
    async function fetchData() {
      const api_URL= import.meta.env.VITE_API_URL
      
      try {
        const res = await axios.get(`${api_URL}${pageNo}`);
        setAnime(res.data.data || [])
        // console.log(res.data)
      } catch (error) {
        console.error('Error fetching data:', error);
        setAnime([]) // Ensure anime is always an array
      }
    }
    fetchData();
    console.log(watchList);
  }, [pageNo]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <Banner/>
      <div>
        <div className='w-full text-3xl text-center p-5 m-4 text-gray-900 dark:text-white'>
          Trending Anime
        </div>
        <div className='flex flex-row flex-wrap justify-around gap-10'>
          {anime && anime.length > 0 ? anime.map((animeObj) => (
            <AnimeCard key={animeObj.mal_id} watchList={watchList} animeObj={animeObj} image_url={animeObj.images.jpg.image_url} title={animeObj.title_english} handleAddToWatchList={handleAddToWatchList} handleRemoveFromWatchList={handleRemoveFromWatchList}/>
          )) : (
            <div className="text-center text-gray-500 dark:text-gray-400">Loading anime...</div>
          )}
        </div>
        <Pagination pageNo={pageNo} handlePrev={handlePrev} handleNext={handleNext}/>
      </div>
    </div>
  )
}

export default Anime
