import React from "react";
import Books from "../../assets/images/Book8.jpg";
import './style.css'

const Welcome = () => {
  return (
    <div className="bg-overlay flex h-[70vh] relative justify-center">
      <div className="text-xl font-semibold z-10 w-2/5 m-auto text-center ">
        <h1 className="text-5xl italic font-bold text-gray-600 text-center my-3">
          Share<span className="text-green-500">Shelf</span>
        </h1>
        <span className="text-3xl font-sans text-gray-950">
          Welcome to our community where you can borrow and lend books with fellow book lovers.
        </span>
      </div>
    </div>
  );
};

export default Welcome;
