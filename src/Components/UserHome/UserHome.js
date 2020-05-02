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
            await fetch(`https://linefinder-back-end.herokuapp.com/user_trails/${id}/${trailId}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${sessionStorage.token}`,
                }
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
            await fetch(`https://linefinder-back-end.herokuapp.com/users/${id}`, {
                headers: {
                    Authorization: `Bearer ${sessionStorage.token}`,
                    'Content-Type': 'application/json'
                },
            })
                .then(res => res.json())
                .then(result => {
                    if (result.message === 'Un-Authorized') {
                        window.location = 'https://linefinder-back-end.herokuapp.com//login'
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
        if (trail) {
            
        }
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
    }

    console.log(userTrails.length)

    const mapList = () => {
        if (userTrails.length === 0) {
            return noTrails()
        } else {
            return userTrails.map(trail => trailListing(trail))
        }   
    } 

    const noTrails = () => <p>Add trails to your collection!</p>
    

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