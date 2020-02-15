import React, { useState, useEffect } from 'react'
import './Home.scss';
import Routes from '../../Router';
import Places from '../Places/Places'
import { useRoutes, A } from 'hookrouter';

function Home(props) {

    const toggleShowPlaces = () => props.setShowPlaces(true)
    const toggleShowPeople = () => props.setShowPeople(true)

    const routeResult = useRoutes(Routes)   

    return (
        <div className='home'>
            <h2>Start your next backcountry adventure.</h2>
            <nav className='people-places-nav'>
                <A href='/places' onClick={toggleShowPlaces}>Places</A>
                <A href='/people' onClick={toggleShowPeople}>People</A>
            </nav> 
            {routeResult}
        </div>
    )
}

export default Home;