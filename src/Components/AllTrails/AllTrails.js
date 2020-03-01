import React, { useState, useEffect } from 'react';
import api from '../../api.js';
import RingLoader from 'react-spinners/RingLoader';
import MapView from '../MapView/MapView'
import './AllTrails.scss';

const AllTrails = (props) => {
    const { limit, onLoadMore, trailContainer, mapContainer } = props;

    const [trails, setTrails] = useState([]);
    const [loadMoreButton, setLoadMoreButton] = useState(false);
    const [loading, setIsLoading] = useState(true);
    const [listView, setListView] = useState(true);
    const [mapView, setMapView] = useState(false)

    const showListView = () => {
        setListView(true) 
        setMapView(false)
        setLoadMoreButton(true)
    }

    const showMapView = () => {
        setListView(false) 
        setMapView(true)
        setLoadMoreButton(false)
    }

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

    const showLoading = () => {
        return (
            <div className='loading-spinner'>
                <RingLoader size={150} color={'rgb(11, 125, 201)'} loading={loading}/>
                <h3>Loading...</h3>
            </div>
        );
    };


    
    return (
        <div className="all-trails">
            { loading === true ? showLoading() : null }

            <section className='views'>
                    <button className='list-view' onClick={showListView}>List</button>
                    <p>|</p>
                    <button className='map-view' onClick={showMapView}>Map</button>
            </section> 
            {/* {trails.slice(0, limit).map(trail => {
                return trailContainer(trail)
            })} */}
            { listView === true ? trails.slice(0, limit).map(trail => {
                return trailContainer(trail)
            }): mapContainer() }
            { loadMoreButton === true ? <button onClick={onLoadMore} className='load-more'>Load More</button> : null }
            
        </div>
    );
};


export default AllTrails;