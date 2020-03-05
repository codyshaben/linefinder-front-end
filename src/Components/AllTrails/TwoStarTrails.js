import React, { useState, useEffect } from 'react';
import './AllTrails.scss';
import api from '../../api.js'

const TwoStarTrails = (props) => {
    const { limit, onLoadMore, trailContainer, mapContainer, viewMapList, listView, setLoadMoreButton, loadMoreButton, showLoading, loading, setIsLoading } = props;

    const [ twoStarTrails, setTwoStarTrails ] = useState([]);

    useEffect(() => {
        async function fetchData() {
            await fetch(api.twoStarTrails)
                .then(res => res.json())
                .then(json => {
                    setTwoStarTrails(json.data)
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
            { listView === true ? twoStarTrails.slice(0, limit).map(trail => {
                return trailContainer(trail)
            }): mapContainer(twoStarTrails)}
            { loadMoreButton === true ? <button onClick={onLoadMore} className='load-more'>Load More</button> : null }
        </div>
    );
};


export default TwoStarTrails;