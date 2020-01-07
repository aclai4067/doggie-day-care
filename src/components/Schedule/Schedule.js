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
    cancelWalk: PropTypes.func,
    changeEditMode: PropTypes.func,
    setWalkToEdit: PropTypes.func,
  }

  render() {
    const {
      allWalks,
      allDogs,
      allStaff,
      cancelWalk,
      changeEditMode,
      setWalkToEdit,
    } = this.props;

    const printWalks = allWalks.map((walk) => <Walks key={walk.id} walk={walk} allDogs={allDogs} allStaff={allStaff} cancelWalk={cancelWalk} setWalkToEdit={setWalkToEdit}
      changeEditMode={changeEditMode} />);

    return (
      <div className='Schedule'>
        <h2>Walk Schedule</h2>
        <div className='row d-flex flex-wrap justify-content-around'>
          { (allWalks[0]) ? printWalks : <p>No walks scheduled</p> }
        </div>
      </div>
    );
  }
}

export default Schedule;
