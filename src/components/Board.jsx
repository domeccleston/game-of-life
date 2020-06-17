import React from "react";
import { connect } from "react-redux";
import { BoardTable, Grid, GridContainer } from "./boardStyles";
import Cell from "./Cell";
import { randomizeBoard, alternateBoard } from "../state/actions";
import { boardReducer } from "../state/reducers";

const Board = ({ board, randomizeBoard }) => {
  console.log(board);
  // return (
  //   <GridContainer>
  //     <Grid>
  //       {board.map((rows, xIndex) => {
  //         return board[xIndex].map((cell, yIndex) => (
  //           <Cell x={xIndex} y={yIndex} />
  //         ));
  //       })}
  //     </Grid>
  //     <button onClick={randomizeBoard}>Seed</button>
  //   </GridContainer>
  // );
  const tr = [];

  for (let r = 0; r < board.length; r++) {
    const td = [];

    for (let c = 0; c < board[0].length; c++) {
      td.push(<Cell key={`${r}, ${c}`} x={c} y={r} />);
    }
    tr.push(<tr key={r}>{td}</tr>)
  }

  return <BoardTable><tbody>{tr}</tbody></BoardTable>
};

const mapStateToProps = (state) => ({
  board: state.boardReducer,
});

export default connect(mapStateToProps, { randomizeBoard, alternateBoard })(
  Board
);
