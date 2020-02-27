import React from 'react'
import StarRatings from 'react-star-ratings'

import './AllTrails.scss'


const AllTrails = (props) => {
    const { limit, onLoadMore, trails } = props
    
    return (
        <div className="all-trails">
            {trails.slice(0, limit).map(trail => {
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


export default AllTrails