import React from 'react';
import { Row, Col, Button, Typography } from 'antd';
import firebase, { auth } from '../../firebase/config';
import { addDocument, generateKeywords } from '../../firebase/services';
import "../Account/SignIn.css";


const { Title } = Typography;

const fbProvider = new firebase.auth.FacebookAuthProvider();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export default function Login() {
  const handleLogin = async (provider) => {
    const { additionalUserInfo, user } = await auth.signInWithPopup(provider);

    if (additionalUserInfo?.isNewUser) {
      addDocument('users', {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.uid,
        providerId: additionalUserInfo.providerId,
        keywords: generateKeywords(user.displayName?.toLowerCase()),
      });
    }
  };

  return (
    <div>
      <div class="container" id="container">
        <div class="form-container sign-in-container">
          <div className="form-signin">
            <h1 className="title">Sign in</h1>
            <span>or use your account</span>
            <div className="form-input" >
              <input type="text" placeholder="Email" />
              <input type="password" placeholder="Password" />
            </div>
            <button className="button-signin">Sign In</button>
          </div>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button className="ghost" id="signIn">
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <div className="login-with">
                <Button
                 className="login-gg"
                  style={{ width: '100%', marginBottom: 5 }}
                  onClick={() => handleLogin(googleProvider)}
                >
                  Login with Google
                </Button>
                <div>
                  <Button
                   className="login-fb"
                    style={{ width: '100%' }}
                    onClick={() => handleLogin(fbProvider)}
                  >
                    Login with Facebook
                  </Button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
