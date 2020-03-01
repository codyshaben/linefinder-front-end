import React, { useState } from 'react';
import AllTrails from '../AllTrails/AllTrails';
import RatingDropdown from '../RatingDropdown/RatingDropdown';
import DifficultyDropdown from '../DifficultyDropdown/DifficultyDropdown';
import FiveStarTrails from '../AllTrails/FiveStarTrails';
import FourStarTrails from '../AllTrails/FourStarTrails';
import ThreeStarTrails from '../AllTrails/ThreeStarTrails';
import TwoStarTrails from '../AllTrails/TwoStarTrails';
import OneStarTrails from '../AllTrails/OneStarTrails';
import StarRatings from 'react-star-ratings';
import noImage from './Images/image-not-found.png'
// import black from './Images/Black.png'
// import dblack from './Images/DoubleBlack.png'
// import blueBlack from './Images/BlueBlack.png'
// import blue from './Images/Blue.png'
// import greenBlue from './Images/GreenBlue.png'
// import green from './Images/Green.png'
import './Places.scss';
import { useRoutes } from 'hookrouter';

function Places() {
    const [limit, setLimit] = useState(10);
    const [isRatingOpen, setRatingOpen ] = useState(false);
    const [isDifficultyOpen, setDifficultyOpen ] = useState(false);

    const hideRatingDropDown = () => setRatingOpen(false);
    const toggleRatingDropDown = () => setRatingOpen(!isRatingOpen);
    const toggleDifficultyDropDown = () => setDifficultyOpen(!isDifficultyOpen);
    const onLoadMore = () => setLimit(limit + 10);

    const trailDifficultySymbols = (difficulty) => {
        return difficulty === 'dblack' ? 'Double Black'
        : difficulty === 'black' ? 'Black'
        : difficulty === 'blueBlack' ? 'Blue Black'
        : difficulty === 'blue' ? 'Blue'
        : difficulty === 'greenBlue' ? 'Green Blue'
        : 'Green'
    };

    const imageReplacement = (error) => {
        error.target.src=noImage
        return true
    }

    const trailContainer = (trail) => {
        return (
            <section className='trail-container' key={trail.id}>
                <div className='left-side trail-description'>
                    <h4>{trail.name}</h4>
                    <p className='location'>{trail.location}</p>
                    <p className='star-text'>{trail.stars} Stars  | {trail.starVotes} Reviews</p>
                    <StarRatings rating={trail.stars} starRatedColor='rgb(11, 125, 201)' starDimension='30px'/>
                    <p className='summary'>{trail.summary}</p>
                </div> 
                <div className='left-side trail-info'>
                    <p className='trail-details symbol'>Difficulty | {trailDifficultySymbols(trail.difficulty)}</p>
                    <p className='trail-details'>Length | {trail.length} Miles</p>
                    <p className='trail-details'>Ascent | {trail.ascent} Feet</p>
                    <p className='trail-details'>Descent | {trail.descent} Feet</p>
                    <p className='trail-details'>Highest Altitude | {trail.high} Feet</p>
                    <p className='trail-details'>Lowest Altitude | {trail.low} Feet</p>
                </div>
                <img 
                    className='image' 
                    src={trail.imgMedium} 
                    alt='Trail Image'
                    onError={imageReplacement}
                    >
                </img>
            </section>
        );
    };

    const mapContainer = (trail) => {
        return (
                <p className='map-view'>hello from the map container</p>
        )
    }

    const routes = {
        '/all-trails': () => <AllTrails mapContainer={mapContainer} trailContainer={trailContainer} limit={limit} onLoadMore={onLoadMore}/>,
        '/five-star': () => <FiveStarTrails mapContainer={mapContainer} trailContainer={trailContainer} limit={limit} onLoadMore={onLoadMore}/>,
        '/four-star': () => <FourStarTrails mapContainer={mapContainer} trailContainer={trailContainer} limit={limit} onLoadMore={onLoadMore}/>,
        '/three-star': () => <ThreeStarTrails mapContainer={mapContainer} trailContainer={trailContainer} limit={limit} onLoadMore={onLoadMore}/>,
        '/two-star': () => <TwoStarTrails mapContainer={mapContainer} trailContainer={trailContainer} limit={limit} onLoadMore={onLoadMore}/>,
        '/one-star': () => <OneStarTrails mapContainer={mapContainer} trailContainer={trailContainer} limit={limit} onLoadMore={onLoadMore}/>,
    };

    const routeResult = useRoutes(routes);

    return (
        <div className='places' >   
            <section className='dropdown-menu'>
                <header>Sort by</header>
                <div className='dropdown-title'>
                    <header onClick={toggleRatingDropDown}>Rating</header>
                    { isRatingOpen === false ? null : <RatingDropdown hideRatingDropDown={hideRatingDropDown} routes={routes}/> }
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