import React, { useState, useEffect} from 'react';
import { connect } from 'react-redux';
import './booksList.css'
import {getBooks} from '../selectors'
import BooksListSlide from './booksListSlide';
import { loadBooks} from '../thunks'
import { Link } from 'react-router-dom';

const BooksList = ({books, startLoadingBooks}) => {
    let [page, setPage] = useState(0);

    useEffect(()=>{
        startLoadingBooks()
    }, [])
    {console.log(books)}
    return (
        <div className="booksList">
                <BooksListSlide/>
                <ul id='booksList'>
                    {books.map(book => (
                        <li className='book'>
                            <Link to={`book/${book.id}`}>
                            <img className='bookImg'  src='/imgs/theDarkHours.jpg'></img>

                            <h4>{book.title}</h4>
                            <small>by <a href="">adam hittlor</a></small>
                            <span>{book.price}  birr</span>
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