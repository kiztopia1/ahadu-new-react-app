import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import './App.css';

import Reader from './components/reader/reader'
import BookDetails from './components/store/bookDetails'
import Store from './components/store/store'
import Error from './components/error'

import SingIn from './components/users/signIn';
function App() {
    return ( 
        <BrowserRouter>
            <div> 
                <header></header>
            </div>
            <Switch>
                <Route path="/" component={Store} exact/>
                <Route path="/home" component={Store} />
                <Route path='/reader' component={Reader}/>
                <Route path='/signIn' component={SingIn}/>
                <Route path='/book/:id' component={BookDetails}/>,
                <Route component={Error}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App;