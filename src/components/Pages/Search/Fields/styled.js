import styled from 'styled-components';

export const ButtonsStyled = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  > button {
    color: #ae3346;
    background: none;
    font-weight: bold;
    font-family: Roboto;
    cursor: pointer;

    @media (max-width: 560px) {
      display: flex;
      margin-bottom: 15px !important;
    }
  }

  > div {
    @media (max-width: 560px) {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }

    > button {
      cursor: pointer;
      font-weight: bold;
      font-family: Roboto;
      font-size: 12px;
    }

    @media (max-width: 560px) {
      button {
        height: 45px !important;
        margin-bottom: 15px;
      }
    }

    > button:first-child {
      color: #afacb2;
      background: none;

      @media (max-width: 560px) {
        width: 110px;
        margin-left: 0;
        background: #d8d8d8;
        color: #666;
        border-radius: 3px;
      }
    }

    > button:nth-last-child(1) {
      width: 300px;
      height: 50px;
      color: #fff;
      background: #ae3346;
      font-size: 16px;
      margin-left: 30px;
      border-radius: 3px;

      @media (max-width: 560px) {
        width: 110px;
        margin-left: 0;
        font-size: 12px;
      }
    }
  }
`;
