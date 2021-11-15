import React from 'react';
import './bookListSlide.css';


const BooksListSlide = () => {
    return (
        <div className='bookListStyle'>
            <img className='leftButton' id='leftArrow' src={`${process.env.PUBLIC_URL}/imgs/left_arrow_.png`} alt=''></img>
            <img className='rightButton' id='rightArrow' src={`${process.env.PUBLIC_URL}/imgs/right_arrow_.png`} alt='>'></img>
           </div>
    )
}
export default BooksListSlide;