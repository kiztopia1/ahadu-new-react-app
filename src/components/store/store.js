import React from 'react';
import './store.css'
import Nav from "../global/nav";
import Hero from "../global/hero"
import Aside from '../global/aside'
import BooksList from "./storeMini/booksList"
const Store = () => {
    return(
        <div className='store'>
            <Nav/>
            <div className='main'>
                <Aside/>
                <div>
                <BooksList title='best seller this month' />
                <BooksList title='Recommended for you in ahadu eBook deals' />
                </div>
            </div>
            
        </div>
    )
}

export default Store;