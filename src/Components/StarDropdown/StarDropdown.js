import React, { useState } from 'react';
import './StarDropdown.scss';

const StarDropdown = () => {

    const [isOpen, setIsOpen ] = useState(false);
    const showDropdown = () => setIsOpen(true);
    const hideDropdown = () => setIsOpen(false);

    return(
        <div className='star-dropdown'>
            <header onClick={showDropdown} >Rating</header>
            {
            isOpen === false ? null 
            : <ul 
                className='star-dropdown-list'
                onMouseLeave={hideDropdown}  
                >
                <li className='star-list-item' >Five Star</li>
                <li className='star-list-item'>Four Star</li>
                <li className='star-list-item'>Three Star</li>
                <li className='star-list-item'>Two Star</li>
                <li className='star-list-item'>One Star</li>
            </ul>
            }
        </div>
    );
};

export default StarDropdown;