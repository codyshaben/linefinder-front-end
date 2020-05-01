import React, { useEffect, useState } from 'react';
import './UserHome.scss';
import MapView from './MapView'

const UserHome = (props) => {
    const { user, setUser, id } = props

    const [trailId, setTrailId] = useState()
    const [userTrails, setUserTrails] = useState([])
    const [deleteFetch, setDeleteFetch] = useState(false)

    useEffect(() => {
        async function deleteTrail() {
            await fetch(`http://localhost:9000/user_trails/${id}/${trailId}`, {
                method: 'DELETE',
            })
            .then(res => res.json())
            .catch(handleError)
        }
        console.log(deleteFetch)
        if (deleteFetch) {
            deleteTrail()
        }
    }, [deleteFetch, trailId, id])

    useEffect(() => {
        async function fetchData() {
            await fetch(`http://localhost:9000/users/${id}`, {
                headers: {
                    Authorization: `Bearer ${sessionStorage.token}`,
                    'Content-Type': 'application/json'
                },
            })
                .then(res => res.json())
                .then(result => {
                    if (result.message === 'Un-Authorized') {
                        window.location = 'http://localhost:3001/login'
                    } else {
                        setUser(result.data)
                        setUserTrails(result.data.trails)
                    }
                })
                .catch(handleError);
        };
        fetchData();
    }, [setUser, id]);
    
    const handleError = (error) => {
        console.error(error)
    };

    const trailListing = (trail) => {
        return (
            <div key={trail.id} className='trail-listing'>
                <p>{trail.name}</p>
                <button onClick={((e) => {
                    e.target.parentNode.remove()
                    setTrailId(trail.trail_id)
                    setDeleteFetch(true)
                })}>Remove</button>
            </div>
        )
    }

    const mapList = () => userTrails.map(trail => trailListing(trail))    

    const noTrails = () => <p>No trails</p>
    
    return (
            <div className='user-home'>
                <p>Welcome, {user.first_name} </p>
                <main className='my-trails'>
                    <div className='map-list'>
                        {userTrails ? mapList() : noTrails()}
                    </div>
                    <div className='map' style={{ height: '100px', width: '100px' }}>
                        <MapView trails={userTrails}/>
                    </div>
                </main>
            </div>  
    );
};

export default UserHome;