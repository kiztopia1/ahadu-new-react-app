import { ADD_BOOKS, ADD_BOOKS_ROW, ADD_BOOK_TO_ROW } from "./actions";


export const BOOKS = (state =[], action) => {
    const {type, payload } = action;
    switch(type) {
        case ADD_BOOKS: {
            state.push(payload)
        }
        // case ADD_BOOKS_ROW: {
        //     state.concat(payload.data)
        // }
        // case ADD_BOOK_TO_ROW: {
        //     payload.data.forEach(book=> state.find((data)=> payload.data.row == payload.row).data.push(book) )
            
        // }
        default:
            return state
    }
    
    return state;
}

