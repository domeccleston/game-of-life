import React from "react";

const Info = () => {
  return (
    <div>
      <ul>
        <li>
          Place cells on the board by clicking, or press "seed" to generate a
          random sequence of cells.
        </li>
        <li>
          <h4>Rules:</h4>
        </li>
        <li>
          If a live cell has less than two live neighbours, it will die by
          underpopulation.
        </li>
        <li>
          If a live cell has more than three live neighbours, it will die by
          overpopulation.
        </li>
        <li>
          If a live cell has exactly three live neighbours, it will live on to
          the next generation.
        </li>
        <li>
          If a dead cell has exactly three live neighbours, it will become a
          live cell.
        </li>
        <br></br>
        <li>
          The example cells are a{" "}
          <a href="https://www.conwaylife.com/wiki/Gosper_glider_gun">
            Gosper's Glider Gun
          </a>
          . See examples of other interesting organisms{" "}
          <a href="https://www.conwaylife.com/wiki/Spaceship">here.</a>
        </li>
      </ul>
    </div>
  );
};

export default Info;
