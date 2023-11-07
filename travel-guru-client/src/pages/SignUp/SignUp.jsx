import React from 'react';
import { Link } from 'react-router-dom';
import fb from '../../assets/fb.png';
import google from '../../assets/google.png'

const SignUp = () => {
    return (
        <div className='form-container'>
            <form className='login-form'>
                <h2>Create an account</h2>
                <div className='login-input'>
                    <input type="text" name="origin" id="" placeholder="First Name" />
                </div>
                <div className='login-input'>
                    <input type="text" name="origin" id="" placeholder="Last Name" />
                </div>
                <div className='login-input'>
                    <input type="text" name="origin" id="" placeholder="Username of Email" />
                </div>
                <div className='login-input'>
                    <input type="password" name="origin" id="" placeholder="Password" />
                </div>
                <div className='login-input'>
                    <input type="password" name="origin" id="" placeholder="Confirm Password" />
                </div>
                <button className='primary-btn'>Create an account</button>
                <small className='login-link'>Already have an account? <Link to='/user/login'>Login</Link></small>
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

export default SignUp;