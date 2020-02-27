import React, { useState, useEffect } from 'react';
import './AllTrails.scss';
import api from '../../api.js'

const OneStarTrails = (props) => {
    const { limit, onLoadMore, trailContainer } = props;

    const [ oneStarTrails, setOneStarTrails ] = useState([])

    useEffect(() => {
        async function fetchData() {
            await fetch(api.twoStarTrails)
                .then(res => res.json())
                .then(json => {
                    setOneStarTrails(json.data)
                })
                .catch((error) => console.log(error))
        }
        fetchData()
    }, []);
    
    return (
        <div className='all-trails'>
            {oneStarTrails.slice(0, limit).map(trail => {
            return trailContainer(trail)
        })}
        <button onClick={onLoadMore} className='load-more'>Load More</button>
        </div>
    );
};


export default OneStarTrails;