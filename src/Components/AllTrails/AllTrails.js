import React, { useState, useEffect } from 'react';
import api from '../../api.js'
import './AllTrails.scss';

const AllTrails = (props) => {
    const { limit, onLoadMore, trailContainer } = props;

    const [trails, setTrails] = useState([]);

    useEffect(() => {
        async function fetchData() {
            await fetch(api.allTrails)
                .then(res => res.json())
                .then(json => {
                    setTrails(json.data)
                })
                .catch((error) => console.log(error))
        }
        fetchData()
    }, []);
    
    return (
        <div className="all-trails">
            {trails.slice(0, limit).map(trail => {
                return trailContainer(trail)
        })}
        <button onClick={onLoadMore} className='load-more'>Load More</button>
        </div>
    );
};


export default AllTrails;