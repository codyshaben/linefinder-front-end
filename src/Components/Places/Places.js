import React, { useState } from 'react';
import AllTrails from '../AllTrails/AllTrails';
import RatingDropdown from '../RatingDropdown/RatingDropdown'
import DifficultyDropdown from '../DifficultyDropdown/DifficultyDropdown'
import FiveStarTrails from '../AllTrails/FiveStarTrails';
import FourStarTrails from '../AllTrails/FourStarTrails';
import ThreeStarTrails from '../AllTrails/ThreeStarTrails';
import TwoStarTrails from '../AllTrails/TwoStarTrails';
import OneStarTrails from '../AllTrails/OneStarTrails';
import StarRatings from 'react-star-ratings';
import './Places.scss';
import {useRoutes, A} from 'hookrouter';

function Places() {
    const [limit, setLimit] = useState(10);
    const [isRatingOpen, setRatingOpen ] = useState(false);
    const [isDifficultyOpen, setDifficultyOpen ] = useState(false);

    const toggleRatingDropDown = () => setRatingOpen(!isRatingOpen);
    const toggleDifficultyDropDown = () => setDifficultyOpen(!isDifficultyOpen);
    const onLoadMore = () => setLimit(limit + 10);

    const trailContainer = (trail) => {
        return (
            <section className='trail-container' key={trail.id}>
                <div className='left-side'>
                    <h4>{trail.name}</h4>
                    <p className='location'>{trail.location}</p>
                    <StarRatings
                        rating={trail.stars}
                        starRatedColor='rgb(11, 125, 201)'
                        starDimension='30px'
                    />
                    <p className='summary'>{trail.summary}</p>
                </div> 
                <img className='image' src={trail.imgMedium} alt='Not Found'></img>
            </section>
        )
    }

    const routes = {
        '/all-trails': () => <AllTrails trailContainer={trailContainer} limit={limit} onLoadMore={onLoadMore}/>,
        '/five-star': () => <FiveStarTrails trailContainer={trailContainer} limit={limit} onLoadMore={onLoadMore}/>,
        '/four-star': () => <FourStarTrails trailContainer={trailContainer} limit={limit} onLoadMore={onLoadMore}/>,
        '/three-star': () => <ThreeStarTrails trailContainer={trailContainer} limit={limit} onLoadMore={onLoadMore}/>,
        '/two-star': () => <TwoStarTrails trailContainer={trailContainer} limit={limit} onLoadMore={onLoadMore}/>,
        '/one-star': () => <OneStarTrails trailContainer={trailContainer} limit={limit} onLoadMore={onLoadMore}/>,
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
                <div className='dropdown-title'>
                    <header onClick={toggleRatingDropDown}>Rating</header>
                    { isRatingOpen === false ? null : <RatingDropdown routes={routes}/> }
                </div>
                <div className='dropdown-title'>
                    <header onClick={toggleDifficultyDropDown}>Difficulty</header>
                    { isDifficultyOpen === false ? null : <DifficultyDropdown routes={routes}/> }
                </div>
                {/* <DifficultyDropdown /> */}
            </section>
            {routeResult}
        </div>
    );
};

export default Places;