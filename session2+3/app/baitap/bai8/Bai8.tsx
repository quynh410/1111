"use client";
import React, { useState } from "react";
import './B8.scss'; 
export default function Bai8() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pages: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handlePrev = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
  };

  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage < 10 ? prevPage + 1 : 10));
  };

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
    <br />
    <div className="page">
      <button onClick={handlePrev} disabled={currentPage === 1}>
        <i className="fa-solid fa-arrow-left"></i>
        <span>Prev</span>
      </button>
      {pages.map((item, index) => (
        <button
          key={index}
          onClick={() => handlePageClick(item)}
          className={currentPage === item ? "active" : ""}
        >
          {item}
        </button>
      ))}
      <button onClick={handleNext} disabled={currentPage === 10}>
        <span>Next</span>
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
    </>
  );
}