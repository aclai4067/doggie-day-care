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

  getWalks = () => {
    walkData.getWalks()
      .then((allWalks) => {
        this.setState({ allWalks });
      }).catch((err) => console.error(err));
  }

  componentDidMount() {
    dogData.getAllDogs()
      .then((allDogs) => {
        employeeData.getAllEmployees()
          .then((allStaff) => {
            this.getWalks();
            this.setState({ allDogs, allStaff });
          });
      }).catch((err) => console.error(err));
  }

  cancelWalk = (walkId) => {
    walkData.deleteWalk(walkId)
      .then(() => {
        this.getWalks();
      }).catch((err) => console.error(err));
  }

  render() {
    const { allDogs, allStaff, allWalks } = this.state;

    return (
      <div className="Home">
        <Schedule allWalks={allWalks} allDogs={allDogs} allStaff={allStaff} cancelWalk={this.cancelWalk} />
        <DogPen allDogs={allDogs} />
        <StaffRoom allStaff={allStaff} />
      </div>
    );
  }
}

export default Home;
