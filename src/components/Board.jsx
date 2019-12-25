import React from 'react';
import { connect } from 'react-redux';
import { Grid, GridContainer } from './boardStyles';
import Cell from './Cell';
import { randomizeBoard, alternateBoard } from '../state/actions';
import { boardReducer } from '../state/reducers';

const Board = ({ board, randomizeBoard, alternateBoard }) => {

  const handleClick = () => {
    alternateBoard();
    console.log(board); 
  };

  return (
    <GridContainer>
      <Grid>
        {board.map((rows, xIndex) =>
          board[xIndex].map((cell, yIndex) => <Cell x={xIndex} y={yIndex} />)
        )}
      </Grid>
      <button onClick={handleClick}>Seed</button>
    </GridContainer>
  );
};

const mapStateToProps = state => ({
  board: state.boardReducer
});

export default connect(mapStateToProps, { randomizeBoard, alternateBoard })(Board);
