import React from 'react';
import Places from '../Places/Places';
import People from '../People/People';
import './UserHome.scss';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom'

const Home = (props) => {
    const { firstName } = props

    return (
        <div className='home'>
            <p>Welcome, {firstName}</p>
            <h2>Start your next backcountry adventure.</h2>
            <nav className='people-places-nav'>
                <Link to ='/places'>Places</Link>
                <Link to ='/people'>People</Link>
            </nav>
        <Switch>
            <Route path='/places'>
                <Places/>
            </Route>
            <Route path='/people'>
                <People />
            </Route>
        </Switch> 
        </div>
      )
};

export default Home;