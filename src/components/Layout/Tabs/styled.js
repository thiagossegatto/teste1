import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 312px;
  flex-direction: column;

  @media (max-width: 933px) {
    width: 100%;
    height: auto;
  }

  .menu-tab {
    display: flex;
    width: 100%;
    height: 73px;
    position: relative;
    @media (max-width: 560px) {
      > a {
        display: none;
      }
    }
  }
  .container-tab {
    display: flex;
    width: 100%;
    background: #fff;
    padding: 30px 50px;
    height: 239px;

    @media (max-width: 933px) {
      padding: 15px;
      height: auto;
    }
  }
`;
