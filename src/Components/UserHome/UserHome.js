import React, { useEffect, useState } from 'react';
import './UserHome.scss';
import AllTrails from './AllTrails';
import MessageBoard from './MessageBoard';
import UserNav from '../Navigation/UserNav';
import Dashboard from './Dashboard';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from 'react-router-dom';

const UserHome = () => {
    const id = sessionStorage.user_id;
    
    const [user, setUser] = useState('');
    const [userTrails, setUserTrails] = useState([])
    const [fetchUserTrails, setFetchUserTrails] = useState(true)

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
                        redirectToLogin()
                    } else {
                        setUser(result.data)
                        setUserTrails(result.data.trails)
                    }
                })
                .catch(handleError);
        };
        if (fetchUserTrails) {
            fetchData();
            setFetchUserTrails(false)
        }
    }, [setUser, setUserTrails, id, setFetchUserTrails, fetchUserTrails]);
    
    const handleError = (error) => console.error(error);
    const redirectToLogin = () => window.location = '/login';

    return (
        <Router>
            <div className='user-home'>
                <UserNav id={id}/>
                <Switch>
                    <Route path={`/home/${id}/all-trails`}>
                        <AllTrails 
                            user={user} 
                            id={id} 
                            userTrails={userTrails} 
                            setUserTrails={setUserTrails} 
                            setFetchUserTrails={setFetchUserTrails}
                        />
                    </Route>
                    <Route path={`/home/${id}/message-board`}>
                        <MessageBoard user={user} id={id}/>
                    </Route>
                    <Route path={`/home/${id}/`}>
                        <Dashboard 
                            user={user} 
                            id={id} 
                            userTrails={userTrails} 
                            handleError={handleError}
                            setUserTrails={setUserTrails}
                            setFetchUserTrails={setFetchUserTrails}
                        />
                    </Route>
                </Switch>
            </div>  
        </Router>
    );
};

export default UserHome;