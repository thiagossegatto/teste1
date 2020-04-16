import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled.button`
  display: flex;
  background: none;
  border-bottom: 2px solid ${props => (props.active ? props.activeColor : '#E4E6E2')};
  transition: border-color 1s ease;
  cursor: pointer;
  padding: 10px 20px;
  font-family: 'Roboto';

  @media (max-width: 560px) {
    width: 50%;
    justify-content: center;
  }

  > svg {
    align-self: flex-end;
    height: 1em;
    color: ${props => (props.active ? props.activeColor : '#958D9F')};
    font-size: ${props => props.sizeIcon}px;
    transition: color 1s ease;
    margin-bottom: 6px;
    @media (max-width: 560px) {
      font-size: 12px;
    }
  }

  div {
    display: flex;
    margin-left: 10px;
    flex-direction: column;

    > span {
      display: flex;
      color: #958d9f;
      font-size: 24px;
      transition: color 1s ease;

      @media (max-width: 560px) {
        font-size: 16px;
      }

      :nth-child(2) {
        color: ${props => (props.active ? props.activeColor : '#958D9F')};
      }
      :first-child {
        font-size: 12px;
        @media (max-width: 560px) {
          font-size: 10px;
        }
        position: relative;
        top: 3px;
      }
    }
  }
`;

export const LinkButton = styled(Link)`
  display: flex;
  position: absolute;
  width: 190px;
  height: 37px;
  align-items: center;
  justify-content: center;
  right: 0;
  background: none;
  border: 2px solid #e49e45;
  border-radius: 3px;
  color: #e49e45;
  align-self: center;
  font-size: 12px;
  font-weight: bold;
`;
