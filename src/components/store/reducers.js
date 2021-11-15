import { ADD_BOOKS, ADD_BOOKS_ROW, ADD_BOOK_TO_ROW } from "./actions";

let books = [
    {   
        "id": 1,
        "title":"The power of habit",
        "price":120,
        "author":'jemes adam'
    },
    {   
        "id": 1,
        "title":"book 2",
        "price":120,
        "author":'jemes adam'
    },
    {   
        "id": 1,
        "title":"book3",
        "price":120,
        "author":'jemes adam'
    },
    {   
        "id": 1,
        "title":"book4",
        "price":120,
        "author":'jemes adam'
    },
    
]
export const BOOKS = (state =books , action) => {
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
    
}

