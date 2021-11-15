import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import './App.css';

import Reader from './components/reader/reader'
import BookDetails from './components/store/bookDetails'
import Store from './components/store/store'
import SignIn from './components/users/signIn'
import SingIn from './components/users/signIn';
function App() {
    return ( 
        <BrowserRouter>
        <Switch>

        <Route path="/home" component={Store} />
        <Route path='/book' component={BookDetails}/>
        <Route path='/reader' component={Reader}/>
        <Route path='/signIn' component={SingIn}/>
        <Route path='/:id' component={Reader}/>,
        <Route path="/" component={Store} exact/>


        </Switch>
        
        </BrowserRouter>
    )
}

export default App;