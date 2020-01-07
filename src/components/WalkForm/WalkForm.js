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
  }

  state = {
    dogToWalk: '',
    staffForWalk: '',
    dateOfWalk: '',
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
    const { allDogs, allStaff } = this.props;

    const printAllDogOptions = allDogs.map((dog) => <option key={dog.id} value={dog.id}>{dog.name}</option>);

    const printAllStaffOptions = allStaff.map((staff) => <option key={staff.id} value={staff.id}>{staff.firstName} {staff.lastName}</option>);

    return (
      <div className='formDiv'>
        <form className='col-6 offset-3'>
          <div className='form-group'>
            <label htmlFor='dogOptions'>Select a Dog</label>
            <select className='form-control' id='dogOptions' value={this.state.dogToWalk} onChange={this.changeDog}>
              {printAllDogOptions}
            </select>
          </div>
          <div className='form-group'>
            <label htmlFor='staffOptions'>Select a Dog Walker</label>
            <select className='form-control' id='staffOptions' value={this.state.staffForWalk} onChange={this.changeStaff}>
              {printAllStaffOptions}
            </select>
          </div>
          <div className='form-group'>
            <label htmlFor='dateSelection'>Select a Date</label>
            <input type='date' className='form-control' id='dateSelection' value={this.state.dateOfWalk} onChange={this.changeDate} />
          </div>
          <button className='btn btn-dark' onClick={() => {}}>Save</button>
        </form>
      </div>
    );
  }
}

export default WalkForm;