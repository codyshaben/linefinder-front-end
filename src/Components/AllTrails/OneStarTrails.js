import React, { useState, useEffect } from 'react';
import StarRatings from 'react-star-ratings';
import './AllTrails.scss';
import api from '../../api.js'

const OneStarTrails = (props) => {
    const { limit, onLoadMore } = props;

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


export default OneStarTrails;