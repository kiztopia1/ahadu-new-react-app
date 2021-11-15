import React from 'react';

import Nav from "../global/nav";
import Hero from "../global/hero"
import BooksList from "./storeMini/booksList"
const Store = () => {
    return(
        <div className='store'>
            <Nav/>

            <BooksList/>
        </div>
    )
}

export default Store;