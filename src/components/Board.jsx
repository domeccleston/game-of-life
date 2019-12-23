import React from 'react';
import { connect } from 'react-redux';
import { Grid, GridContainer } from './boardStyles';
import Cell from './Cell';
import { randomizeBoard } from '../state/actions';
import { boardReducer } from '../state/reducers';

const Board = ({ board, randomizeBoard }) => {
  return (
    <GridContainer>
      <Grid>
        {board.map((rows, xIndex) =>
          board[xIndex].map((cell, yIndex) => <Cell x={xIndex} y={yIndex} />)
        )}
      </Grid>
      <button onClick={randomizeBoard}>Seed</button>
    </GridContainer>
  );
};

const mapStateToProps = state => ({
  board: state.boardReducer
});

export default connect(mapStateToProps, { randomizeBoard })(Board);
