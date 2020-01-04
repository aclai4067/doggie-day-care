import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import DogPen from '../components/DogPen/DogPen';
import dogData from '../helpers/data/dogData';
import employeeData from '../helpers/data/employeeData';
import StaffRoom from '../components/StaffRoom/StaffRoom';

class App extends React.Component {
  state = {
    allDogs: [],
    allStaff: [],
  }

  componentDidMount() {
    const allDogs = dogData.getAllDogs();
    const allStaff = employeeData.getAllEmployees();
    this.setState({ allDogs, allStaff });
  }

  render() {
    return (
      <div className="App">
        <DogPen allDogs={this.state.allDogs} />
        <StaffRoom allStaff={this.state.allStaff} />
      </div>
    );
  }
}

export default App;
