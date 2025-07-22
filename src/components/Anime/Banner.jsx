import React, { useEffect, useState } from 'react';

const images = [
  'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/a249096c7812deb8c3c2c907173f3774.jpe',
  "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=cover,format=auto,quality=85,width=1920/keyart/GR751KNZY-backdrop_wide",
  'https://comicbook.com/wp-content/uploads/sites/4/2025/06/Jujutsu-Kaisen-Has-a-Specific-Reason-Why-It-Chose-Yuji-as-Its-Main-Hero.jpg',
  'https://comicbook.com/wp-content/uploads/sites/4/2025/06/Demon-Slayer-Hashira.jpeg',
  'https://occ-0-8407-92.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABdIFYfkylotuQsosH1WlGXHoouJSR59IKXL-xHz1EBGnDra3h7PiJ0E7Oe8wZzKk0hpHSKQGHi7VrGSs64kozAD0u9dXXKO-T4SM.jpg?r=33e'
];

const titles = [
  'One Piece',
  'Attack on Titan',
  'Jujutsu Kaisen',
  'Demon Slayer',
  'Naruto'
];

function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(intervalId); // clean up on unmount
  }, []);

  return (
    <div
      className="h-[30vh] md:h-[80vh] w-auto bg-center bg-cover bg-no-repeat flex items-end transition-all duration-500"
      style={{
        backgroundImage: `url(${images[currentIndex]})`,
        //width: '98vw',
        overflow:"hidden"
      }}
    >
      <div className="w-full text-2xl md:text-4xl text-white text-center p-4 bg-gray-900/60">
        {titles[currentIndex]}
      </div>
    </div>
  );
}

export default Banner;
