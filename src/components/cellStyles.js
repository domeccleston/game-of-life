import styled from 'styled-components';

export const BinaryCell = styled.div`
  border-left: 1px solid lightgrey;
  border-top: 1px solid lightgrey;
  width: 1em;
  height: 1em;

  ${({ active }) =>
    active &&
    `
    background: black;
    color: white;
  `}
`;