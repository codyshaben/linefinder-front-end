import React from 'react'
import './Home.scss';
import Routes from '../../Router';
import { useRoutes, A } from 'hookrouter';

function Home() {

    const routeResult = useRoutes(Routes)

    return (
        <div className='home'>
            <section>
                <h2>Start your next backcountry adventure.</h2>
                <nav>
                    <A href='/places'>Places</A>
                    <A href='/people'>People</A>
                    {routeResult}
                </nav> 
            </section>
        </div>

    )
}

export default Home;