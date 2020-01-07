import './Walks.scss';
import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import walkShape from '../../helpers/propz/walkShape';
import dogShape from '../../helpers/propz/dogShape';
import employeeShape from '../../helpers/propz/employeeShape';

class Walks extends React.Component {
  state = {
    assignedEmployee: '',
    assignedDog: '',
  }

  static propTypes = {
    walk: walkShape.walkShape,
    allDogs: PropTypes.arrayOf(dogShape.dogShape),
    allStaff: PropTypes.arrayOf(employeeShape.employeeShape),
    cancelWalk: PropTypes.func,
    changeEditMode: PropTypes.func,
    setWalkToEdit: PropTypes.func,
  }

  componentDidMount() {
    const { walk, allDogs, allStaff } = this.props;
    const findEmployee = allStaff.find((x) => x.id === walk.employeeId);
    const fullName = `${findEmployee.firstName} ${findEmployee.lastName}`;
    const findDog = allDogs.find((y) => y.id === walk.dogId);
    const dogName = findDog.name;
    this.setState({ assignedEmployee: fullName, assignedDog: dogName });
  }

  cancelWalkEvent = (e) => {
    e.preventDefault();
    const { walk, cancelWalk } = this.props;
    cancelWalk(walk.id);
  }

  setEditMode = (e) => {
    e.preventDefault();
    const { changeEditMode, setWalkToEdit, walk } = this.props;
    changeEditMode(true);
    setWalkToEdit(walk);
  }

  render() {
    const { walk } = this.props;
    const { assignedDog, assignedEmployee } = this.state;

    return (
      <div className='Walks p-2 m-3'>
        <p>Dog: {assignedDog}</p>
        <p>Walker: {assignedEmployee}</p>
        <p>{moment(walk.date).format('LL')}</p>
        <button className='btn btn-outline-light' onClick={this.cancelWalkEvent}>Cancel</button>
        <button className='btn btn-outline-dark ml-1' onClick={this.setEditMode}>Edit</button>
      </div>
    );
  }
}

export default Walks;
