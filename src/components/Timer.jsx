import React, { useEffect } from 'react';
import { incrementCount } from '../state/actions';
import { connect } from 'react-redux';

const Timer = ({ incrementCount, ticks }) => {
  return (
    <div>
      <h3>Ticks: {ticks}</h3>
      <button onClick={() => incrementCount()}>Tick</button>
    </div>
  );
};

const mapStateToProps = state => ({
  ticks: state.tickReducer
});

export default connect(mapStateToProps, { incrementCount })(Timer);
