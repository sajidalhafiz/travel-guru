import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Booking from "../pages/Booking/Booking/Booking";
import User from "../layouts/User";
import Search from "../pages/Search/Search/Search";
import Login from "../pages/Login/Login";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: 'booking',
                element: <Booking/>
            }
        ]
    },
    {
        path: 'user',
        element: <User/>,
        children: [
            {
                path: 'search',
                element: <Search/>
            },
            {
                path: 'login',
                element: <Login/>
            }
        ]
    }
])

export default router;