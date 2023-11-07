import React from 'react';
import { Link } from 'react-router-dom';
import './WhiteNav.css'
import logo from '../../../../public/logo-white.png'
import { FaSistrix } from "react-icons/fa6";

const WhiteNav = () => {
    return (
        <div className='white-nav'>
            {/* <h1>Cox's bazar</h1> */}
            <div className='logo'><img src={logo} alt="" /></div>
            <div className='search-input'><FaSistrix/><input type="text" name="" id="" placeholder='Search your Destination...'/></div>
            <ul className='nav-items' type='none'>
                <li>News</li>
                <li>Destination</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
            <div>
                <Link className='primary-btn' to='/user/login'>Log In</Link>
            </div>
        </div>
    );
};

export default WhiteNav;