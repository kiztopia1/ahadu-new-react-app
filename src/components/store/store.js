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
                <BooksList/>
            </div>
            
        </div>
    )
}

export default Store;