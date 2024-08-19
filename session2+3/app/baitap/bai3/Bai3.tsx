import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

export default function Bai3() {
  return (
    <div className="border-2 border-gray-200 w-[400px] p-[20px] rounded mt-[20px] ml-[20px]">
      <h1 className="font-bold text-[20px] text-center mb-[20px]">
        Form Sign Up
      </h1>

      <label htmlFor="name" className="block mb-[10px]">
        Name
      </label>
      <input
        type="text"
        id="name"
        className="border-2 border-gray-200 rounded w-full p-[10px] mb-[20px]"
        placeholder="Your name"
      />

      <label htmlFor="email" className="block mb-[10px]">
        Email
      </label>
      <input
        type="email"
        id="email"
        className="border-2 border-gray-200 rounded w-full p-[10px] mb-[20px]"
        placeholder="you@company.com"
      />

      <label htmlFor="phone" className="block mb-[10px]">
        Phone Number
      </label>
      <div className="flex mb-[20px]">
        <select className="border-2 border-gray-200 border-r-0 rounded-l p-[10px]">
          <option value="US">US</option>
          <option value="HN">HN</option>
          <option value="HCM">HCM</option>
          <option value="HL">HL</option>
          <option value="QN">QN</option>
        </select>
        <input
          type="text"
          id="phone"
          className="border-2 border-gray-200 border-l-0 rounded-r w-full p-[10px]"
          placeholder="Your phone number"
        />
      </div>
      <label htmlFor="address" className="block mb-[10px]">
        Address
      </label>
      <textarea
        id="address"
        className="border-2 border-gray-200 rounded w-full p-[10px] mb-[20px] h-[100px]"
        placeholder="Your address"
      ></textarea>

      <p className="font-bold mb-[10px]">Skills</p>
      <div className="mb-[20px]">
        <div>
          <input type="radio" className="mr-[10px]" />
          <label>HTML</label>
        </div>
        <div>
          <input type="radio" className="mr-[10px]" />
          <label>UX Design</label>
        </div>
        <div>
          <input type="radio" className="mr-[10px]" />
          <label>CSS</label>
        </div>
        <div>
          <input type="radio" className="mr-[10px]" />
          <label>JavaScript</label>
        </div>
        <div>
          <input type="radio" className="mr-[10px]" />
          <label>ReactJS</label>
        </div>
        <div>
          <input type="radio" className="mr-[10px]" />
          <label>Java</label>
        </div>
      </div>

      <button className="bg-purple-400 text-white p-[10px] rounded w-full">
        Sign up
      </button>
    </div>
  );
}
