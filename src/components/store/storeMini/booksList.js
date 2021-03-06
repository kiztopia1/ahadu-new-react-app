import React, { useState, useEffect} from 'react';
import { connect } from 'react-redux';
import './booksList.css'
import {getBooks} from '../selectors'
import BooksListSlide from './booksListSlide';
import { loadBooks} from '../thunks'
import { Link } from 'react-router-dom';

const BooksList = ({books, startLoadingBooks, title}) => {

    useEffect(()=>{
        startLoadingBooks()
    }, [])
    {console.log(books)}
    return (
        <div className="booksList">
                <h3 className='head'>{title}</h3>
                <span className='hr'></span>
                <ul id='booksList'>
                    {books.map(book => (
                        <li className='book' key={book.id}>
                            <Link to={`/book/${book.id}`} className='book-link'>
                            <img className='bookImg'  src={`/imgs/${book.img_id}`}></img>

                            <h4>{book.title}</h4>
                            <small className='flex'>by adam hittlor</small>
                            <span className='money-box'>{book.price}  birr</span>
                            </Link>
                        </li>
                    ))
                    }
                
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