import React from 'react';
import { Outlet } from 'react-router-dom';
import WhiteNav from '../components/Shared/WhiteNav/WhiteNav';

const Main = () => {
    return (
        <div id='main-layout'>
            <WhiteNav/>
            <Outlet/>
        </div>
    );
};

export default Main;