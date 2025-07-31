import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaPlay, FaInfoCircle, FaPlus } from 'react-icons/fa';

const animeSlides = [
  {
    title: 'One Piece',
    image: 'https://wallpapers.com/images/hd/one-piece-4k-fiery-poster-main1dst5k7sxr3k.jpg',
    description:
      'Monkey D. Luffy sails with his crew of Straw Hat Pirates through the Grand Line to find the treasure One Piece and become the new king of the pirates.',
    rating: 'U/A 16+',
    logo: 'https://logomak.com/blog/wp-content/uploads/2023/07/One_Piece_Logo-min.png',
  },
  {
    title: 'Jujutsu Kaisen',
    image: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2023/10/gojo-and-geto-in-the-gojo-s-past-arc.jpg',
    description:
      'Yuji Itadori must join a secret organization to eliminate deadly curses and save humanity.',
    rating: 'U/A 18+',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Jujutsu_Kaisen_logo.png',
  },
  {
    title: 'Solo Leveling',
    image: 'https://images6.alphacoders.com/137/1372163.jpeg',
    description:
      'A weak hunter gains the power to level up endlessly and becomes humanity’s greatest weapon.',
    rating: 'U/A 17+',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Solo_Leveling_logo.svg/1200px-Solo_Leveling_logo.svg.png',
  },
  {
    title: 'Attack on Titan',
    image: 'https://cdn.wallpapersafari.com/93/91/mc1vxF.jpg',
    description:
      'Eren Yeager vows to eradicate the titans after witnessing the destruction of his home and the death of his mother.',
    rating: 'U/A 18+',
    logo: 'https://cdn.prod.website-files.com/64ea57571d50b02423c4505d/64fa2af723cae8e0aa0e0101_attack%20on%20titan%20logo.png',
  },
  {
    title: 'Demon Slayer',
    image: 'https://4kwallpapers.com/images/wallpapers/demon-slayer-3840x2160-23247.jpg',
    description:
      'Tanjiro Kamado becomes a demon slayer to save his sister and avenge his family.',
    rating: 'U/A 16+',
    logo: 'https://www.pngmart.com/files/23/Demon-Slayer-Logo-PNG-HD.png',
  },
  {
    title: 'Dragon Ball Z',
    image: 'https://wallpapers.com/images/hd/dragon-ball-z-9703knm5iv32bu43.jpg',
    description:
      'Goku and his friends defend Earth against powerful foes while unlocking legendary transformations.',
    rating: 'U/A 12+',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Dragon_Ball_Z_logo.svg',
  },
];

function BannerCarousel() {
  return (
    <div>
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        autoplay={{ delay: 6000 }}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        className="w-full h-[90vh]"
      >
        {animeSlides.map((anime, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${anime.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent flex items-center px-6 md:px-20">
                <div className="max-w-xl space-y-4 text-white">
                  {anime.logo ? (
                    <img
                      src={anime.logo}
                      alt={`${anime.title} logo`}
                      className="h-32 md:h-40 object-contain"
                    />
                  ) : (
                    <h2 className="text-4xl font-bold">{anime.title}</h2>
                  )}
                  <p className="text-sm md:text-base opacity-90">{anime.description}</p>
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
                  <span className="inline-block bg-white/20 px-3 py-1 rounded text-xs mt-4">
                    {anime.rating}
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Style injection for Swiper nav + pagination */}
      <style jsx="true">{`
        .swiper-button-next,
        .swiper-button-prev {
          color: rgba(255, 255, 255, 0.8) !important;
          font-size: 1.75rem !important;
        }

        .swiper-pagination-bullet {
          background-color: rgba(255, 255, 255, 0.5) !important;
          width: 12px !important;
          height: 12px !important;
          opacity: 1 !important;
        }

        .swiper-pagination-bullet-active {
          background-color: #fff !important;
        }
      `}</style>
    </div>
  );
}

export default BannerCarousel;
