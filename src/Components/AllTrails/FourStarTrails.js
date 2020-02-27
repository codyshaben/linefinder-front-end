import React, { useState, useEffect } from 'react';
import StarRatings from 'react-star-ratings';
import './AllTrails.scss';
import api from '../../api.js'

const FourStarTrails = (props) => {
    const { limit, onLoadMore } = props;

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
            return (
                <section className='trail-container' key={trail.id}>
                        <div className='left-side'>
                            <h4>{trail.name}</h4>
                            <p className='location'>{trail.location}</p>
                            <StarRatings
                                rating={trail.stars}
                                starRatedColor='rgb(11, 125, 201)'
                                starDimension='30px'
                            />
                            <p className='summary'>{trail.summary}</p>
                        </div> 
                        <img className='image' src={trail.imgMedium} alt='Not Found'></img>
            </section>
            )
        })}
        <button onClick={onLoadMore} className='load-more'>Load More</button>
        </div>
    );
};


export default FourStarTrails;