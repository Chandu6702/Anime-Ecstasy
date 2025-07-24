import { useState, useEffect } from 'react';

function Banner() {
    const [animeList, setAnimeList] = useState([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        async function fetchTopAnime() {
            try {
                const response = await fetch('https://api.jikan.moe/v4/top/anime?limit=6');
                const data = await response.json();

                const topAnime = data.data.map(anime => ({
                    title: anime.title,
                    url:
                        anime.images.webp?.large_image_url ||
                        anime.images.jpg?.large_image_url ||
                        'https://via.placeholder.com/1920x1080?text=No+Image',
                }));

                console.log('Fetched Anime List:', topAnime);
                setAnimeList(topAnime);
            } catch (error) {
                console.error('Failed to fetch anime:', error);
            }
        }

        fetchTopAnime();
    }, []);

    useEffect(() => {
        if (animeList.length === 0) return;

        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % animeList.length);
        }, 4000);

        return () => clearInterval(interval); // Cleanup
    }, [animeList]);

    if (animeList.length === 0) {
        return <div className='text-center text-white p-4'>Loading top anime...</div>;
    }

    const current = animeList[index];

    return (
    <div
        className='relative w-full h-[30vh] md:h-[80vh] transition-all duration-1000 ease-in-out'
        style={{
            backgroundImage: `url(${current.url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }}
    >
        <div className='absolute bottom-0 left-0 w-full text-2xl text-white text-center p-4 bg-gray-900/60'>
            {current.title}
        </div>
    </div>
);

}

export default Banner;
