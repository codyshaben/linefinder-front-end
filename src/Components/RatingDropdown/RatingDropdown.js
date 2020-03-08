import React from 'react'
import './RatingDropdown.scss'

const RatingDropdown = (props) => {
    const { setFetchUrl } = props

    const filterFiveStars = () => setFetchUrl('five-star')
    const filterFourStars = () => setFetchUrl('four-star')
    const filterThreeStars = () => setFetchUrl('three-star')
    const filterTwoStars = () => setFetchUrl('two-star')
    const filterOneStars = () => setFetchUrl('one-star')


    return(
        <ul className='rating-dropdown-list'>
            <button  className='rating-li' onClick={filterFiveStars}>Five Star</button> 
            <button className='rating-li' onClick={filterFourStars}>Four Star</button>
            <button className='rating-li' onClick={filterThreeStars}>Three Star</button>
            <button className='rating-li' onClick={filterTwoStars}>Two Star</button>
            <button className='rating-li' onClick={filterOneStars}>One Star</button>
        </ul>
    )
}

export default RatingDropdown