import React, { useState } from "react";
import styled from "styled-components";
import Cell from "./Cell";

const HEIGHT = 10;
const WIDTH = 10;

const BoardContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Board = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 12em;
`;

// this is repetition currently, but I may want to alter row and column height in the future
const colArr = Array(HEIGHT).fill(false);
const rowArr = Array(WIDTH).fill(false);
const boardArr = colArr.map(() => rowArr.map(() => false));

const App = () => {
  const [boardState, setBoardState] = useState(boardArr);
  const seedBoard = () => {
      const randomBoard = colArr.map(cols => rowArr.map(rows => Math.random() > 0.8))
      setBoardState(randomBoard);
  }

  return (
    <BoardContainer>
      <Board>
        {boardState.map((rows, xIndex) =>
          boardState[xIndex].map((cell, yIndex) => (
            <Cell boardState={boardState} setBoardState={setBoardState} x={xIndex} y={yIndex}/>
          ))
        )}
      </Board>
      <button onClick={seedBoard}>Seed</button>
    </BoardContainer>
  );
};

export default App;
