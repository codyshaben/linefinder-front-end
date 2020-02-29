import React, { useState, useEffect } from 'react';
import './AllTrails.scss';
import api from '../../api.js'

const TwoStarTrails = (props) => {
    const { limit, onLoadMore, trailContainer } = props;

    const [ twoStarTrails, setTwoStarTrails ] = useState([]);

    useEffect(() => {
        async function fetchData() {
            await fetch(api.twoStarTrails)
                .then(res => res.json())
                .then(json => {
                    setTwoStarTrails(json.data)
                })
                .catch((error) => console.log(error))
        }
        fetchData()
    }, []);
    
    return (
        <div className='all-trails'>
            {twoStarTrails.slice(0, limit).map(trail => {
            return trailContainer(trail)
        })}
        <button onClick={onLoadMore} className='load-more'>Load More</button>
        </div>
    );
};


export default TwoStarTrails;