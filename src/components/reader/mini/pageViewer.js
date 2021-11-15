import React from 'react';
import Reader from '../reader';
import './pageViewer.css'
const PageViewer = () => {

    return(
        <div className='pageViewer'>
            <img className="page" src={`${process.env.PUBLIC_URL}/imgs/page2.png`} alt="can not load the page try again"></img>
            <br/><hr/><br/>
            <img className="page" src={`${process.env.PUBLIC_URL}/imgs/page2.png`} alt="can not load the page try again"></img>
        </div>
    )
};

export default PageViewer;