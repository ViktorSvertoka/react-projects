const express = require('express');
const cors = require('cors');
const booksData = require('./data/books.json'); // Import the book data

const app = express();

app.use(cors());

function getRandomBook() {
  const randomIndex = Math.floor(Math.random() * booksData.length);
  const randomBook = booksData[randomIndex];
  return randomBook;
}

app.get('/random-book', (req, res) => {
  res.json(getRandomBook());
});

app.get('/random-book-delayed', (req, res) => {
  setTimeout(() => {
    res.json(getRandomBook());
  }, 2000);
});

const port = process.env.PORT || 4000; // http://localhost:4000/random-book
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
