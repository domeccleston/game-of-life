import styled from 'styled-components';

export const BinaryCell = styled.div`
  border: 1px solid black;
  width: 1em;
  height: 1em;

  ${({ active }) =>
    active &&
    `
    background: black;
    color: white;
  `}
`;