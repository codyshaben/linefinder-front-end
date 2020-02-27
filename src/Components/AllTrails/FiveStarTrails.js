import React, { useState, useEffect } from 'react';
import './AllTrails.scss';
import api from '../../api.js'

const FiveStarTrails = (props) => {
    const { limit, onLoadMore, trailContainer } = props;

    const [ fiveStarTrails, setFiveStarTrails ] = useState([])

    useEffect(() => {
        async function fetchData() {
            await fetch(api.fiveStarTrails)
                .then(res => res.json())
                .then(json => {
                    setFiveStarTrails(json.data)
                })
                .catch((error) => console.log(error))
        }
        fetchData()
    }, []);
    
    return (
        <div className="all-trails">
            {fiveStarTrails.slice(0, limit).map(trail => {
                return trailContainer(trail)
            })}
        <button onClick={onLoadMore} className='load-more'>Load More</button>
        </div>
    );
};


export default FiveStarTrails;