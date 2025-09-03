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
        className={`mx-1 px-3 py-1 rounded-full font-semibold text-lg border transition duration-200 ${
          pageNo === i
            ? 'text-white bg-black'
            : 'text-white hover:underline'
        }`}
      >
        {i}
      </button>
    );
  }

  return (
    <div className="py-4 mt-8 flex justify-center items-center flex-wrap gap-2">
      <div
        onClick={handlePrev}
        className="hover:cursor-pointer hover:scale-125 duration-200"
      >
        <FaArrowAltCircleLeft size={30} className="text-white" />
      </div>
      
      {pageButtons}

      {totalPages > endPage && (
        <>
          <span className="mx-1 font-bold text-white">...</span>
          <button
            onClick={() => setPage(totalPages)}
            className={`mx-1 px-3 py-1 rounded-full font-semibold text-lg border transition duration-200 ${
              pageNo === totalPages
                ? 'text-white bg-black'
                : 'text-white hover:underline'
            }`}
          >
            {totalPages}
          </button>
        </>
      )}

      <div
        onClick={handleNext}
        className="hover:cursor-pointer hover:scale-125 duration-200"
      >
        <FaArrowAltCircleRight size={30} className="text-white" />
      </div>

      {/* Go to Page input field */}
      <div className="flex items-center gap-2 ml-4">
        <label htmlFor="goToPage" className="text-white font-semibold">
          Page:
        </label>
        <input
          id="goToPage"
          type="number"
          min="1"
          max={totalPages}
          className="w-20 px-2 py-1 border border-white rounded"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              const val = parseInt(e.target.value);
              if (!isNaN(val) && val >= 1 && val <= totalPages) {
                setPage(val);
              } else {
                alert(`Please enter a number between 1 and ${totalPages}`);
              }
            }
          }}
        />
        <button
          onClick={() => {
            const input = document.getElementById('goToPage');
            const val = parseInt(input.value);
            if (!isNaN(val) && val >= 1 && val <= totalPages) {
              setPage(val);
            } else {
              alert(`Please enter a number between 1 and ${totalPages}`);
            }
          }}
          className="px-3 py-1 bg-white text-black rounded hover:bg-gray-300"
        >
          Go
        </button>
      </div>
    </div>
  );
}

export default Pagination;

