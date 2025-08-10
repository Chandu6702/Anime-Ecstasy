import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="aboutus-container">
      <div className="aboutus-card">
        <h1 className="aboutus-title bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent"> About Anime Ecstasy</h1>
        <p className="aboutus-text">
          Welcome to <strong>Anime Ecstasy</strong> - your ultimate anime
          discovery & watchlist companion.  
          This project is proudly part of <strong>GirlScript Summer of Code 2025</strong> 💛, 
          built <em>for fans, by fans</em>.  
          Our mission is to help you explore trending anime, track what you love, 
          and make your watchlist an unforgettable experience.
        </p>

        <h2 className="aboutus-subtitle"> Key Features</h2>
        <ul className="aboutus-list">
          <li>🎬 Trending Anime Gallery with stunning visuals</li>
          <li>⭐ Add & Remove from your personal Watchlist (saved in localStorage)</li>
          <li>📖 Seamless Pagination for endless browsing</li>
          <li>📱 Fully Responsive across all devices</li>
        </ul>

        <h2 className="aboutus-subtitle"> Tech Stack</h2>
        <ul className="aboutus-list">
          <li>⚛️ React (Vite) – Modern frontend framework</li>
          <li>🌐 Axios – Smooth API requests</li>
          <li>💨 Tailwind CSS – Fast & beautiful UI styling</li>
          <li>🐱 Anime API – Real-time anime data (Jikan / MyAnimeList)</li>
        </ul>

        <h2 className="aboutus-subtitle" > Open Source & Contributions</h2>
        <p className="aboutus-text">
          Being a GSSoC 2025 project, Anime Ecstasy is open for contributions from 
          developers worldwide. Whether you are a beginner or a seasoned coder, 
          your ideas, bug fixes, and features are always welcome!
        </p>

        <p className="aboutus-footer">
          💖 Created with passion for those who start one episode...  
          and somehow finish the whole season at 3 AM.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
