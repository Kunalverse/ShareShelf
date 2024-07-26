import React from "react";

const Header = ({ onSignIn, onSignUp, onSignOut, isAuthenticated }) => {
  return (
    <div className="flex bg-gray-900 px-3 py-2">
      <div className="m-2 mr-8 w-1/4">
        <h1 className="text-3xl italic font-bold text-gray-600">
          Share<span className="text-green-500">Shelf</span>
        </h1>
      </div>
      <div className="flex justify-between w-full">
        <ul className="flex text text-white">
          <li className="m-2 pt-2">Home</li>
          <li className="m-2 pt-2">DashBoard</li>
          <li className="m-2 pt-2">About</li>
        </ul>
        <div className="flex">
          {isAuthenticated ? (
            <button
              onClick={onSignOut}
              className="m-2 bg-green-500 px-2 py-1 rounded-lg hover:scale-110"
            >
              Sign Out
            </button>
          ) : (
            <>
              <button
                onClick={onSignUp}
                className="m-2 bg-green-500 px-2 py-1 rounded-lg hover:scale-110"
              >
                Sign Up
              </button>
              <button
                onClick={onSignIn}
                className="m-2 text-green-500 px-2 py-1 rounded-lg hover:bg-gray-800"
              >
                Sign In
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
