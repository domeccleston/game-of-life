import React, { useState } from "react";
import { connect } from 'react-redux';
import { isEqual } from "lodash"; // faster than using JSON.stringify to deep compare arrays
import { BinaryCell } from './cellStyles';
import { mod } from '../utils/utils';

const width_max = 10;
const height_max = 10;

const Cell = (props, { boardState, setBoardState, x, y }) => {

  const handleClick = () => {
    console.log(props)
  }

  const isAlive = (arr, x, y) => {
	const north = arr[mod(x - 1, width_max)][y]
	const south = arr[mod(x + 1, width_max)][y]
	const east = arr[x][mod(y + 1, height_max)]
	const west = arr[x][mod(y - 1, height_max)]
	const ne = arr[mod(x - 1, width_max)][mod(y + 1, height_max)]
	const nw = arr[mod(x - 1, width_max)][mod(y - 1, height_max)]
	const se = arr[mod(x + 1, width_max)][mod(y + 1, height_max)]
	const sw = arr[mod(x + 1, width_max)][mod(y - 1, height_max)]
    const surroundings = [north, ne, east, se, south, sw, west, nw];
    const count = surroundings.filter(el => el).length;

    if (boardState[x][y] === false) {
        if (count === 3) {
            return true;
        } else {
            return false;
        }
    } else {
        if (count === 2 || count === 3) {
            return true;
        } else {
            return false;
        }
    } 
  };

  const logState = event => {
    setBoardState(
      boardState.map((el, xIndex) => {
        return boardState[xIndex].map((el, yIndex) => {
          return isEqual([xIndex, yIndex], [x, y]) ? !el : el;
        });
      })
    );
  };

  return <BinaryCell onClick={handleClick}/>;
};

export default connect(state => state)(Cell);
