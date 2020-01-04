import './MyNav.scss';
import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import 'firebase/auth';

class MyNav extends React.Component {
  static propTypes = {
    authed: PropTypes.bool,
  }

  logoutEvent = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    const testAuth = this.props.authed;

    return (
      <div className="MyNavbar">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <span className="navbar-brand" href="#">Doggie Day Care</span>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarToggler">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            </ul>
            <div className="form-inline my-2 my-lg-0">
              { (testAuth) && (<button className="nav-link btn btn-outline-warning" onClick={this.logoutEvent}>Logout</button>)}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default MyNav;
