import styled from 'styled-components';

export const InputStyled = styled.div`
  display: flex;
  width: 100%;
  /* width: ${props => (100 / 12) * props.col}%; */
  height: 35px;
  position: relative;
  align-items: center;

  @media (max-width: 560px) {
        margin-bottom: 15px;
    }

  > label {
    position: absolute;
    font-size: 14px;
    color: #A8A9A8;
    left: ${props => (props.hasIcon ? '40px' : 10)};
    height: 100%;
    align-items: center;
    justify-items: center;
    display: flex;
    > b{
      color: #666;
    }
  }

  > svg{
    position: absolute;
    left: 10px;
    color: #ae3346;
    height: 100%;
    align-items: center;
    justify-items: center;
    display: flex;
  }

  > input {
    display: flex;
    width: 100%;
    height: 35px;
    border-radius: 3px;
    background: #FFF;
    border: 1px solid #d8d8d8;
    text-indent: ${props => (props.hasIcon ? '80px' : 20)};
    font-family: Roboto; 
    color: #666;
    font-size: 14px;
    font-weight: bold;
  }
`;
