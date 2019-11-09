import React, { useState } from "react";
import styled from "styled-components";
import Cell from "./Cell";

const HEIGHT = 10;
const WIDTH = 10;

const BoardContainer = styled.div`
    display: flex;
    justify-content: center;
`

const Board = styled.div`
  display: flex;
  width: 50%;
`;

const rowArr = Array(10).fill(0);

const App = () => {
  return (
    <BoardContainer>
      <Board>
        {rowArr.map(el => <Cell/>)}
      </Board>
    </BoardContainer>
  );
};

export default App;
