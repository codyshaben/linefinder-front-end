import React from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import './UserHome.scss';


const MapView = (props) => {
    const { trails } = props;

    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                className='google-map'
                bootstrapURLKeys={{ key: process.env.REACT_APP_MAPS_API_KEY }}
                defaultCenter={{ lat: 39.766636, lng: -105.980210 }}
                defaultZoom={8}
                // defaultStyle={{ height: '300px', width: '300px' }}
            >
                {trails.map(trail => {
                    return (
                        <Marker
                            key={trail.id}
                            lat={trail.latitude}
                            lng={trail.longitude}
                        />
                    )
                })}
            </GoogleMapReact>
        </div>
    );
};

export default MapView;