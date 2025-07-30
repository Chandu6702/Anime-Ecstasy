import React from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

function Pagination({ handleNext, handlePrev, pageNo, totalPages, setPage }) {
  const pagesToShow = 5;

  let startPage = Math.max(1, pageNo - 2);
  let endPage = Math.min(totalPages, startPage + pagesToShow - 1);
  if (endPage - startPage < pagesToShow - 1) {
    startPage = Math.max(1, endPage - pagesToShow + 1);
  }

  const pageButtons = [];
  for (let i = startPage; i <= endPage; i++) {
    pageButtons.push(
      <button
        key={i}
        onClick={() => setPage(i)}
          className={`mx-1 px-3 py-1 rounded-full font-bold text-lg ${
          pageNo === i ? 'bg-black text-white' : 'bg-white text-black'
        } hover:scale-105 transition duration-200`}
      >
        {i}
      </button>
    );
  }

  return (
    <div className="bg-gray-400 py-4 mt-8 flex justify-center items-center flex-wrap gap-2">
      {/* Left Arrow */}
      <div
        onClick={handlePrev}
        className="hover:cursor-pointer hover:scale-125 duration-200"
      >
        <FaArrowAltCircleLeft size={30} className="text-black" />
      </div>
      {pageButtons}

      {totalPages > endPage && (
        <>
          <span className="mx-1 font-bold">...</span>
          <button
            onClick={() => setPage(totalPages)}
              className={`mx-1 px-3 py-1 rounded-full font-bold text-lg ${
              pageNo === totalPages ? 'bg-black text-white' : 'bg-white text-black'
            } hover:scale-105 transition duration-200`}
          >
            {totalPages}
          </button>
        </>
      )}
      <div
        onClick={handleNext}
        className="hover:cursor-pointer hover:scale-125 duration-200"
      >
        <FaArrowAltCircleRight size={30} className="text-black" />
      </div>
    </div>
  );
}

export default Pagination;

