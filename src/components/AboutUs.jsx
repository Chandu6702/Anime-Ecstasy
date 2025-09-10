import React from "react";

const AboutUs = () => {
  return (
    <div className="mt-24 max-w-6xl mx-auto px-6 space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
          Welcome to Anime Ecstasy
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Your ultimate Anime Discovery & Watchlist App 🌸. Browse trending anime, track your favorites, and create a personal watchlist – all in a beautifully designed, responsive dashboard built for anime fans by fans.
        </p>
      </section>

      {/* What is Anime Ecstasy */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent text-center">What is Anime Ecstasy?</h2>
        <p className="text-gray-700 text-center max-w-3xl mx-auto">
          Anime Ecstasy is your personal anime dashboard. Explore trending anime, save the ones you love, and never lose track of your watchlist. It’s designed to make anime discovery fun, easy, and visually engaging.
        </p>
      </section>

      {/* Features */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-center">Key Features</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[rgb(191,170,212)] p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">🎬 Trending Anime Gallery</h3>
            <p>Explore the most talked-about anime with beautiful visuals and titles to keep you updated with the latest trends.</p>
          </div>
          <div className="bg-[rgb(191,170,212)] p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">⭐ Add to Watchlist</h3>
            <p>Found something you like? Save it instantly and easily access it later, even after closing your browser.</p>
          </div>
          <div className="bg-[rgb(191,170,212)] p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">❌ Remove from Watchlist</h3>
            <p>No longer interested? Remove any anime from your list with a single click.</p>
          </div>
          <div className="bg-[rgb(191,170,212)] p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">📖 Pagination</h3>
            <p>Browse seamlessly across multiple pages of anime content using intuitive navigation controls.</p>
          </div>
          {/* Fully Responsive Card centered */}
          <div className="bg-[rgb(191,170,212)] p-6 rounded-lg shadow hover:shadow-lg transition md:col-span-2 md:w-1/2 md:mx-auto">
            <h3 className="text-xl font-bold mb-2">📱 Fully Responsive</h3>
            <p>Enjoy the app on any device – mobile, tablet, or desktop – with a layout that adapts perfectly.</p>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="text-center space-y-2">
        <h2 className="text-3xl font-bold">For the Fans, By the Fans</h2>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Anime Ecstasy was created with love for anime lovers everywhere. Whether you’re starting one episode or finishing an entire season at 3AM, we’re here to make your anime journey unforgettable.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;