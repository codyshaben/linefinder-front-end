import React, { useEffect, useState } from 'react';
import './UserHome.scss';
import MapView from './MapView'

const Home = (props) => {
    const { user, setUser, id } = props;

    const [userTrails, setUserTrails] = useState([])

    useEffect(() => {

        async function fetchData() {
            await fetch(`http://localhost:9000/users/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`
                }
            })
                .then(res => res.json())
                .then(result => {
                    console.log('result', result)
                    // console.log('localstorage id', localStorage.user_id)
                    // console.log('params id', id)
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
    }, [setUser]);

    const handleError = (error) => {
        console.error(error)
    };

    return (
            <div className='user-home'>
                <p>Welcome, {user.first_name} </p>
                <main className='my-trails'>
                    <div className='map-list'>
                        {userTrails.map(trail => {
                            return (
                                <p>{trail.name}</p>
                            )
                        })}
                    </div>
                    <MapView className='map' trails={userTrails}/>
                </main>
                
            </div>
    );
};

export default Home;