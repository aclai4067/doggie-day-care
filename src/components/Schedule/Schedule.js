import './Schedule.scss';
import React from 'react';
import PropTypes from 'prop-types';
import walkShape from '../../helpers/propz/walkShape';
import Walks from '../Walks/Walks';

class Schedule extends React.Component {
  static propTypes = {
    allWalks: PropTypes.arrayOf(walkShape.walkShape),
  }

  render() {
    const { allWalks } = this.props;

    const printWalks = allWalks.map((walk) => <Walks key={walk.id} walk={walk} />);

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
