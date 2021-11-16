import React from 'react';
import {Link} from 'react-router-dom'
import './bookDetails.css';

import Nav from '../global/nav';
import BooksList from './storeMini/booksList'
const BookDetails = () => {

    return (
        <div className="bookDetails">
            <Nav/>
            <div className='main row '>
                <div className="bookDetailImg col-md-4 col-xs-4">
                    <img src='/imgs/theDarkHours.jpg' className=''></img>
                </div>
                <div className=" details col-xs-8 col-sm-8">
                    <Link to="/">jemes bond</Link>
                    <h4 className="bold">The power of habit</h4>

                    <bold>book 4 out of 5</bold>
                    <div className='price alert-warning'>
                        Kindle:     50birr
                    </div>
                    <div className="buyButton btn">
                        buy now
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default BookDetails;