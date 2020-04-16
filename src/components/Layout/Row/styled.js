import styled from 'styled-components';

export const RowStyled = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 15px;

  @media (max-width: 933px) {
    flex-direction: column;
    padding: 0;
    > div {
      width: 100%;
      padding: 0 0 15px 0;
    }
  }

  @media (max-width: 560px) {
    div {
      width: 100%;
      flex-direction: column;
      padding: 0;
    }
    .inputs,
    .checkbox {
      margin: 0 0 15px 0 !important;
    }
    .around {
      border: 1px solid #d8d8d8 !important;
      border-radius: 3px !important;
    }
  }
`;
