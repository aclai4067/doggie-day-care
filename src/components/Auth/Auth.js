import './Auth.scss';
import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import googleIcon from './googCircleIcon.png';

class Auth extends React.Component {
  loginEvent = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  render() {
    return (
      <div id='auth'>
        <button className='btn btn-dark' onClick={this.loginEvent}><img className='googleIcon mr-2' src={googleIcon} alt='google logo' />Log In with Google</button>
      </div>
    );
  }
}

export default Auth;
