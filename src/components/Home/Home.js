import './Home.scss';
import React from 'react';
import dogData from '../../helpers/data/dogData';
import employeeData from '../../helpers/data/employeeData';
import DogPen from '../DogPen/DogPen';
import StaffRoom from '../StaffRoom/StaffRoom';
import Schedule from '../Schedule/Schedule';
import walkData from '../../helpers/data/walkData';
import WalkForm from '../WalkForm/WalkForm';

class Home extends React.Component {
  state = {
    allDogs: [],
    allStaff: [],
    allWalks: [],
    displayForm: false,
    walkToEdit: {},
    editMode: false,
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

  scheduleWalk = (walkObj) => {
    walkData.addWalk(walkObj)
      .then(() => {
        this.getWalks();
        this.setState({ displayForm: false });
      }).catch((err) => console.error(err));
  }

  editWalk = (walkId, walkObj) => {
    walkData.updateWalk(walkId, walkObj)
      .then(() => {
        this.getWalks();
        this.setState({ editMode: false, displayForm: false });
      }).catch((err) => console.error(err));
  }

  setWalkToEdit = (walk) => {
    this.setState({ walkToEdit: walk });
  }

  changeEditMode = (editMode) => {
    this.setState({ editMode, displayForm: true });
  }

  displayWalkForm = (e) => {
    e.preventDefault();
    this.setState({ displayForm: true });
  }

  render() {
    const {
      allDogs,
      allStaff,
      allWalks,
      displayForm,
      editMode,
      walkToEdit,
    } = this.state;

    return (
      <div className="Home">
        {
          (displayForm) ? (<WalkForm allDogs={allDogs} allStaff={allStaff} scheduleWalk={this.scheduleWalk} editMode={editMode} walkToEdit={walkToEdit} editWalk={this.editWalk} />)
            : (
              <div>
                <div className='scheduleBtnHolder m-3'>
                  <button className='btn btn-outline-warning m-3' onClick={this.displayWalkForm}>Schedule a Walk</button>
                </div>
                <Schedule allWalks={allWalks} allDogs={allDogs} allStaff={allStaff} cancelWalk={this.cancelWalk} setWalkToEdit={this.setWalkToEdit} changeEditMode={this.changeEditMode} />
                <DogPen allDogs={allDogs} />
                <StaffRoom allStaff={allStaff} />
              </div>
            )
        }
      </div>
    );
  }
}

export default Home;
