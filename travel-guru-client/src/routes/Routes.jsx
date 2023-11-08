import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Booking from "../pages/Booking/Booking/Booking";
import User from "../layouts/User";
import Search from "../pages/Search/Search/Search";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>,
                loader: () => fetch('http://localhost:5000/places')
            },
            {
                path: 'places/:id',
                element: <Booking/>,
                loader: ({params}) => fetch(`http://localhost:5000/places/${params.id}`)
            }
        ]
    },
    {
        path: 'user',
        element: <User/>,
        children: [
            {
                path: 'hotels/:id',
                element: <Search/>,
                loader: ({params}) => fetch(`http://localhost:5000/hotels/${params.id}`)
            },
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: 'signup',
                element: <SignUp/>
            }
        ]
    }
])

export default router;