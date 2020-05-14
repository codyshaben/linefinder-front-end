import React, { useState, useEffect } from 'react';
import './AllTrails.scss';
import ShowLoading from '../ShowLoading/ShowLoading'
import RatingDropdown from '../DropdownMenus/RatingDropdown';
import DifficultyDropdown from '../DropdownMenus/DifficultyDropdown';
import ListView from './ListView';
import MapView from './MapView';

const AllTrails = (props) => {
    const { user, id, userTrails, setFetchUserTrails } = props;

    const [limit, setLimit] = useState(10);
    const [isRatingOpen, setRatingOpen] = useState(false);
    const [isDifficultyOpen, setDifficultyOpen] = useState(false);
    const [listView, setListView] = useState(true);
    const [mapView, setMapView] = useState(false);
    const [loadMoreButton, setLoadMoreButton] = useState(false);
    const [loading, setIsLoading] = useState(true);
    const [fetchUrl, setFetchUrl] = useState('');
    const [trails, setTrails] = useState([]);

    useEffect(() => {
        async function fetchData() {
            await fetch(`https://linefinder-back-end.herokuapp.com/trails/${fetchUrl}`)
                .then(response => response.json())
                .then(result => {
                    setTrails(result.data)
                    setIsLoading(false)
                    setLoadMoreButton(true)
                })
                .catch(error => console.error(error));
        };
        fetchData();
    }, [fetchUrl]);

    const toggleRatingDropDown = () => {
        setRatingOpen(!isRatingOpen);
        setDifficultyOpen(false);
    };

    const toggleDifficultyDropDown = () => {
        setRatingOpen(false);
        setDifficultyOpen(!isDifficultyOpen);
    };

    const onLoadMore = () => setLimit(limit + 10);

    const scrollToPlaces = () => {
        const placesContainer = document.querySelector('.places');
        placesContainer.scroll(0, 1000);
    };

    const showListView = () => {
        setListView(true);
        setMapView(false);
        setLoadMoreButton(true);
    };

    const showMapView = () => {
        setListView(false);
        setMapView(true);
        setLoadMoreButton(false);
    };

    return (
        <div className='places' onLoad={scrollToPlaces} >
            <section className='dropdown-menu'>
                <header>Sort by:</header>
                <div className='dropdown-title'>
                    <header onMouseOver={toggleRatingDropDown} >Rating</header>
                    {isRatingOpen === false ? null : <RatingDropdown fetchUrl={fetchUrl} setFetchUrl={setFetchUrl} toggleRatingDropDown={toggleRatingDropDown}/>}
                </div>
                <div className='dropdown-title'>
                    <header onMouseOver={toggleDifficultyDropDown}>Difficulty</header>
                    {isDifficultyOpen === false ? null : <DifficultyDropdown fetchUrl={fetchUrl} setFetchUrl={setFetchUrl} toggleDifficultyDropDown={toggleDifficultyDropDown}/>}
                </div>
            </section>
            {loading === true ? <ShowLoading /> : 
                <div>
                    <section className='views'>
                        <button className='view-button' onClick={showListView}>List</button>
                        <p>|</p>
                        <button className='view-button' onClick={showMapView}>Map</button>
                    </section>
                    <section style={{height: '100%', marginTop: '50px', overflowY: 'scroll', scrollBehavior: 'smooth'}}>
                        {listView === true ? <ListView 
                                                user={user} 
                                                trails={trails} 
                                                userTrails={userTrails}
                                                limit={limit} 
                                                onLoadMore={onLoadMore} 
                                                loadMoreButton={loadMoreButton} 
                                                id={id}
                                                setFetchUserTrails={setFetchUserTrails}
                                                setFetchUrl={setFetchUrl}
                                             /> 
                                           : null}
                        {mapView === true ? <MapView 
                                                id='alltrails-map' 
                                                style={{ position:'relative'}}
                                                trails={trails} 
                                                limit={limit}
                                            /> 
                                          : null}
                    </section>
                </div>
            }
        </div>
    );
};

export default AllTrails;