import React, { useState, useEffect } from 'react';
import './AllTrails.scss';
import api from '../../api.js'

const FourStarTrails = (props) => {
    const { limit, onLoadMore, trailContainer } = props;

    const [ fourStarTrails, setFourStarTrails ] = useState([])

    useEffect(() => {
        async function fetchData() {
            await fetch(api.fourStarTrails)
                .then(res => res.json())
                .then(json => {
                    setFourStarTrails(json.data)
                })
                .catch((error) => console.log(error))
        }
        fetchData()
    }, []);
    
    return (
        <div className='all-trails'>
            {fourStarTrails.slice(0, limit).map(trail => {
            return trailContainer(trail)
        })}
        <button onClick={onLoadMore} className='load-more'>Load More</button>
        </div>
    );
};


export default FourStarTrails;