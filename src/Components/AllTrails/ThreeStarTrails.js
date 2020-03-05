import React, { useState, useEffect } from 'react';
import './AllTrails.scss';
import '../RatingDropdown/RatingDropdown.scss'
import api from '../../api.js';

const ThreeStarTrails = (props) => {
    const { limit, onLoadMore, trailContainer, mapContainer, viewMapList, listView, setLoadMoreButton, loadMoreButton, showLoading, loading, setIsLoading } = props;

    const [ threeStarTrails, setThreeStarTrails ] = useState([])

    useEffect(() => {
        async function fetchData() {
            await fetch(api.threeStarTrails)
                .then(res => res.json())
                .then(json => {
                    setThreeStarTrails(json.data)
                    setIsLoading(false)
                    setLoadMoreButton(true)
                })
                .catch((error) => console.log(error))
        }
        fetchData()
    }, [setIsLoading, setLoadMoreButton]);
    
    return (
        <div className='all-trails'>
            {viewMapList()}
            { loading === true ? showLoading() : null }
            { listView === true ? threeStarTrails.slice(0, limit).map(trail => {
                return trailContainer(trail)
            }): mapContainer(threeStarTrails)}
            { loadMoreButton === true ? <button onClick={onLoadMore} className='load-more'>Load More</button> : null }
        </div>
    );
};


export default ThreeStarTrails;