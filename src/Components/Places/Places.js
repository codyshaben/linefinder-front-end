import React, { useState, useEffect } from 'react';
import './Places.scss';
import '../Home/Home.scss';

function Places() {
    const [trails, setTrails] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
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
            <h2>Trails</h2>
            {trails.map(trail => {
                return ( 
                    <div className='trail-container' key={trail.id}>
                        <h3>{trail.name}</h3>
                    </div>
                )
            })}

        </div>
    )
}

export default Places;