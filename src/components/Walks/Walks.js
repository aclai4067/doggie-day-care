import './Walks.scss';
import React from 'react';
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
  }

  componentDidMount() {
    const { walk, allDogs, allStaff } = this.props;
    const findEmployee = allStaff.find((x) => x.id === walk.employeeId);
    const fullName = `${findEmployee.firstName} ${findEmployee.lastName}`;
    const findDog = allDogs.find((y) => y.id === walk.dogId);
    const dogName = findDog.name;
    this.setState({ assignedEmployee: fullName, assignedDog: dogName });
  }

  render() {
    const { walk } = this.props;
    const { assignedDog, assignedEmployee } = this.state;

    return (
      <div className='Walks p-2'>
        <p>Dog: {assignedDog}</p>
        <p>Walker: {assignedEmployee}</p>
        <p>{walk.date}</p>
        <button className='btn btn-outline-light'>Cancel</button>
      </div>
    );
  }
}

export default Walks;
