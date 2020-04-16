import styled from 'styled-components';

export const CheckboxStyled = styled.div`
  display: flex;
  height: 20px;

  @media (max-width: 560px) {
    flex-direction: row !important;
  }

  button {
    display: flex;
    width: 20px;
    height: 20px;
    background: #fff;
    border: 1px solid #d8d8d8;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    > svg {
      color: #9a444f;
      font-size: 10px;
    }
  }
  label {
    margin-left: 10px;
    font-size: 14px;
    align-self: center;
    color: #a8a9a8;
  }
`;
