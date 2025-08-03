import React from 'react'

const AnimeCardSkeleton = () => {
    return (
        <div className="relative w-[200px] rounded-xl overflow-hidden shadow-lg bg-[#1e1e1e] border border-pink-500/20 animate-pulse">
            {/* Image Skeleton */}
            <div className="w-full h-[300px] bg-gray-700 rounded-t-xl" />

            {/* Title Skeleton */}
            <div className="p-3">
                <div className="h-5 w-3/4 mx-auto bg-gray-600 rounded"></div>
            </div>

            {/* Watchlist Button Skeleton */}
            <div className="absolute top-3 right-3 h-8 w-8 rounded-full bg-gray-800 border border-pink-400" />

        </div>
    )
}

export default AnimeCardSkeleton
