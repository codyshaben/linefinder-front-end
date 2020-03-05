import React, { Component, useEffect, useRef } from 'react';
import GoogleMapReact from 'google-map-react'
import AllTrails from '../AllTrails/AllTrails'
import './MapView.scss';

const MapView = (props) => {
    const { trails, trailContainer } = props
    // const defaultProps = {
    //     center: {
    //         lat: 39.766636,
    //         lng: -105.980210
    //     },
    //     zoom: 8,
    //     style: {
    //         height: '500px',
    //         width: '500px',
    //     },
    // }

        return (
            <div style={{ height: '100vh', width: '100%'}}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: process.env.REACT_APP_MAPS_API_KEY}}
                    defaultCenter={{ lat: 39.766636, lng: -105.980210}}
                    defaultZoom={8}
                    defaultStyle={{  height: '500px', width: '500px'}}>
                </GoogleMapReact>
            </div>
        );
};

export default MapView