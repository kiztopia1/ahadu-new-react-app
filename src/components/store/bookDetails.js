import React from 'react';
import {Link, useParams} from 'react-router-dom'
import './bookDetails.css';

import Nav from '../global/nav';
import BooksList from './storeMini/booksList'
import { connect } from 'react-redux';
const BookDetails = ({books}) => {
    let {id} = useParams()
    let book = books.filter(book => book.id == id)[0]
    console.log(id, book, books)
    return (
        <div className="bookDetails">
            <Nav/>
            <div className=' row flex '>
                <div className="bookDetailImg col-md-4 col-xs-4">
                    <img src='/imgs/theDarkHours.jpg' className=''></img>
                </div>
                <div className="details col-xs-8 col-sm-8">
                    <Link to="/">{book.title}</Link>
                    <h4 className="bold">{book.title}</h4>

                    <bold>book 4 out of 5</bold>
                    <div className='price alert-warning'>
                        Kindle:     50birr
                    </div>
                    <div className="buyButton btn btn-success">
                        buy now
                    </div>
                </div>
                <div className='checkout'>
                <span>digital price  <small>{book.price}</small></span>
                <span>digital price  <small>{book.price}</small></span>
                <span>digital price  <small>{book.price}</small></span>
                <div className='one-click-btn'>Buy now with 1-click</div>
                <p>you can read it with our built-in reader</p>
                </div>
            </div>
            
        </div>
    )
}
const mapStateToProps = (state) => ({
    books:state.BOOKS
});
export default connect(mapStateToProps)(BookDetails) ;