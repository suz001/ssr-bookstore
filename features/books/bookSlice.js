import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    editBook: (state, action) => {
      const { id, name, price, category, description } = action.payload;
      const existingBook = state.find(book => book.id === id);
      if(existingBook) {
        existingBook.name = name;
        existingBook.price = price;
        existingBook.category = category;
        existingBook.description = description
      }
    },
    deleteBook: (state, action) => {
      const { id } = action.payload;
      const existingBook = state.find(book => book.id === id);
      if(existingBook) {
        return state.filter(book => book.id !== id);
      }
    }
  }
});

export const { addBook: addBook, editBook: editBook, deleteBook: deleteBook } = bookSlice.actions;
export default bookSlice.reducer;