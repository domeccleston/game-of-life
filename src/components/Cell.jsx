import React  from 'react';
import styled from "styled-components";

const CellDiv = styled.div`
    border: 1px solid black;
    width: 1em;
    height: 1em;
`;

const Cell = ({ boardState, x, y }) => {

    const logState = event => {
        console.log([x, y]);
    }

    return (
        <CellDiv onClick={logState}/>
    );
}
 
export default Cell;