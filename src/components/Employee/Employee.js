import './Employee.scss';
import React from 'react';
import employeeShape from '../../helpers/propz/employeeShape';

class Employee extends React.Component {
  static propTypes = {
    employee: employeeShape.employeeShape,
  }

  render() {
    const { employee } = this.props;

    return (
      <div className='employeeCard col-md-3 m-2'>
        <h4>{employee.firstName} {employee.lastName}</h4>
        <p>{employee.phoneNumber}</p>
      </div>
    );
  }
}

export default Employee;
