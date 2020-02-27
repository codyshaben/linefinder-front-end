import React, { useState, useEffect } from 'react';
import AllTrails from '../AllTrails/AllTrails'
import MapView from '../MapView/MapView'
import FiveStarTrails from '../FiveStarTrails/FiveStarTrails'
import api from '../../api'
import './Places.scss';
import {useRoutes, A} from 'hookrouter'


function Places() {

    const [limit, setLimit] = useState(10);
    const [listViewShowing, setListViewShowing] = useState(true)
    const [allTrailsShowing, setAllTrailsShowing] = useState(true)
    const [mapViewShowing, setMapViewShowing] = useState(false)
    const [trails, setTrails] = useState([]);
    const [isOpen, setIsOpen ] = useState(false);

    const toggleDropDown = () => setIsOpen(!isOpen);
    const hideList = () => setListViewShowing(false);
    const hideDropdown = () => setIsOpen(false);
    const onLoadMore = () => setLimit(limit + 10);
    const showMap = () => setMapViewShowing(true);
    const hideAllTrails = () => setAllTrailsShowing(false)

    const showList = () => {
        setListViewShowing(true)
        setMapViewShowing(false)
    }

    const fiveStarTrails = trails.filter(trail => {
        if(trail.stars === 5){
            return trail
        }
    })

    useEffect(() => {
        const abortController = new AbortController();

        fetch(api.allTrails, { signal: abortController.signal })
            .then(res => res.json())
            .then(json => {
                setTrails(json.data)
            })
            .catch((error) => console.log(error))
        return () => {
            abortController.abort()
        }
    }, []);

    const routes = {
        '/all-trails': () => <AllTrails trails={trails} limit={limit}/>,
        '/five-star': () => <FiveStarTrails fiveStarTrails={fiveStarTrails} limit={limit} onLoadMore={onLoadMore}/>
    }

    const routeResult = useRoutes(routes)

    return (
        // <Router>
        <div className='places' >   
            <section className='views'>
                    <button className='list-view' onClick={showList}>List</button>
                    <p>|</p>
                    <button className='map-view' onClick={showMap}>Map</button>
            </section> 
            <section className='dropdown-menu'>
                <header>Sort by</header>
                <div className='star-dropdown'>
                    <header onClick={toggleDropDown}>Rating</header>
                    { 
                    isOpen === false ? null 
                    : <ul className='star-dropdown-list'onMouseLeave={hideDropdown}>
                        <A href='/places/five-star' className='star-list-item'>Five Star</A> 
                        <li className='star-list-item'>Four Star</li>
                        <li className='star-list-item'>Three Star</li>
                        <li className='star-list-item'>Two Star</li>
                        <li className='star-list-item'>One Star</li>
                    </ul>
                    }
            </div>
                {/* <DifficultyDropdown /> */}
            </section>
            {routeResult}
        </div>
    )
}

export default Places;