import { useState, useEffect } from 'react';

const animeImages = [
    {
        title: 'One Piece',
        url: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/a249096c7812deb8c3c2c907173f3774.jpe',
    },
    {
        title: 'Attack on Titan',
        url:"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=cover,format=auto,quality=85,width=1920/keyart/GR751KNZY-backdrop_wide",
    },
    {
        title: 'Demon Slayer',
        url: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2025/03/demon-slayer-infinity-castle-movie-release-date.png',
    },
    {
        title: 'Jujutsu Kaisen',
        url: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2023/10/jujutsu-kaisen-s-main-cast.jpg',
    },
    {
        title: 'Naruto Shippuden',
        url: "https://i.redd.it/oud1kvqqxlsx.jpg",
    },
    {
        title: 'My Hero Academia',
        url: 'https://m.media-amazon.com/images/S/pv-target-images/c5b267aeb5b6882024f75db745bb009c8fd7a95dfdd2743105f3ea6132d434d7.jpg',
    },
];

function Banner() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % animeImages.length);
        }, 4000); // Change image every 4 seconds

        return () => clearInterval(interval); // Cleanup
    }, []);

    const current = animeImages[index];

    return (
        <div
            className='h-[30vh] md:h-[80vh] bg-center bg-cover bg-no-repeat flex items-end transition-all duration-1000 ease-in-out'
            style={{
                backgroundImage: `url(${current.url})`,
                width: '100%',
            }}
        >
            <div className='w-full text-2xl text-white text-center p-4 bg-gray-900/60'>
                {current.title}
            </div>
        </div>
    );
}

export default Banner;
