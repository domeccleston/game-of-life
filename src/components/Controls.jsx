import React from "react";
import {
  incrementCount,
  randomizeBoard,
  runIteration,
  startGame,
  stopGame,
  setSpeed,
  clearBoard,
} from "../state/actions";
import { connect } from "react-redux";
import { useInterval } from "../utils/utils";

const Timer = ({
  board,
  game,
  incrementCount,
  runIteration,
  randomizeBoard,
  startGame,
  stopGame,
  speed,
  setSpeed,
  clearBoard,
}) => {
  const handleClick = () => {
    runIteration(board);
    incrementCount();
  };

  const handleClear = () => {
    clearBoard();
  };

  const handleSpeedChange = (e) => {
    // for setInterval, a higher number means a slower timer, so we invert it
    let baseSpeed = e.target.value;
    setSpeed(1001 - baseSpeed);
  };

  const handleStartStop = () => {
    game.running ? stopGame() : startGame();
  };

  useInterval(
    () => {
      incrementCount();
      runIteration(board);
    },
    game.running ? game.speed : null
  );

  return (
    <div className="controls">
      <button onClick={handleClick}>Tick</button>
      <button onClick={randomizeBoard}>Seed</button>
      <button onClick={handleClear}>Clear</button>
      <div className="slider-box">
        <input
          className="slider"
          type="range"
          min="1"
          max="1001"
          step="50"
          value={speed}
          onChange={handleSpeedChange}
        />
        <label>Speed</label>
      </div>
      <button onClick={handleStartStop}>
        {game.running ? "Stop" : "Start"}
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  board: state.boardReducer,
  game: state.runStateReducer,
});

export default connect(mapStateToProps, {
  incrementCount,
  runIteration,
  randomizeBoard,
  startGame,
  stopGame,
  setSpeed,
  clearBoard,
})(Timer);
