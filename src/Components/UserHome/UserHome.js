import React, { useEffect, useState } from 'react';
import MyTrails from './MyTrails';
import AllTrails from './AllTrails';
import './UserHome.scss';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
} from 'react-router-dom';

const Home = (props) => {
    const { setIsLoggedIn, setId } = props;
    const { id } = useParams();

    const [user, setUser] = useState({});

    useEffect(() => {

        async function fetchData() {
            await fetch(`http://localhost:9000/users/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`
                }
            })
                .then(res => res.json())
                .then(result => {
                    // console.log(result)
                    // console.log('localstorage id', localStorage.user_id)
                    // console.log('params id', id)
                    if (result.message === 'Un-Authorized') {
                        window.location = 'http://localhost:3001/login'
                    } else {
                        setIsLoggedIn(true)
                        setUser(result.data)
                        setId(id)
                    }
                })
                .catch(handleError);
        };
        fetchData();
    }, [id, setIsLoggedIn, setId]);

    const handleError = (error) => {
        console.error(error)
    };

    console.log(user)

    return (
        <Router>
            <div className='user-home'>
                <p>Welcome, {user.first_name}</p>
                <Switch>
                    <Route path={`/home/${id}/mytrails`}>
                        <MyTrails />
                    </Route>
                    <Route path={`/home/${id}/alltrails`}>
                        <AllTrails />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default Home;