import React from'react';
import { GoogleOutlined , FacebookOutlined } from '@ant-design/icons';
import "firebase/app";

import { auth } from '../firebase';
import firebase from 'firebase/app';

const Login = () => {
    return(
        <div id="login-page">
            <div id="login-card">
                <h2>Welcome to Social Network</h2>
                <div className='login-button google' onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}>
                    <GoogleOutlined /> Sign in with google
                </div>
                <br></br>
                <div className='login-button facebook' onClick={() => auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())}>
                    <FacebookOutlined /> Sign in with facebook
                </div>
                <br></br>
                <div class="username">
                        <input type="text" class="inputfieldsign" placeholder="First name" name="username" required
                            data-test="loginform-username"></input>
                        <input type="text" class="inputfieldsign inputlastname" placeholder="Last name" name="username" required
                            data-test="loginform-username"></input>
                    </div>

                    <input type="email" class="inputfield" placeholder="Email" name="email" required
                        data-test="loginform-username"></input>
                    <input type="password" placeholder="Password" class="inputfield inputpassword" name="password"
                        required data-test="loginform-password"></input>

                    <div class="BottomContainer">
                        <button class="submitButton" type="button" data-test="loginform-loginbutton">Sign Up</button>
                        <div class="signup-link">
                            <span>Already have an account?</span>
                            <a href="#">Log In</a>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Login;