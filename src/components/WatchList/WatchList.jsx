import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import Spinner from "../Spinner";

function WatchList() {
  const [watchList, setWatchList] = useState([]);
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState(["All Genres"]);
  const [currGenre, setCurreGenre] = useState("All Genres");
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {

      setLoading(true);  //start loading

        setTimeout(() => {
          if (!localStorage.getItem("watchlist")) {
            setLoading(false); //stop loading
           return;
           } 
          
           setWatchList(JSON.parse(localStorage.getItem("watchlist")));
       

        }, 300); // simulate 300ms delay to show spinner
      
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

  if (loading)     //if loading is true , return spinner.
    {
  return <Spinner />;
    }

  return (
    <>
      <div className="flex justify-center items-centerflex-wrap m-4 ">
        {genreList.map((genre, index) => (
          <div
            key={index}
            onClick={() => handleFilter(genre)}
            className={
              currGenre === genre
                ? "flex justify-center items-center p-2 h-[3rem] w-[9rem] bg-blue-400 rounded-xl text-white font-bold mx-4"
                : "flex justify-center items-center h-[3rem] w-[9rem] bg-gray-400/50 rounded-xl text-white font-bold mx-4"
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
          className="h-[3rem] w-[18rem] bg-gray-200 outline-none px-4"
        />
      </div>
      <div className="border rounded overflow-hidden border-gray-200 m-8">
        <table className="w-full text-gray-600 text-center">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>
              <th className="flex justify-center">
                <div
                  className="p-2 hover:cursor-pointer hover:scale-125 duration-200"
                  onClick={sortIncreasing}
                >
                  <FaArrowUp />
                </div>
                <div className="p-2">Rating</div>
                <div
                  className="p-2 hover:cursor-pointer hover:scale-125 duration-200"
                  onClick={sortDecreasing}
                >
                  <FaArrowDown />
                </div>
              </th>
              <th>Popularity</th>
              <th>Genre</th>
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
                <tr className="border-b-2" key={item.mal_id}>
                  <td className="flex items-center px-6 py-4">
                    <img
                      src={item.images.jpg.image_url}
                      className="h-[100px] w-[100px]"
                    />
                    <div className="mx-10">{item.title}</div>
                  </td>
                  <td>{item.score}</td>
                  <td>{item.popularity}</td>
                  <td>{item.genres[0].name}</td>
                  <td
                    className="text-red-800 hover:cursor-pointer hover:scale-125 duration-200"
                    onClick={() => handleRemoveFromWatchList(item)}
                  >
                    Delete
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
