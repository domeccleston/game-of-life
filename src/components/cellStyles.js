import styled from "styled-components";

export const BinaryCell = styled.div`
  border: 1px solid lightgrey;
  color: black;
  width: 14px;
  height: 14px;

  ${({ active }) =>
    active &&
    `
    background: black;
    color: black;
  `}
`;
