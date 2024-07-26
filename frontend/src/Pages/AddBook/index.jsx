import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
  const [bookName, setBookName] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const formData = new FormData();
    formData.append('bookName', bookName);
    formData.append('image', imageFile);

    try {
      const response = await axios.post('http://localhost:8001/api/books/add-book', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`
        }
      });
      console.log(response)
      navigate('/');
    } catch (err) {
      console.error('Error adding book:', err);
    }
  };

  return (

    <div className="flex items-center justify-center min-h-screen bg-gray-300">
    <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Add a New Book</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="bookName" className="block text-gray-700 mb-2">
            Book Name
          </label>
          <input
            type="text"
            id="bookName"
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700 mb-2">
            Upload Book Cover
          </label>
          <input
            type="file"
            id="image"
            onChange={(e) => setImageFile(e.target.files[0])}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 transition duration-200"
        >
          Add
        </button>
      </form>
    </div>
  </div>
  );
};

export default AddBook;
