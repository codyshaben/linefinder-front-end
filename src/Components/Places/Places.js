import React, { useState } from 'react';
import './Places.scss';
import '../Home/Home.scss';
import ListView from '../ListView/ListView'
import MapView from '../MapView/MapView'
import { useRoutes, A } from 'hookrouter';

const routes =  {
    '/list': () => <ListView />,
    '/maps': () => <MapView />,
};

function Places() {

    const routeResult = useRoutes(routes)

    // const [showTrail, setShowTrail] = useState(true)
    // const [showMap, setShowMap] = useState(false)

    // const viewMap = () => {
    //     setShowTrail(false)
    //     setShowMap(true)
    // }

    // const viewList  = () => {
    //     setShowTrail(true)
    //     setShowMap(false)
    // }


    return (
        <div className='places' >
            <section className='views'>
                <p>Views</p>
                <div className='view-buttons'>
                    <A className='list-view' href='/places/list'>List</A>
                    <A className='map-view' href='/places/maps'>Map</A>
                </div>
            </section>
            {routeResult}
        {/* {showTrail === true ? <ListView /> :null}
        {showMap === true ? <MapView /> :null} */}
        </div>
    )
}

export default Places;