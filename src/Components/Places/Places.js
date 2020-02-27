import React, { useState } from 'react';
import AllTrails from '../AllTrails/AllTrails';
import RatingDropdown from '../RatingDropdown/RatingDropdown'
// import MapView from '../MapView/MapView';
import FiveStarTrails from '../AllTrails/FiveStarTrails';
import FourStarTrails from '../AllTrails/FourStarTrails';
import ThreeStarTrails from '../AllTrails/ThreeStarTrails';
import TwoStarTrails from '../AllTrails/TwoStarTrails';
import OneStarTrails from '../AllTrails/OneStarTrails';
import './Places.scss';
import {useRoutes, A} from 'hookrouter';

function Places() {
    const [limit, setLimit] = useState(10);
    const [isOpen, setIsOpen ] = useState(false);

    const toggleDropDown = () => setIsOpen(!isOpen);
    const hideDropdown = () => setIsOpen(false);
    const onLoadMore = () => setLimit(limit + 10);

    const routes = {
        '/all-trails': () => <AllTrails limit={limit} onLoadMore={onLoadMore}/>,
        '/five-star': () => <FiveStarTrails limit={limit} onLoadMore={onLoadMore}/>,
        '/four-star': () => <FourStarTrails limit={limit} onLoadMore={onLoadMore}/>,
        '/three-star': () => <ThreeStarTrails limit={limit} onLoadMore={onLoadMore}/>,
        '/two-star': () => <TwoStarTrails limit={limit} onLoadMore={onLoadMore}/>,
        '/one-star': () => <OneStarTrails limit={limit} onLoadMore={onLoadMore}/>,
    };

    const routeResult = useRoutes(routes);

    return (
        <div className='places' >   
            <section className='views'>
                    <button className='list-view'>List</button>
                    <p>|</p>
                    <button className='map-view'>Map</button>
            </section> 
            <section className='dropdown-menu'>
                <header>Sort by</header>
                <div className='rating-dropdown'>
                    <header onClick={toggleDropDown}>Rating</header>
                    { 
                    isOpen === false ? null 
                    : <RatingDropdown routes ={routes}/>
                    }
            </div>
                {/* <DifficultyDropdown /> */}
            </section>
            {routeResult}
        </div>
    );
};

export default Places;