const express = require('express');
const multer = require('multer');
const path = require('path');
const jwt = require("jsonwebtoken");
const Book = require('../models/books');
const fs = require('fs');

const router = express.Router();

const jwtSecret = process.env.JWT_SECRET

const uploadsDir = path.join(__dirname, '../frontend/public/uploads');
if(!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Configure multer for file storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage });

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

  
    if (token == null) return res.sendStatus(401);
  
    jwt.verify(token, jwtSecret, (err, user) => {
      if (err) return res.sendStatus(403);
      req.user = user;
      next();
    });
  };

  router.post('/add-book', authenticateToken, upload.single('image'), async (req, res) => {
    const { bookName } = req.body;
    const imageURL = `/uploads/${req.file.filename}`;
    const { username, email } = req.user;
    console.log('User : ' + req.user.username)

    console.log('here: ' + imageURL + " " + username +" " + email + " " + bookName);
  
    try {
      const newBook = new Book({ bookname: bookName, imageURL, username, email });
      await newBook.save();
      res.status(201).json(newBook);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });

module.exports = router;
