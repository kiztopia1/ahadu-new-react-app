export const ADD_BOOKS = "ADD_BOOKS";
export const addBooks = books => ({
    type:ADD_BOOKS,
    payload: books
});
export const ADD_BOOKS_ROW = "ADD_BOOKS_ROW";
export const addBooksRow = data => ({
    type:ADD_BOOKS_ROW,
    payload: data
});
export const ADD_BOOK_TO_ROW = "ADD_BOOK_TO_ROW";
export const addBookToRow = data => ({
    type:ADD_BOOK_TO_ROW,
    payload: data
});
