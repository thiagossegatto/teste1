import styled from 'styled-components';

export const SelectStyled = styled.div`
  display: flex;
  width: 100%;
  height: 35px;
  border-radius: 3px;
  border: 1px solid #d8d8d8;
  position: relative;
  align-items: center;
  justify-content: space-between;
  border-color: ${props => (props.focus ? '#333' : '#d8d8d8')};

  @media (max-width: 560px) {
    margin-bottom: 15px;
    > svg {
      top: 12px;
    }

  }

  > label {
    display: flex;
    width: 100%;
    height: 100%;
    padding-left: 10px;
    font-size: 14px;
    color: #a8a9a8;
    align-items: center;
    > b {
      color: #666;
      margin-left: 5px;
    }
  }

  > svg {
    position: absolute;
    right: 0;
    margin-right: 10px;
    font-size: 10px;
    color: ${props => (props.focus ? '#333' : '#A8A9A8')};
  }

  > ul {
    position: absolute;
    display: flex;
    width: 100%;
    opacity: 1;
    top: 35px;
    background: #fff;
    flex-direction: column;
    border: 1px solid #d8d8d8;
    z-index: 100;

    li {
      background: #fff;
      padding: 5px 10px;
      color: #a8a9a8;
      font-size: 14px;

      .active,
      :hover {
        background: #b34b53;
        color: #fff;
      }
    }
    .active {
      background: #b34b53;
      color: #fff;
    }
  }
`;
