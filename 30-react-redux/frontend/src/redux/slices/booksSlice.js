import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import createBookWithID from '../../utils/createBookWithID';

const initialState = [];

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    deleteBook: (state, action) => {
      return state.filter(book => book.id !== action.payload);
    },
    toggleFavorite: (state, action) => {
      state.forEach(book => {
        if (book.id === action.payload) {
          book.isFavorite = !book.isFavorite;
        }
      });
    },
  },
});

export const { addBook, deleteBook, toggleFavorite } = booksSlice.actions;

export const thunkFunction = async (dispatch, getState) => {
  try {
    const res = await axios.get('http://localhost:4000/random-book');
    if (res.data && res.data.title && res.data.author) {
      dispatch(addBook(createBookWithID(res.data, 'API')));
    }
  } catch (error) {
    console.log('Error fetching random book', error);
  }
};

export const selectBooks = state => state.books;

export default booksSlice.reducer;
