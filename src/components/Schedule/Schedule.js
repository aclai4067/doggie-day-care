import './Schedule.scss';
import React from 'react';
import PropTypes from 'prop-types';
import walkShape from '../../helpers/propz/walkShape';
import dogShape from '../../helpers/propz/dogShape';
import employeeShape from '../../helpers/propz/employeeShape';
import Walks from '../Walks/Walks';

class Schedule extends React.Component {
  static propTypes = {
    allWalks: PropTypes.arrayOf(walkShape.walkShape),
    allDogs: PropTypes.arrayOf(dogShape.dogShape),
    allStaff: PropTypes.arrayOf(employeeShape.employeeShape),
  }

  render() {
    const { allWalks, allDogs, allStaff } = this.props;

    const printWalks = allWalks.map((walk) => <Walks key={walk.id} walk={walk} allDogs={allDogs} allStaff={allStaff} />);

    return (
      <div className='Schedule'>
        <h2>Walk Schedule</h2>
        <div className='row d-flex flex-wrap justify-content-around'>
          {printWalks}
        </div>
      </div>
    );
  }
}

export default Schedule;
