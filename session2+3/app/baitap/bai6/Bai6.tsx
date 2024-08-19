import React from "react";

export default function Bai6() {
  return (
    <>
      <br />
      <header className="bg-gray-800 text-white p-4 h-[120px]">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">logoinpsum</div>
          <nav>
            <ul className="flex space-x-4 mr-[10pc] gap-[30px]">
              <li>
                <a href="#home" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:underline">
                  Update
                </a>
              </li>
              <li>
                <a href="#services" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Fearture
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  About us
                </a>
              </li>
            </ul>
          </nav>
          <div
            className="bg-white rounded-full shadow-lg p-2 flex flex-col items-center w-24"
            style={{ height: "100px" }}
          >
            <div className="w-14  h-14 bg-gray-300 rounded-full mt-3"></div>
          </div>
        </div>
      </header>
    </>
  );
}
