import React, { useState, useEffect } from 'react';
import './AllTrails.scss';
import '../RatingDropdown/RatingDropdown.scss'
import api from '../../api.js';

const ThreeStarTrails = (props) => {
    const { limit, onLoadMore, trailContainer } = props;

    const [ threeStarTrails, setThreeStarTrails ] = useState([])

    useEffect(() => {
        async function fetchData() {
            await fetch(api.threeStarTrails)
                .then(res => res.json())
                .then(json => {
                    setThreeStarTrails(json.data)
                })
                .catch((error) => console.log(error))
        }
        fetchData()
    }, []);
    
    return (
        <div className='all-trails'>
            {threeStarTrails.slice(0, limit).map(trail => {
            return trailContainer(trail)
        })}
        <button onClick={onLoadMore} className='load-more'>Load More</button>
        </div>
    );
};


export default ThreeStarTrails;