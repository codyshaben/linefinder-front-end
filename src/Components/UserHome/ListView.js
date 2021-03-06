import React, { useState, useEffect } from 'react';
import StarRatings from 'react-star-ratings';
import noImage from '../../Images/image-not-found.png';
import doubleBlack from '../../Images/double-black.jpg';
import black from '../../Images/black.jpg';
import blue from '../../Images/blue.jpg';
import green from '../../Images/green.jpg';
import './AllTrails.scss';
import './ListView.scss';

const ListView = (props) => {
    const { trails, limit, loadMoreButton, onLoadMore, id, userTrails, setFetchUserTrails, setFetchUrl } = props;

    const [trailId, setTrailId] = useState();
    const [isSending, setIsSending] = useState(false);

    useEffect(() => {
        const userTrailsUrl = `https://linefinder-back-end.herokuapp.com/user_trails/${id}`;

        const data = {
            userId: id,
            trailId: trailId,
        };

        async function postUserTrail() {
            await fetch(userTrailsUrl, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${sessionStorage.token}`,
                    'Content-Type': 'application/json',

                },
                body: JSON.stringify(data)
            })
                .then(response => response.json());
        };

        if (isSending) {
            postUserTrail()
                .then(() => {
                    setIsSending(false);
                });
        };
    }, [id, isSending, trailId]);

    const trailDifficultySymbols = (difficulty) => {
        return difficulty === 'dblack' ? doubleBlack
            : difficulty === 'black' ? black
                : difficulty === 'blue' ? blue
                    : green
    };

    const imageReplacement = (error) => {
        error.target.src = noImage;
        return true
    };

    const checkIfAdded = (trail) => {
        const addedTrail = userTrails.find(userTrail => {
            return userTrail.trail_id === trail.trail_id
        })
        if (addedTrail) {
            return <span id='check' role='img' aria-label='check'>✔️</span>
        } else {
            return (
                <button 
                    onClick={((e) => {
                        setTrailId(trail.trail_id);
                        setIsSending(true);
                        setFetchUserTrails(true)
                    })} 
                    className='add-trail-btn'>
                    Add Trail
                </button>
            )
        };
    };

    const handleResetFilterClick = (e) => {
        e.preventDefault()
        setFetchUrl('')
    }

    return (
        <div className='list-view'>
            <div id='results'>
                <button id='reset-button' onClick={handleResetFilterClick}>Clear filter</button>
                <p id='result-length'> 1 - {limit} of {trails.length} results </p>
            </div>
            {trails.slice(0, limit).map(trail => {
                return (
                    <section className='trail-container' key={trail.id}>
                        <div className='left-side trail-description'>
                            <div>
                                <h4 id='trail-title'>{trail.name}</h4>
                                {checkIfAdded(trail)}
                            </div>
                            <p className='location'>{trail.location}</p>
                            <p className='star-text'>{trail.stars} Stars  | {trail.starVotes} Reviews</p>
                            <StarRatings rating={trail.stars} starRatedColor='rgb(11, 125, 201)' starDimension='30px' />
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
            {loadMoreButton === true ? <button onClick={onLoadMore} className='load-more'>Load More</button> : null}
        </div>
    );
};

export default ListView;