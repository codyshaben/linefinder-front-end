import React, { useState, useEffect } from 'react';
import './AllTrails.scss';
import api from '../../api.js'

const OneStarTrails = (props) => {
    const { limit, onLoadMore, trailContainer, mapContainer, viewMapList, listView, setLoadMoreButton, loadMoreButton, showLoading, loading, setIsLoading } = props;

    const [ oneStarTrails, setOneStarTrails ] = useState([])

    useEffect(() => {
        async function fetchData() {
            await fetch(api.oneStarTrails)
                .then(res => res.json())
                .then(json => {
                    setOneStarTrails(json.data)
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
            { listView === true ? oneStarTrails.slice(0, limit).map(trail => {
                return trailContainer(trail)
            }): mapContainer(oneStarTrails)}
            { loadMoreButton === true ? <button onClick={onLoadMore} className='load-more'>Load More</button> : null }
        </div>
    );
};


export default OneStarTrails;