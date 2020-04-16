import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  width: 100%;

  .aside {
    .menu-tab{
      width: 300px;
      a {
        display: none;
      }
    }
    .container-tab{
      width: 300px;
    }
  }
`;
