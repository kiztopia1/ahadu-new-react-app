import {addBooks, } from './actions'


export const loadBooks = () => async dispatch => {
    try{
        const response = await fetch('http://localhost:8000/Books');
        const Books = await response.json();
        dispatch(addBooks(Books));
    }
    catch (e){
        console.log(e);
    }
}

