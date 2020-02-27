import React, { useState, useEffect } from 'react'
import StarRatings from 'react-star-ratings'
import api from '../../api'

import './FiveStarTrails.scss'

const FiveStarTrails = (props) => {
    const { limit, onLoadMore, fiveStarTrails } = props

    const [fiveStars, setFiveStars] = useState([]);
    
    return (
        <div className="five-star-trails">
            {fiveStarTrails.slice(0, limit).map(trail => {
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
    )
}


export default FiveStarTrails