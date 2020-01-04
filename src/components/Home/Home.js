import './Home.scss';
import React from 'react';
import dogData from '../../helpers/data/dogData';
import employeeData from '../../helpers/data/employeeData';
import DogPen from '../DogPen/DogPen';
import StaffRoom from '../StaffRoom/StaffRoom';

class Home extends React.Component {
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
      <div className="Home">
        <DogPen allDogs={this.state.allDogs} />
        <StaffRoom allStaff={this.state.allStaff} />
      </div>
    );
  }
}

export default Home;
