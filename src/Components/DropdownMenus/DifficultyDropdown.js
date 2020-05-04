import React from 'react';
import './DropDown.scss';

const DifficultyDropdown = (props) => {
    const { setFetchUrl, toggleDifficultyDropDown } = props;

    const filterDblack = () => setFetchUrl('double-black');
    const filterBlack = () => setFetchUrl('black');
    const filterBlue = () => setFetchUrl('blue');
    const filterGreen = () => setFetchUrl('green');

    return (
        <ul className='dropdown-list' id='difficulty-list' onMouseLeave={toggleDifficultyDropDown}>
            <button className='dropdown-li' onClick={filterDblack}>Double Black</button>
            <button className='dropdown-li' onClick={filterBlack}>Black</button>
            <button className='dropdown-li' onClick={filterBlue}>Blue</button>
            <button className='dropdown-li' onClick={filterGreen}>Green</button>
        </ul>
    );
};

export default DifficultyDropdown;