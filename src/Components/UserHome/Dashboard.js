import React, { useState, useEffect } from 'react'
import MapView from './MapView'
import './Dashboard.scss'
import { Link } from 'react-router-dom'


const Dashboard = (props) => {
    const { user, userTrails, id, handleError } = props;

    const [deleteFetch, setDeleteFetch] = useState(false);
    const [trailId, setTrailId] = useState();

    useEffect(() => {
        async function deleteTrail() {
            await fetch(`https://linefinder-back-end.herokuapp.com/user_trails/${id}/${trailId}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${sessionStorage.token}`,
                }
            })
            .then(res => res.json())
            .catch(handleError)
        }
        if (deleteFetch) {
            deleteTrail()
        }
    }, [deleteFetch, trailId, id, handleError])

    const mapList = () => {
        if (userTrails.length === 0) {
            return noTrails()
        } else {
            return userTrails.map(trail => trailListing(trail))
        };
    };

    const trailListing = (trail) => {
        return (
            <div key={trail.id} className='trail-listing'>
                <p>{trail.name}</p>
                <button onClick={((e) => {
                    e.preventDefault()
                    e.target.parentNode.remove()
                    setTrailId(trail.trail_id)
                    setDeleteFetch(true)
                })}>Remove</button>
            </div>
        )
    };

    const noTrails = () => <Link id='add-trails' to={`/home/${id}/all-trails`}>Add trails to your collection!</Link>

    return (
        <div id='dashboard'>
            <h3 id='welcome'>Welcome, {user.first_name}</h3>
            <main className='my-trails'>
                <div className='map-list'>
                    {userTrails ? mapList() : noTrails()}
                </div>
                <div className='map' style={{ height: '300px', width: '100%', margin: '7%' }}>
                    <MapView trails={userTrails}/>
                </div>
            </main>
        </div>
    )
};

export default Dashboard;