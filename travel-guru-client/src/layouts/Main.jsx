import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            main layout
            <Outlet/>
        </div>
    );
};

export default Main;