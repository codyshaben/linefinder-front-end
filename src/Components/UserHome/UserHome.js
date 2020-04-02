import React, {useEffect, useState} from 'react';
import Places from '../Places/Places';
import People from '../People/People';
import './UserHome.scss';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from 'react-router-dom'

const Home = (props) => {
    const { id } = useParams()
    console.log(id)

    const [firstName, setFirstName] = useState('')

    useEffect(() => {

        async function fetchData() {
        await fetch(`http://localhost:3000/users/${id}`, {
            headers: {
                Authorization:  `Bearer ${localStorage.token}`
            }
        }) 
            .then(res => res.json())
            .then(user => {
                setFirstName(user.data.first_name)
            })
            .catch(handleError)
        }
        fetchData()
    }, [id]);

    const handleError = (error) => {
        console.error(error)
    }

    return (
        <Router>
        <div className='user-home'>
            <p>Welcome, {firstName}</p>
            <nav className='people-places-nav'>
                <Link to ='/home/places'>Places</Link>
                <Link to ='/home/people'>People</Link>
            </nav>
        <Switch>
            <Route path='/home/places'>
                <Places />
            </Route>
            <Route path='/home/people'>
                <People />
            </Route>
        </Switch> 
        </div>
        </Router>
      )
};

export default Home;