import React, { useState, useEffect } from 'react';
import api from '../../api.js';
import RingLoader from 'react-spinners/RingLoader';
import MapView from '../MapView/MapView'
import GoogleMapReact from 'google-map-react'
import './AllTrails.scss';

const AllTrails = (props) => {
    const { limit, onLoadMore, trailContainer, mapContainer, viewMapList, listView, setLoadMoreButton, loadMoreButton, showLoading, loading, setIsLoading } = props;

    const [trails, setTrails] = useState([]);

    useEffect(() => {

        async function fetchData() {
            await fetch(api.allTrails)
                .then(res => res.json())
                .then(json => {
                    setTrails(json.data)
                    setIsLoading(false)
                    setLoadMoreButton(true)
                })
                .catch((error) => console.log(error))
        }
        fetchData()
        
    }, []);
  

    return (
        <div className="all-trails">
            {viewMapList()}
            { loading === true ? showLoading() : null }
            { listView === true ? trails.slice(0, limit).map(trail => {
                return trailContainer(trail)
            }): mapContainer(trails)}
            { loadMoreButton === true ? <button onClick={onLoadMore} className='load-more'>Load More</button> : null }
            
        </div>
    );
};


export default AllTrails;