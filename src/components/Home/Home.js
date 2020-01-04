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
    dogData.getAllDogs()
      .then((allDogs) => {
        employeeData.getAllEmployees()
          .then((allStaff) => {
            this.setState({ allDogs, allStaff });
          });
      }).catch((err) => console.error(err));
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
