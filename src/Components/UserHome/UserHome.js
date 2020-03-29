import React, {useEffect} from 'react';
import Places from '../Places/Places';
import People from '../People/People';
import './UserHome.scss';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
  } from 'react-router-dom'
import PublicHome from '../PublicHome/PublicHome';

const Home = () => {

    return (
        <Router>
        <div className='user-home'>
            <p>Welcome,</p>
            <nav className='people-places-nav'>
                <Link to ='/home/places'>Places</Link>
                <Link to ='/home/people'>People</Link>
            </nav>
        <Switch>
            <Route path='/home/places'>
                <Places />
            </Route>
            <Route path='/home/people'>
                <People />
            </Route>
        </Switch> 
        </div>
        </Router>
      )
};

export default Home;