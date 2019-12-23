import React from "react";
import { connect } from 'react-redux';
import styled from "styled-components";
import Cell from "./Cell";
import { RANDOMIZE_BOARD, randomizeBoard } from '../state/actions';
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


const Board = (props) => {

  console.log(props.boardReducer);

  return (
    <GridContainer>
      <Grid>
        {props.boardReducer.map((rows, xIndex) =>
          props.boardReducer[xIndex].map((cell, yIndex) => (
            <Cell />
          ))
        )}
      </Grid>
      <button onClick={props.randomizeBoard}>Seed</button>
    </GridContainer>
  );
};

export default connect(state => state, { randomizeBoard })(Board);
