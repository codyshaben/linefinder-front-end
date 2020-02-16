import React, { useState, useEffect } from 'react';
import './Places.scss';
import '../Home/Home.scss';
import StarRatings from 'react-star-ratings'

function Places() {

    const [trails, setTrails] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);
  
    useEffect(() => {
        fetch('https://linefinder-back-end.herokuapp.com/trails',
        )
            .then(res => res.json())
            .then(json => {
                setTrails(json.trails)
                // setLoading(false)            
            })
            // .catch(err => {
            //     setError(err)
            //     setLoading(false)
            // })
    }, [trails]);


    return (
        <div className='places' >
            {trails.map(trail => {
                return ( 
                    <section className='trail-container' key={trail.id}>
                        <div className='left-side'>
                            <h4>{trail.name}</h4>
                            <p className='location'>{trail.location}</p>
                            <img className='image' src={trail.imgMedium} alt='Not Found'></img>
                        </div> 
                        <div className='right-side'>
                            <p>{trail.summary}</p>
                            <StarRatings
                                rating={trail.stars}
                                starRatedColor='rgb(11, 125, 201)'
                                starDimension='40px'
                            />
                        </div> 
                    </section>
                )
            })}
        </div>
    )
}

export default Places;