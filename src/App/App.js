import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import './App.scss';
import authData from '../helpers/data/authData';
import Auth from '../components/Auth/Auth';
import Home from '../components/Home/Home';
import MyNav from '../components/MyNav/MyNav';

authData.firebaseApp();


class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed } = this.state;

    return (
      <div className="App">
        <MyNav authed={authed} />
        {
          (authed) ? (<Home />) : (<Auth />)
        }
      </div>
    );
  }
}

export default App;
