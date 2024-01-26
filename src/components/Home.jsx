/* eslint-disable react/prop-types */
import { useState } from "react";
import FoodsGrid from "./FoodsGrid";
import Left from "./icons/Left";
import Right from "./icons/Right";

function Home({ data }) {
  const foods = data.foods;
  const itemsPerPage = 4;
  const totalRows = Math.ceil(foods.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };
  const handlePrevClick = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };
  const handleNextClick = () => {
    setCurrentPage((nextPage) => Math.min(nextPage + 1, totalRows));
  };
  const renderPageNumbers = () => {
    const totalPagesToShow = 6;
    const startPage = Math.max(
      currentPage - Math.floor(totalPagesToShow / 2),
      1
    );
    const endPage = Math.min(startPage + totalPagesToShow - 1, totalRows);
    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <div
          key={i}
          className={`${
            currentPage === i ? "active" : ""
          } bg-black rounded-full w-7 h-7 items-center justify-center flex cursor-pointer text-sm m-2`}
          onClick={() => handlePageClick(i)}
        >
          {i}
        </div>
      );
    }
    return pages;
  };

  const myData = data;
  return (
    <main className="p-4 mb-4">
      <h1 className="text-center p-4 font-semibold text-3xl">
        <hr />
        Burmese Recipes
        <hr />
      </h1>
      <div className="flex flex-row justify-center  items-center text-white mb-6">
        {currentPage > 1 && (
          <div className="cursor-pointer mr-2" onClick={handlePrevClick}>
            <Left />
          </div>
        )}
        <div className="flex"> {renderPageNumbers()}</div>

        {currentPage < totalRows && (
          <div className="cursor-pointer ml-2" onClick={handleNextClick}>
            <Right />
          </div>
        )}
      </div>
      <hr />
      <FoodsGrid
        foods={myData.foods}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
      />
    </main>
  );
}
export default Home;
