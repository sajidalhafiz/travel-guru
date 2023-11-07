import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
import fb from '../../assets/fb.png';
import google from '../../assets/google.png'

const Login = () => {
    return (
        <div className='form-container'>
            <form className='login-form'>
                <h2>Please Login</h2>
                <div className='login-input'>
                    <input type="text" name="origin" id="" placeholder="Username of Email" />
                </div>
                <div className='login-input'>
                    <input type="password" name="origin" id="" placeholder="Password" />
                </div>
                <div className='check-forgot'>
                    <div className='check-box'>
                        <input type="checkbox" />
                        <label htmlFor="">Remember Me</label>
                    </div>
                    <div className='login-link'>
                        <Link>Forgot password</Link>
                    </div>
                </div>
                <button className='primary-btn'>Start Booking</button>
                <small className='login-link'>Don’t have an account? <Link to='/user/signup'>Create an account</Link></small>
            </form>
            <div className='divider'>
                <div className='hr-bar'/>
                <p>or</p>
                <div className='hr-bar'/>
            </div>
            <div className='btn-container'>
                <button className='social-btn'><img src={fb} alt="" />Continue with facebook</button>
                <button className='social-btn'><img src={google} alt="" />Continue with google</button>
            </div>
        </div>
    );
};

export default Login;