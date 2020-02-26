import React from 'react';
import './Places.scss';
import '../Home/Home.scss';
import ListView from '../ListView/ListView'
import MapView from '../MapView/MapView'
import StarDropdown from '../StarDropdown/StarDropdown'
import { useRoutes, A } from 'hookrouter';

const routes =  {
    '/list': () => <ListView />,
    '/maps': () => <MapView />,
};

function Places() {

    const routeResult = useRoutes(routes)

    return (
        <div className='places' >   
            <section className='dropdown-menu'>
                <header>Sort by</header>
                <StarDropdown />
                {/* <DifficultyDropdown /> */}
            </section>
            <section className='views'>
                    <A className='list-view' href='/places/list'>List</A>
                    <p>|</p>
                    <A className='map-view' href='/places/maps'>Map</A>
            </section> 
            {routeResult}
        </div>
    )
}

export default Places;