import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import DogPen from '../components/DogPen/DogPen';
import dogData from '../helpers/data/dogData';

class App extends React.Component {
  state = {
    allDogs: [],
  }

  componentDidMount() {
    const allDogs = dogData.getAllDogs();
    this.setState({ allDogs });
  }

  render() {
    return (
      <div className="App">
        <DogPen allDogs={this.state.allDogs} />
      </div>
    );
  }
}

export default App;
