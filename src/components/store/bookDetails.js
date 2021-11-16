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
                    <h2 className="bold">{book.title}</h2>
                    
                    <small className='title'>by <Link to='/'>{book.author}</Link> | from ahadu edition</small>
                    <bold>book 4 out of 5</bold>
                    <div className='price alert-warning'>
                        Kindle:     50birr
                    </div>
                    <div className="buyButton btn btn-success">
                        buy now
                    </div>
                    <span className='hr'></span>
                    <div className='description'>
                        <p>{book.description}</p>
                    </div>
                </div>
                <div className='checkout'>
                <span>digital price  <small><Link to=''>{book.price}</Link> birr</small></span>
                <span>audio book  <small><Link to='/coming-soon'>71 birr</Link></small></span>
                <span>hard cover <small>400 birr</small></span>
                <Link className='one-click-btn' to='/coming-soon'>Buy now with 1-click</Link>
                <p>you can read it with our built-in reader</p>
                </div>
            </div>
            <span className='hr'></span>
            <BooksList title='also ahadu recommends '></BooksList>
        </div>
    )
}
const mapStateToProps = (state) => ({
    books:state.BOOKS
});
export default connect(mapStateToProps)(BookDetails) ;