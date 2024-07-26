const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true, 
    },
    email: {
        type: String,
        required: true,
        unique: true,  
    },
    bookname: {
        type: String,
        required: true,
    },
    imageurl: {
        type: String,
        required: true,
    },
    lendername: {
        type: String,
    },
    lenderemail: {
        type: String,
    },
    returnperiod: {
        type: Number,
    },
}, {
    timestamps: true,
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
