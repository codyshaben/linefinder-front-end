import React from 'react'
import './DifficultyDropDown.scss'

const DifficultyDropdown = (props) => {
    const { setFetchUrl } = props

    const filterDblack = () => setFetchUrl('double-black')
    const filterBlack = () => setFetchUrl('black')
    const filterBlueBlack = () => setFetchUrl('blue-black')
    const filterBlue = () => setFetchUrl('blue')
    const filterGreenBlue = () => setFetchUrl('greenBlue')
    const filterGreen = () => setFetchUrl('green')

    return (
        <ul className='difficulty-dropdown-list'>
            <button  className='difficulty-li' onClick={filterDblack}>Double Black</button> 
            <button className='difficulty-li' onClick={filterBlack}>Black</button>
            <button className='difficulty-li' onClick={filterBlueBlack}>Blue Black</button>
            <button className='difficulty-li' onClick={filterBlue}>Blue</button>
            <button className='difficulty-li' onClick={filterGreenBlue}>Green Blue</button>
            <button className='difficulty-li' onClick={filterGreen}>Green</button>
        </ul>
    )
}

export default DifficultyDropdown