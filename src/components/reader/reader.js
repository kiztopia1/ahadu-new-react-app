import React from 'react';

import ReaderNav from './mini/readerNav'
import PageViewer from './mini/pageViewer'
import Nav from '../global/nav'
const Reader = ( ) => {

    return (
        <div>
            <Nav></Nav>
            <ReaderNav></ReaderNav>
        <PageViewer></PageViewer>
        </div>
        
    )
}
export default Reader;