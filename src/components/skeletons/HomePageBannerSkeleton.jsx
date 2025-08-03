const HomePageBannerSkeleton = () => {
    return (
        <div
            className="w-full h-[90vh] bg-gray-300 relative animate-pulse"
        >
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent flex items-center px-6 md:px-20">
                <div className="w-full space-y-4 text-white">

                    {/* Title skeleton */}
                    <div className="w-80 h-10 bg-gray-500 rounded"></div>

                    {/* Description skeleton */}
                    <div className="space-y-2 w-full">
                        <div className="h-4 w-[35%] bg-gray-500 rounded"></div>
                        <div className="h-4 w-[35%] bg-gray-500 rounded"></div>
                        <div className="h-4 w-[35%] bg-gray-500 rounded"></div>
                        <div className="h-4 w-[30%] bg-gray-500 rounded"></div>
                    </div>

                    {/* Buttons skeleton */}
                    <div className="flex gap-4 mt-4">
                        <div className="h-10 w-32 bg-gray-500 rounded"></div>
                        <div className="h-10 w-32 bg-gray-500 rounded"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePageBannerSkeleton
