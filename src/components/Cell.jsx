import React, { useState } from "react";
import styled from "styled-components";
import { isEqual } from "lodash"; // faster than using JSON.stringify to deep compare arrays

// % operator in javascript can return a negative number; we need an implementation that always returns positive in order to wrap
// around array indices at the ends of the board

function mod(n, m) {
  return ((n % m) + m) % m;
}

const width_max = 10;
const height_max = 10;

const CellDiv = styled.div`
  border: 1px solid black;
  width: 1em;
  height: 1em;

  ${({ active }) =>
    active &&
    `
    background: black;
  `}
`;

const Cell = ({ boardState, setBoardState, x, y }) => {
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

  return <CellDiv onClick={logState} active={boardState[x][y]} />;
};

export default Cell;
