// src/components/Anime/FilterBar.jsx
import { useState } from "react";

export default function FilterBar({ onFilterChange, onSortChange }) {
  const [genre, setGenre] = useState("");
  const [status, setStatus] = useState("");
  const [score, setScore] = useState("");
  const [season, setSeason] = useState("");
  const [sort, setSort] = useState("popularity");

  const applyFilters = () => {
    onFilterChange({ genre, status, score, season });
    onSortChange(sort);
  };

  return (
    <div className="flex flex-wrap gap-3 p-4 bg-gray-900 text-white rounded-xl shadow-md mb-4">
      {/* Genre */}
      <select value={genre} onChange={(e) => setGenre(e.target.value)} className="p-2 rounded bg-gray-800">
        <option value="">All Genres</option>
        <option value="1">Action</option>
        <option value="4">Comedy</option>
        <option value="8">Drama</option>
        <option value="10">Fantasy</option>
      </select>

      {/* Status */}
      <select value={status} onChange={(e) => setStatus(e.target.value)} className="p-2 rounded bg-gray-800">
        <option value="">All Status</option>
        <option value="airing">Airing</option>
        <option value="complete">Completed</option>
        <option value="upcoming">Upcoming</option>
      </select>

      {/* Score */}
      <input
        type="number"
        placeholder="Min Score"
        value={score}
        onChange={(e) => setScore(e.target.value)}
        className="p-2 rounded bg-gray-800 w-28"
      />

      {/* Year */}
      <input
        type="number"
        placeholder="Year"
        value={season}
        onChange={(e) => setSeason(e.target.value)}
        className="p-2 rounded bg-gray-800 w-28"
      />

      {/* Sort */}
      <select value={sort} onChange={(e) => setSort(e.target.value)} className="p-2 rounded bg-gray-800">
        <option value="popularity">Popularity</option>
        <option value="score">Rating</option>
        <option value="title">Title</option>
        <option value="start_date">Year</option>
      </select>

      <button onClick={applyFilters} className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600">
        Apply
      </button>
    </div>
  );
}
