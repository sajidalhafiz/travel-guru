import React from 'react';
import logo from '../../../../public/logo.png'

const BlackNav = () => {
    return (
        <div className='black-nav'>
            {/* <h1>Cox's bazar</h1> */}
            <div className='logo'><img src={logo} alt="" /></div>
            <ul className='nav-items' type='none'>
                <li>News</li>
                <li>Destination</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
            <div>
                <button className='secondary-btn'>Sing Out</button>
            </div>
        </div>
    );
};

export default BlackNav;