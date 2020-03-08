import React from 'react';
import './Home.scss';
import Places from '../Places/Places';
import People from '../People/People';
import {useRoutes, A} from 'hookrouter';

const routes =  {
    '/places': () => <Places />,
    '/people': () => <People />,
};

function Home() {
    const routeResult = useRoutes(routes);

    return (
        <div className='home'>
            <h2>Start your next backcountry adventure.</h2>
            <nav className='people-places-nav'>
                <A href='/places' >Places</A>
                <A href='/people'>People</A>
            </nav> 
            {routeResult}
        </div>
    );
};

export default Home;