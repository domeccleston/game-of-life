import styled from "styled-components";

export const BinaryCell = styled.div`
  border: 1px solid lightgrey;
  padding: 0.55em;
  max-width: 1em;
  max-height: 1em;

  ${({ active }) =>
    active &&
    `
    background: black;
    color: white;
  `}
`;
