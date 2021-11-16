import React from 'react';
import './nav.css'

import {Link} from 'react-router-dom';
const Nav = () => {
    return (
        <div>
        <nav className="nav row">
            <div className="logo ">
                <div className='burger'>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <Link to='/'>AHADU</Link>
                
            </div>

            

            <div className="search ">
                <input type="text"></input>
                <button>search</button>
            </div>

            <div className="other">
                <div><span className='fa fa-user'></span> sign in</div>
                <div className="chart"><span className="fa fa-shoppingcart"></span></div>
            </div>
            
        </nav>
        <div className='col-xs-12 col-sm-12'>
        <Link to='/book' className='white'>book</Link>
        <Link to='/' className="white">store</Link>
        <Link to='/reader' className="white">reader</Link>
        <Link to='/signIn' className='white'>sign in</Link>
        </div>
        </div>
    )
}

export default Nav;