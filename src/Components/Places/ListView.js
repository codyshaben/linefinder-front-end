import React from 'react'
import StarRatings from 'react-star-ratings';
import noImage from '../../Images/image-not-found.png'
import doubleBlack from '../../Images/double-black.jpg'
import black from '../../Images/black.jpg'
import blue from '../../Images/blue.jpg'
import green from '../../Images/green.jpg'
import './Places.scss'
import './ListView.scss'


const ListView = (props) => {
    const { trails, limit, loadMoreButton, onLoadMore } = props
    
    const trailDifficultySymbols = (difficulty) => {
        return difficulty === 'dblack' ? doubleBlack
        : difficulty === 'black' ? black
        : difficulty === 'blue' ? blue
        : green
    };

    const imageReplacement = (error) => {
        error.target.src=noImage
        return true
    };

    return (
        <div className='list-view'>
            <p className='result-length'>Showing 1 - {limit} out of {trails.length} results </p>
            {trails.slice(0, limit).map(trail => {
            return (
                <section className='trail-container' key={trail.id}>
                    <div className='left-side trail-description'>
                        <h4>{trail.name}</h4>
                        <p className='location'>{trail.location}</p>
                        <p className='star-text'>{trail.stars} Stars  | {trail.starVotes} Reviews</p>
                        <StarRatings rating={trail.stars} starRatedColor='rgb(11, 125, 201)' starDimension='30px'/>
                        <p className='summary'>{trail.summary}</p>
                    </div> 
                    <div className='left-side trail-info'>
                        <img className='trail-details symbol' src={trailDifficultySymbols(trail.difficulty)} alt='Difficulty symbol'></img>
                        <p className='trail-details'>Length | {trail.length} Miles</p>
                        <p className='trail-details'>Ascent | {trail.ascent} Feet</p>
                        <p className='trail-details'>Descent | {trail.descent} Feet</p>
                        <p className='trail-details'>Highest Altitude | {trail.high} Feet</p>
                        <p className='trail-details'>Lowest Altitude | {trail.low} Feet</p>
                    </div>
                    <img 
                        className='image' 
                        src={trail.imgMedium} 
                        alt='Trail'
                        onError={imageReplacement}
                        >
                    </img>
                </section>
            )
        })}
        { loadMoreButton === true ? <button onClick={onLoadMore} className='load-more'>Load More</button> : null }
        </div>
    )
}

export default ListView