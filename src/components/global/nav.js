import React from 'react';
import './nav.css'

import {Link} from 'react-router-dom';
const Nav = () => {
    return (
        <nav className="nav row">
            <div className="logo col-xs-9 col-sm-9 col-md-9">
                <div className='burger'>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                Ahadu
            </div>

            <div className="other col-sx-3">
                <div><span className='fa fa-user'></span> sign in</div>
                <div className="chart"><span className="fa fa-shoppingcart"></span></div>
                
            </div>

            <div className="search ">
                <input type="text"></input>
                <button>search</button>
            </div>
            <div className='col-xs-12 col-sm-12'>
            <Link to='/book' className='white'>book</Link>
            <Link to='/' className="white">store</Link>
            <Link to='/reader' className="white">reader</Link>
            <Link to='/signIn' className='white'>sign in</Link>
            </div>
        </nav>
    )
}

export default Nav;