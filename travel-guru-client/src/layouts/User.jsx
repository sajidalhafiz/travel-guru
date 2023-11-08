import React from 'react';
import { Outlet } from 'react-router-dom';
import BlackNav from '../components/Shared/BlackNav/BlackNav';

const User = () => {
    return (
        <div id='user-layout'>
            <BlackNav/>
            <Outlet/>
        </div>
    );
};

export default User;