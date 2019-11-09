import React, { useState } from "react";
import styled from "styled-components";
import { isEqual } from "lodash"; // faster than using JSON.stringify to deep compare arrays

const CellDiv = styled.div`
  border: 1px solid black;
  width: 1em;
  height: 1em;

  ${({ active }) => active && `
    background: black;
  `}
`;

const Cell = ({ boardState, setBoardState, x, y }) => {

  const logState = event => {
    setBoardState(
      boardState.map((el, xIndex) => {
        return boardState[xIndex].map((el, yIndex) => {
          return isEqual([xIndex, yIndex], [x, y]) ? !el : el;
        });
      })
    );
    console.log(boardState[x][y])
  };

  return <CellDiv onClick={logState} active={boardState[x][y]}/>;
};

export default Cell;
