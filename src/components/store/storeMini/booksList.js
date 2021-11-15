import React, { useState, useEffect} from 'react';
import { connect } from 'react-redux';
import './booksList.css'

import {getBooks} from '../selectors'
import BooksListSlide from './booksListSlide';
import { loadBooks} from '../thunks'

const BooksList = ({books, startLoadingBooks}) => {
    let [page, setPage] = useState(0);

    useEffect(()=>{
        startLoadingBooks()
    }, [])
    
    return (
        <div className="booksList">
                <BooksListSlide/>
                <ul id='booksList'>
                    <li className='book'>
                        <img className='bookImg'  src={`${process.env.PUBLIC_URL}/imgs/book.jpeg`}></img>
                        <h4>the power of habit</h4>
                        <small>by <a href="">adam hittlor</a></small>
                    </li>
                    {console.log(books)}
                    
                </ul>
        </div>
    )
}
const mapStateToProps = (state) => ({
    books:state.BOOKS
});
const mapDispatchToProps = (dispatch) => ({
   
    startLoadingBooks: () => dispatch(loadBooks())
});
export default connect(mapStateToProps, mapDispatchToProps)(BooksList);