import React from "react";
import { FaSearch } from "react-icons/fa";
import Book from "../Book";
import Bimg from '../../assets/images/Books.jpg'
import Pagination from "../Pagination";

const Content = () => {
  return (
    <div className=" p-2">
      <h2 className="text-2xl mx-4 text-gray-900">Available Books</h2>

      <div className="flex my-2 mx-4">
        <input
          type="text"
          placeholder="Search Title/Author/Genre"
          className="w-1/2 mr-2 bg-white border border-green-500 focus:border-green-700 outline-none rounded px-2"
        />
        <div className="p-2 rounded-2xl bg-green-500 text-gray-900 hover:scale-110">
          <FaSearch />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
            <Book imageSrc={Bimg} title={"Hello"}/>
            <Book imageSrc={Bimg} title={"Hello"}/>
            <Book imageSrc={Bimg} title={"Hello"}/>
            <Book imageSrc={Bimg} title={"Hello"}/>
            <Book imageSrc={Bimg} title={"Hello"}/>
            <Book imageSrc={Bimg} title={"Hello"}/>
            <Book imageSrc={Bimg} title={"Hello"}/>

        </div>
        <Pagination />
    </div>
  );
};

export default Content;
