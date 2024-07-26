import React from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = ({ onSignIn, onSignUp, onSignOut, isAuthenticated, user }) => {
  return (
    <div className="flex bg-gray-900 px-3 py-2">
      <div className="m-2 mr-8 w-1/4">
        <h1 className="text-3xl italic font-bold text-gray-600">
          Share<span className="text-green-500">Shelf</span>
        </h1>
      </div>
      <div className="flex justify-between w-full">
        <ul className="flex text text-white">
          <Link to="/">
            <li className="m-2 pt-1">Home</li>
          </Link>
          <Link to="/add-book">
            <li className="m-2 pt-1">Add Book</li>
          </Link>
          <Link to="/about">
            <li className="m-2 pt-1">About</li>
          </Link>
        </ul>
        <div className="flex items-center">
          {isAuthenticated ? (
            <>
              <div className="p-1 rounded-2xl bg-white m-2 mr-0 ">
                <FaUser />
              </div>
              <div className="text-white m-2">
                {user.username ? user.username : "undefined"}
              </div>
              <button
                onClick={onSignOut}
                className="m-2 bg-green-500 px-2 py-1 rounded-lg hover:scale-110"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link to="/signup">
                <button
                  onClick={onSignUp}
                  className="m-2 bg-green-500 px-2 py-1 rounded-lg hover:scale-110"
                >
                  Sign Up
                </button>
              </Link>
              <Link to="/signin">
                <button
                  onClick={onSignIn}
                  className="m-2 text-green-500 px-2 py-1 rounded-lg hover:bg-gray-800"
                >
                  Sign In
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
