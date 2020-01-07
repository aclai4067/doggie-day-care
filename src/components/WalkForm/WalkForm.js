import './WalkForm.scss';
import React from 'react';
import PropTypes from 'prop-types';
import dogShape from '../../helpers/propz/dogShape';
import walkShape from '../../helpers/propz/walkShape';

class WalkForm extends React.Component {
  static propTypes = {
    scheduleWalk: PropTypes.func,
    allDogs: PropTypes.arrayOf(dogShape.dogShape),
    allWalks: PropTypes.arrayOf(walkShape.walkShape),
    editWalk: PropTypes.func,
    editMode: PropTypes.bool,
    walkToEdit: walkShape.walkShape,
  }

  state = {
    dogToWalk: '',
    staffForWalk: '',
    dateOfWalk: '',
  }

  componentDidMount = () => {
    const { editMode, walkToEdit } = this.props;
    if (editMode) {
      this.setState({ dogToWalk: walkToEdit.dogId, staffForWalk: walkToEdit.employeeId, dateOfWalk: walkToEdit.date });
    }
  }

  scheduleWalkEvent = (e) => {
    e.preventDefault();
    const { scheduleWalk } = this.props;
    const newWalkObj = {
      dogId: this.state.dogToWalk,
      employeeId: this.state.staffForWalk,
      date: this.state.dateOfWalk,
    };
    scheduleWalk(newWalkObj);
    this.setState({ dogToWalk: '', staffForWalk: '', dateOfWalk: '' });
  }

  updateWalkEvent = (e) => {
    e.preventDefault();
    const { editWalk, walkToEdit } = this.props;
    const updatedWalk = {
      dogId: this.state.dogToWalk,
      employeeId: this.state.staffForWalk,
      date: this.state.dateOfWalk,
    };
    editWalk(walkToEdit.id, updatedWalk);
  }

  changeDog = (e) => {
    e.preventDefault();
    this.setState({ dogToWalk: e.target.value });
  }

  changeStaff = (e) => {
    e.preventDefault();
    this.setState({ staffForWalk: e.target.value });
  }

  changeDate = (e) => {
    e.preventDefault();
    this.setState({ dateOfWalk: e.target.value });
  }

  render() {
    const { allDogs, allStaff, editMode } = this.props;

    const printAllDogOptions = allDogs.map((dog) => <option key={dog.id} value={dog.id}>{dog.name}</option>);

    const printAllStaffOptions = allStaff.map((staff) => <option key={staff.id} value={staff.id}>{staff.firstName} {staff.lastName}</option>);

    return (
      <div className='formDiv'>
        <form className='col-6 offset-3'>
          <div className='form-group'>
            <label htmlFor='dogOptions'>Select a Dog</label>
            <select className='form-control' id='dogOptions' value={this.state.dogToWalk} onChange={this.changeDog}>
              <option value='' disabled hidden>Select one...</option>
              {printAllDogOptions}
            </select>
          </div>
          <div className='form-group'>
            <label htmlFor='staffOptions'>Select a Dog Walker</label>
            <select className='form-control' id='staffOptions' value={this.state.staffForWalk} onChange={this.changeStaff}>
              <option value='' disabled hidden>Select one...</option>
              {printAllStaffOptions}
            </select>
          </div>
          <div className='form-group'>
            <label htmlFor='dateSelection'>Select a Date</label>
            <input type='date' className='form-control' id='dateSelection' value={this.state.dateOfWalk} onChange={this.changeDate} />
          </div>
          {
            (!editMode) ? (<button className='btn btn-dark' onClick={this.scheduleWalkEvent}>Save</button>)
              : (<button className='btn btn-outline-dark' onClick={this.updateWalkEvent}>Update</button>)
          }
        </form>
      </div>
    );
  }
}

export default WalkForm;
