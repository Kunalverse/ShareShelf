import React from 'react'

const Book = ({ imageSrc, title }) => {
    return (
      <div className="flex flex-col m-3 items-center justify-center space-x-4 p-4 bg-gray-300 rounded-lg shadow-md text-center">
        <div>
          <img src={imageSrc} alt={title} className="w-32 object-cover rounded" />
          <div className=" font-semibold text-gray-900 my-1">
          {title}
        </div>
        </div>
      </div>
    );
  };

export default Book