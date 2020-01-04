import './Home.scss';
import React from 'react';
import dogData from '../../helpers/data/dogData';
import employeeData from '../../helpers/data/employeeData';
import DogPen from '../DogPen/DogPen';
import StaffRoom from '../StaffRoom/StaffRoom';
import Schedule from '../Schedule/Schedule';
import walkData from '../../helpers/data/walkData';

class Home extends React.Component {
  state = {
    allDogs: [],
    allStaff: [],
    allWalks: [],
  }

  componentDidMount() {
    dogData.getAllDogs()
      .then((allDogs) => {
        employeeData.getAllEmployees()
          .then((allStaff) => {
            walkData.getWalks()
              .then((allWalks) => {
                this.setState({ allDogs, allStaff, allWalks });
              });
          });
      }).catch((err) => console.error(err));
  }

  render() {
    return (
      <div className="Home">
        <Schedule allWalks={this.state.allWalks} />
        <DogPen allDogs={this.state.allDogs} />
        <StaffRoom allStaff={this.state.allStaff} />
      </div>
    );
  }
}

export default Home;
