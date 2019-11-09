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
const colArr = Array(HEIGHT).fill(0);
const rowArr = Array(WIDTH).fill(0);
const boardArr = colArr.map(columns => rowArr.map(rows => 0));

const App = () => {
  const [boardState, setBoardState] = useState(boardArr);
  return (
    <BoardContainer>
      <Board>
        {boardState.map((rows, xIndex) =>
          boardState[xIndex].map((columns, yIndex) => (
            <Cell boardState={boardState} x={xIndex} y={yIndex}/>
          ))
        )}
      </Board>
    </BoardContainer>
  );
};

export default App;
