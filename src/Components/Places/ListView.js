import React from 'react'
import StarRatings from 'react-star-ratings';
import noImage from './Images/image-not-found.png'
import './Places.scss'
import './ListView.scss'


const ListView = (props) => {
    const { trails, limit } = props
    
    const trailDifficultySymbols = (difficulty) => {
        return difficulty === 'dblack' ? 'Double Black'
        : difficulty === 'black' ? 'Black'
        : difficulty === 'blueBlack' ? 'Blue Black'
        : difficulty === 'blue' ? 'Blue'
        : difficulty === 'greenBlue' ? 'Green Blue'
        : 'Green'
    };

    const imageReplacement = (error) => {
        error.target.src=noImage
        return true
    };

    return (
        <div>
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
                <p className='trail-details symbol'>Difficulty | {trailDifficultySymbols(trail.difficulty)}</p>
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
        </div>
    )
}

export default ListView