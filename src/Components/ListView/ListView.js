import React, { useState, useEffect } from 'react'
import './ListView.scss'
import StarRatings from 'react-star-ratings'

function ListView() {

    const [limit, setLimit] = useState(10)
    const [trails, setTrails] = useState([]);
    const [isLoading, setIsLoading]= useState(false)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        const abortController = new AbortController();

        fetch('https://linefinder-back-end.herokuapp.com/trails', { signal: abortController.signal })
            .then(res => res.json())
            .then(json => {
                setTrails(json.trails)
                setIsError(false)
                setIsLoading(true)
            })
            .catch((error) => {
                setIsError(true)
                setIsLoading(false)
            })
            setIsLoading(false)
        return () => {
            abortController.abort()
        }
    }, [isLoading, isError, trails]);

    const onLoadMore = () => {
        setLimit(limit + 10)
    }

    return (
        <div className='trail-listing'>
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
            <a href='#' onClick={onLoadMore} className='load-more'>Load More</a>
        </div>
    )
}

export default ListView