import React, { useState } from "react";
import { connect } from 'react-redux';
import styled from "styled-components";
import Cell from "./Cell";
import { logTitle, LOG_TITLE } from '../state/actions';
const HEIGHT = 10;
const WIDTH = 10;

const GridContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 12em;
`;

// this is repetition currently, but I may want to alter row and column height in the future
const colArr = Array(HEIGHT).fill(false);
const rowArr = Array(WIDTH).fill(false);
const boardArr = colArr.map(() => rowArr.map(() => false));

const Board = (props) => {
  const [boardState, setBoardState] = useState(boardArr);

  const seedBoard = () => {
      const randomBoard = colArr.map(cols => rowArr.map(rows => Math.random() > 0.8))
      //setBoardState(randomBoard);
      props.logTitle({ title: "Hello new state!" })
  }

  return (
    <GridContainer>
      <Grid>
        {boardState.map((rows, xIndex) =>
          boardState[xIndex].map((cell, yIndex) => (
            <Cell boardState={boardState} setBoardState={setBoardState} x={xIndex} y={yIndex}/>
          ))
        )}
      </Grid>
      <button onClick={seedBoard}>Seed</button>
    </GridContainer>
  );
};

export default connect(state => state, { logTitle })(Board);
