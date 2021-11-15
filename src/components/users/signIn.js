import React from 'react';
import './signIn.css'

import Nav from '../global/nav'
const SingIn = () => {

    return(
        <div className=''>
            <Nav/>
            <div className='signIn'>
            <form action="GET" className="signInForm">
                <h4>sign in</h4>
                <div >
                    <label htmlFor='userName'>username</label>
                    <input id='userName' type="text"></input>
                </div>
                <div>
                    <label htmlFor='email'>email</label>
                    <input id='email' type="email"></input>
                </div>
                <div>
                    <label htmlFor='password'>password</label>
                    <input id='password' type="password"></input>
                </div>
                <br/>
                <button type='submit' className='btn btn-success'>sign in</button>
            </form>
            </div>
        </div>
    )
}

export default SingIn;