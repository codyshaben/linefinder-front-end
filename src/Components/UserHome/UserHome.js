import React, { useEffect, useState } from 'react';
import './UserHome.scss';
import MapView from './MapView'

const Home = (props) => {
    const { user, userTrails } = props;

    console.log('user home user', user)

    const trailListing = (trail) => {
        return (
            <div className='trail-listing'>
                <p key={trail.id}>{trail.name}</p>
                <button>Remove</button>
            </div>
        )
    }
    
    return (
            <div className='user-home'>
                <p>Welcome, {user.first_name} </p>
                <main className='my-trails'>
                    <div className='map-list'>
                        {userTrails.map(trail => trailListing(trail))}
                    </div>
                    <div className='map' style={{ height: '100px', width: '100px' }}>
                        <MapView trails={userTrails}/>
                    </div>
                </main>
            </div>
    );
};

export default Home;