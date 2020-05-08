import React, { useState, useEffect } from 'react';
import MapView from './MapView';
import './Dashboard.scss';
import { Link } from 'react-router-dom';
import { Doughnut } from 'react-chartjs-2';

const Dashboard = (props) => {
    const { user, userTrails, id, handleError } = props;

    const [deleteFetch, setDeleteFetch] = useState(false);
    const [trailId, setTrailId] = useState();

    let greenTrails = 0;
    let blueTrails = 0;
    let blackTrails = 0;
    let doubleBlackTrails = 0;
    let verticalFeet = 0;
    let hiked = 0;
    let miles = 0;

    useEffect(() => {
        async function deleteTrail() {
            await fetch(`https://linefinder-back-end.herokuapp.com/user_trails/${id}/${trailId}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${sessionStorage.token}`,
                }
            })
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(handleError)
        }
        if (deleteFetch) {
            deleteTrail()
        }
    }, [deleteFetch, trailId, id, handleError]);

    userTrails.map(trail => {
        hiked += trail.ascent;
        miles += trail.length;
        verticalFeet += Math.abs(trail.descent);
        return trail.difficulty === 'dblack' ? doubleBlackTrails += 1 :
            trail.difficulty === 'black' ? blackTrails += 1 :
                trail.difficulty === 'blue' ? blueTrails += 1 :
                    trail.difficulty === 'green' ? greenTrails += 1 :
                        null
    });

    const mapList = () => {
        if (userTrails.length === 0) {
            return noTrails();
        } else {
            return userTrails.map(trail => trailListing(trail));
        };
    };

    const trailListing = (trail) => {
        return (
            <div key={trail.id} className='trail-listing'>
                <p>{trail.name}</p>
                <button onClick={((e) => {
                    e.preventDefault();
                    e.target.parentNode.remove();
                    setTrailId(trail.trail_id);
                    setDeleteFetch(true);
                })}>Remove</button>
            </div>
        )
    };

    const noTrails = () => <Link id='add-trails' to={`/home/${id}/all-trails`}>Add trails to your collection!</Link>

    return (
        <div id='dashboard'>
            <h3 id='welcome'>Welcome, {user.first_name}</h3>
            <section className='my-trails'>
                <div className='map-list'>
                    <h3>My trails</h3>
                    {userTrails ? mapList() : noTrails()}
                </div>
                <div className='map' style={{ height: '430px', width: '100%', margin: '5% 5% 0 0' }}>
                    <MapView trails={userTrails}/>
                </div>
            </section>
            {userTrails.length >= 1 ? 
                <section id='user-stats'>
                    <div className='stats'>
                        <Doughnut 
                            data={{
                                labels: ['Green', 'Blue', 'Black', 'Double Black'],
                                datasets: [{
                                    data: [greenTrails, blueTrails, blackTrails, doubleBlackTrails],
                                    backgroundColor: ['rgb(17, 182, 17)', 'rgb(11, 125, 201)', 'rgb(65, 65, 65)', 'black']
                                }]
                            }}
                            height='200px'
                        />
                    </div>
                    <div className='stats'>
                        <p>Vertical Skied: {verticalFeet} ft.</p>
                        <p>Vertical Hiked: {hiked} ft. </p>
                        <p>Miles Skied: {miles.toFixed(1)}</p>
                        <p>Trails: {userTrails.length}</p>
                    </div>
                </section>
            : null }
        </div>
    )
};

export default Dashboard;