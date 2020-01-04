import './DogPen.scss';
import React from 'react';
import PropTypes from 'prop-types';
import Dog from '../Dog/Dog';
import dogShape from '../../helpers/propz/dogShape';

class DogPen extends React.Component {
  static propTypes = {
    allDogs: PropTypes.arrayOf(dogShape.dogShape),
  }

  render() {
    const { allDogs } = this.props;

    const dogCards = allDogs.map((dog) => <Dog key={dog.id} />);

    return (
      <div className='row d-flex flex-wrap justify-content-around'>
        {dogCards}
      </div>
    );
  }
}

export default DogPen;
