import styled from 'styled-components';

export const ColStyled = styled.div`
  display: flex;
  width: ${props => (100 / 12) * props.col}%;
  padding: 0 7.5px;
  :first-child {
    padding-left: 0;
  }
  :nth-last-child(1) {
    padding-right: 0;
  }
`;
