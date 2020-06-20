import React from "react";
import { connect } from "react-redux";
import Board from "./components/Board";
import Controls from "./components/Controls";
import Info from "./components/Info";

function App(props) {
  console.log(props);
  return (
    <div className="app">
      <div className="game-container">
        <h1>
          {props.runStateReducer.generation > 0
            ? `Generation: ${props.runStateReducer.generation}`
            : "Game of Life"}
        </h1>
        <Board />
        <Controls />
      </div>
      <div className="info-container"><Info /></div>
    </div>
  );
}

export default connect((state) => state)(App);
