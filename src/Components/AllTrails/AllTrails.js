import React, { useState, useEffect } from 'react';
import api from '../../api.js';
import RingLoader from 'react-spinners/RingLoader';
import './AllTrails.scss';

const AllTrails = (props) => {
    const { limit, onLoadMore, trailContainer } = props;

    const [trails, setTrails] = useState([]);
    const [loadMoreButton, setLoadMoreButton] = useState(false);
    const [loading, setIsLoading] = useState(true);

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
                <RingLoader
                    // css={override}
                    size={150}
                    color={'rgb(11, 125, 201)'}
                    loading={loading}
                />
                <h3>Loading...</h3>
            </div>
        );
    };
    
    return (
        <div className="all-trails">
            {trails.slice(0, limit).map(trail => {
                return trailContainer(trail)
            })}
            { loading === true ? showLoading() : null }
            { loadMoreButton === true ? <button onClick={onLoadMore} className='load-more'>Load More</button> : null }
        </div>
    );
};


export default AllTrails;