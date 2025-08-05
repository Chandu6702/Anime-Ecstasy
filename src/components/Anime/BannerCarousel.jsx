import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaPlus, FaInfoCircle } from 'react-icons/fa';
import HomePageBannerSkeleton from '../skeletons/HomePageBannerSkeleton';

function BannerCarousel() {
  const [animeSlides, setAnimeSlides] = useState([]);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(
          'https://kitsu.io/api/edge/anime?page[limit]=10&sort=ratingRank&filter[status]=current'
        );
        const json = await res.json();
        const items = json.data;

        const slides = items.map((item) => ({
          id: item.id,
          title: item.attributes.canonicalTitle || item.attributes.titles.en_jp,
          image: item.attributes.coverImage?.original || item.attributes.coverImage?.large,
          description: item.attributes.synopsis,
          rating: item.attributes.averageRating,
        }));

        setAnimeSlides(slides.filter((s) => s.image));
      } catch (err) {
        console.error('Failed loading from Kitsu:', err);
      }
    }
    load();
  }, []);

  if (!animeSlides.length) {
    return (
      <HomePageBannerSkeleton />
    );
  }

  return (
    <>
      <Swiper
  modules={[Navigation, Autoplay, Pagination]}
  autoplay={{ delay: 6000 }}
  loop
  navigation
  pagination={{ clickable: true }}
  observer={true}
  observeParents={true}
  className="w-full h-[90vh]"
>
  {animeSlides.map((anime) => (
    <SwiperSlide key={anime.id}>
      <div className="w-full h-full relative overflow-hidden">
       
        <img
    src={anime.image}
    alt={anime.title}
    className="w-full h-full object-cover"
  />

        
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent flex items-center px-6 md:px-20">
          <div className="max-w-xl space-y-4 text-white">
            <h2 className="text-4xl font-bold">{anime.title}</h2>
            <p className="text-sm md:text-base opacity-90 line-clamp-4">
              {anime.description}
            </p>
            <div className="flex gap-4 mt-4">
              <button className="flex items-center gap-2 px-5 py-2 bg-white text-black font-semibold rounded hover:bg-gray-200">
                <FaPlus />
                Add to List
              </button>
              <button className="flex items-center gap-2 px-5 py-2 bg-white/30 text-white font-semibold rounded hover:bg-white/20">
                <FaInfoCircle />
                More Info
              </button>
            </div>
          </div>
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

      {/* ✅ style tag placed correctly here */}
      <style jsx="true">{`
      .swiper-button-next,
      .swiper-button-prev {
        color: rgba(255, 255, 255, 0.9) !important;
        font-size: 1.5rem !important;
      }

      .swiper-pagination-bullet {
        background-color: rgba(255, 255, 255, 0.4) !important;
        width: 10px !important;
        height: 10px !important;
        opacity: 1 !important;
      }

      .swiper-pagination-bullet-active {
        background-color: #ffffff !important;
      }
    `}</style>
    </>
  );

}


export default BannerCarousel;
