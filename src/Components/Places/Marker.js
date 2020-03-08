import React from 'react';
import './Places.scss';

const Marker = () =>{

    const markerClick = (event) => {

    }

    return (
        <div 
            className='marker' 
            style={{ backgroundColor: 'rgb(11, 125, 201)', cursor: 'pointer' }}
            onClick={markerClick}
        />
    );
};

export default Marker;