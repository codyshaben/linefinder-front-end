import React from 'react'
import './DropDown.scss'

const RatingDropdown = (props) => {
    const { setFetchUrl, toggleRatingDropDown } = props

    const filterFiveStars = () => setFetchUrl('five-star')
    const filterFourStars = () => setFetchUrl('four-star')
    const filterThreeStars = () => setFetchUrl('three-star')
    const filterTwoStars = () => setFetchUrl('two-star')
    const filterOneStars = () => setFetchUrl('one-star')


    return(
        <ul className='dropdown-list' id='rating-list' onMouseLeave={toggleRatingDropDown}>
            <button  className='dropdown-li' onClick={filterFiveStars}>Five Star</button> 
            <button className='dropdown-li' onClick={filterFourStars}>Four Star</button>
            <button className='dropdown-li' onClick={filterThreeStars}>Three Star</button>
            <button className='dropdown-li' onClick={filterTwoStars}>Two Star</button>
            <button className='dropdown-li' onClick={filterOneStars}>One Star</button>
        </ul>
    )
}

export default RatingDropdown