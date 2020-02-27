import React from 'react'
// import './RatingDropdown.scss'
import { A } from 'hookrouter';

const RatingDropdown = () => {

    return(
        <div className='rating-dropdown'>
            <ul className='rating-dropdown-list'>
                <A href='/places/five-star' className='rating-list-item'>Five Star</A> 
                <A href='/places/four-star'className='rating-list-item'>Four Star</A>
                <A href='/places/three-star'className='rating-list-item'>Three Star</A>
                <A href='/places/two-star'className='rating-list-item'>Two Star</A>
                <A href='/places/one-star'className='rating-list-item'>One Star</A>
            </ul>
        </div>
    )
}

export default RatingDropdown