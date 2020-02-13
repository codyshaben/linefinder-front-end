import React, { useState, useEffect } from 'react';
import './Places.scss';

const Places = () => {

    const [trails, setTrails] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)
  
    useEffect(() => {
        
        fetch('https://linefinder-back-end.herokuapp.com/trails',
        )
            .then(res => res.json())
            .then(json => {
                setTrails(json.trails)
                setLoading(false)
            
            })
            .catch(err => {
                setError(err)
                setLoading(false)
            })
    }, [trails]);



    return (
        <div className='places' >
            <ul>
                {trails.map(trail => <li>{trail.name}</li>)}
            </ul>
        </div>
    )
}

export default Places;