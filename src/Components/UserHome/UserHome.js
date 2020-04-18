import React, { useEffect, useState } from 'react';
import './UserHome.scss';
import MapView from './MapView'

const Home = (props) => {
    const { user, userTrails } = props;
    
    return (
            <div className='user-home'>
                <p>Welcome, {user.first_name} </p>
                <main className='my-trails'>
                    <div className='map-list'>
                        {userTrails.map(trail => <p key={trail.id}>{trail.name}</p>)}
                    </div>
                    <div style={{ height: '100px', width: '200px' }}>
                        <MapView className='map' trails={userTrails}/>
                    </div>
                </main>
            </div>
    );
};

export default Home;