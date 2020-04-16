import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 933px;
  min-width: 300px;
  height: 100%;
  flex-direction: column;

  @media (max-width: 933px) {
    width: 100%;
    padding: 15px;
  }
`;
