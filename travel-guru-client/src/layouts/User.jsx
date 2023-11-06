import React from 'react';
import { Outlet } from 'react-router-dom';

const User = () => {
    return (
        <div>
            users
            <Outlet/>
        </div>
    );
};

export default User;