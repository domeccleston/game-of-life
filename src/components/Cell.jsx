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

  const [active, setActive] = useState(false)

  const logState = event => {
    setBoardState(
      boardState.map((el, xIndex) => {
        return boardState[xIndex].map((el, yIndex) => {
          setActive(!active);
          return isEqual([xIndex, yIndex], [x, y]) ? 1 : el;
        });
      })
    );
    console.log(boardState)
  };

  return <CellDiv onClick={logState} active={active}/>;
};

export default Cell;
