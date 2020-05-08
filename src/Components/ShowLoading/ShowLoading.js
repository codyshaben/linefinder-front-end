import React from 'react'
import RingLoader from 'react-spinners/RingLoader';
import './ShowLoading.scss'


const ShowLoading = () => {

    return (
        <div className='loading-spinner'>
            <RingLoader size={150} color={'rgb(11, 125, 201)'} />
            <h3>Loading...</h3>
        </div>
    );
}

export default ShowLoading;