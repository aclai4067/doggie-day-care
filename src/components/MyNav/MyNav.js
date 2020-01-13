import './MyNav.scss';
import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import 'firebase/auth';
import {
  Navbar,
  NavbarBrand,
  Collapse,
  Nav,
  NavbarToggler,
} from 'reactstrap';

class MyNav extends React.Component {
  state = {
    isOpen: false,
  }

  static propTypes = {
    authed: PropTypes.bool,
  }

  logoutEvent = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const testAuth = this.props.authed;
    const { isOpen } = this.state;
    return (
      <div className="MyNavbar">
        <Navbar className="navbar navbar-expand-lg navbar-dark bg-dark">
          <NavbarBrand href="#">Doggie Day Care</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto">
            </Nav>
            <div className="form-inline my-2 my-lg-0">
              { (testAuth) && (<button className="nav-link btn btn-outline-warning" onClick={this.logoutEvent}>Logout</button>)}
            </div>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default MyNav;
