import React, { useState } from 'react';
import AllTrails from '../AllTrails/AllTrails';
import RatingDropdown from '../RatingDropdown/RatingDropdown';
import DifficultyDropdown from '../DifficultyDropdown/DifficultyDropdown';
import FiveStarTrails from '../AllTrails/FiveStarTrails';
import FourStarTrails from '../AllTrails/FourStarTrails';
import ThreeStarTrails from '../AllTrails/ThreeStarTrails';
import TwoStarTrails from '../AllTrails/TwoStarTrails';
import OneStarTrails from '../AllTrails/OneStarTrails';
import Marker from './Marker';
import StarRatings from 'react-star-ratings';
import noImage from './Images/image-not-found.png'
import GoogleMapReact from 'google-map-react';
import RingLoader from 'react-spinners/RingLoader';
import './Places.scss';
import { useRoutes } from 'hookrouter';


function Places() {
    const [limit, setLimit] = useState(10);
    const [isRatingOpen, setRatingOpen ] = useState(false);
    const [isDifficultyOpen, setDifficultyOpen ] = useState(false);
    const [listView, setListView] = useState(true);
    const [mapView, setMapView] = useState(false);
    const [loadMoreButton, setLoadMoreButton] = useState(false);
    const [loading, setIsLoading] = useState(true);

    const hideRatingDropDown = () => setRatingOpen(false);
    const toggleRatingDropDown = () => setRatingOpen(!isRatingOpen);
    const toggleDifficultyDropDown = () => setDifficultyOpen(!isDifficultyOpen);
    const onLoadMore = () => setLimit(limit + 10);

    const showListView = () => {
        setListView(true) 
        setMapView(false)
        setLoadMoreButton(true)
    };

    const showMapView = () => {
        setListView(false) 
        setMapView(true)
        setLoadMoreButton(false)
    };

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
    };

    const showLoading = () => {
        return (
            <div className='loading-spinner'>
                <RingLoader size={150} color={'rgb(11, 125, 201)'} loading={loading}/>
                <h3>Loading...</h3>
            </div>
        );
    };

    const viewMapList = () => {
        return (
            <section className='views'>
                    <button className='list-view' onClick={showListView}>List</button>
                    <p>|</p>
                    <button className='map-view' onClick={showMapView}>Map</button>
            </section>
        );
    };

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
                    alt='Trail'
                    onError={imageReplacement}
                    >
                </img>
            </section>
        );
    };

    const mapContainer = (trails) => {
        return (
            <div style={{ height: '100vh', width: '100%'}}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: process.env.REACT_APP_MAPS_API_KEY}}
                    defaultCenter={{ lat: 39.766636, lng: -105.980210}}
                    defaultZoom={8}
                    defaultStyle={{  height: '500px', width: '500px'}}
                >
                {trails.map(trail => {
                    return (
                        <Marker lat={trail.latitude} lng={trail.longitude} key={trail.id}/>
                    )
                })}
                </GoogleMapReact>
            </div>
        );
    };

    const routes = {
        '/all-trails': () => <AllTrails 
            mapContainer={mapContainer} 
            trailContainer={trailContainer} 
            limit={limit} 
            onLoadMore={onLoadMore}
            viewMapList={viewMapList}
            setLoadMoreButton={setLoadMoreButton}
            loadMoreButton={loadMoreButton}
            listView={listView}
            showLoading={showLoading}
            loading={loading}
            setIsLoading={setIsLoading}
        />,
        '/five-star': () => <FiveStarTrails 
            mapContainer={mapContainer} 
            trailContainer={trailContainer} 
            limit={limit} 
            onLoadMore={onLoadMore}
            viewMapList={viewMapList}
            setLoadMoreButton={setLoadMoreButton}
            loadMoreButton={loadMoreButton}
            listView={listView}
            showLoading={showLoading}
            loading={loading}
            setIsLoading={setIsLoading}
        />,
        '/four-star': () => <FourStarTrails 
            mapContainer={mapContainer} 
            trailContainer={trailContainer} 
            limit={limit} 
            onLoadMore={onLoadMore}
            viewMapList={viewMapList}
            setLoadMoreButton={setLoadMoreButton}
            loadMoreButton={loadMoreButton}
            listView={listView}
            showLoading={showLoading}
            loading={loading}
            setIsLoading={setIsLoading}
        />,
        '/three-star': () => <ThreeStarTrails 
            mapContainer={mapContainer} 
            trailContainer={trailContainer} 
            limit={limit} 
            onLoadMore={onLoadMore}
            viewMapList={viewMapList}
            setLoadMoreButton={setLoadMoreButton}
            loadMoreButton={loadMoreButton}
            listView={listView}
            showLoading={showLoading}
            loading={loading}
            setIsLoading={setIsLoading}
        />,
        '/two-star': () => <TwoStarTrails 
            mapContainer={mapContainer} 
            trailContainer={trailContainer} 
            limit={limit} 
            onLoadMore={onLoadMore}
            viewMapList={viewMapList}
            setLoadMoreButton={setLoadMoreButton}
            loadMoreButton={loadMoreButton}
            listView={listView}
            showLoading={showLoading}
            loading={loading}
            setIsLoading={setIsLoading}
        />,
        '/one-star': () => <OneStarTrails 
            mapContainer={mapContainer} 
            trailContainer={trailContainer} 
            limit={limit} 
            onLoadMore={onLoadMore}
            viewMapList={viewMapList}
            setLoadMoreButton={setLoadMoreButton}
            loadMoreButton={loadMoreButton}
            listView={listView}
            showLoading={showLoading}
            loading={loading}
            setIsLoading={setIsLoading}
        />,
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