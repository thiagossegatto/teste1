import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: space-between;

  @media (max-width: 933px) {
    flex-direction: column;
  }

  > div {
    display: flex;
    flex-direction: column;
  }

  .loading {
    width: 100%;
    justify-content: center;
    display: flex;
    color: #666;
  }
`;

export const List = styled.ul`
  display: flex;
  width: 650px;
  height: 100%;
  flex-direction: column;

  @media (max-width: 933px) {
    width: 100%;
  }

  > li {
    display: flex;
    width: 100%;
    height: 200px;
    margin-bottom: 15px;
    background: #fff;
    box-shadow: rgba(158, 184, 209, 0.41) 0px 2px 9px 0px;
    border-radius: 5px;
    overflow: hidden;

    @media (max-width: 560px) {
      flex-direction: column;
      height: auto;
    }

    .image {
      display: flex;
      width: 250px;
      height: 200px;
      overflow: hidden;
      justify-content: center;
      align-items: center;
      position: relative;

      @media (max-width: 560px) {
        width: auto;
        flex-direction: column;
      }

      > img {
        height: 100%;
      }
    }
    .description {
      display: flex;
      width: 400px;
      padding: 0 15px;
      flex-direction: column;
      font-size: 14px;
      color: #a8a9a8;

      @media (max-width: 933px) {
        width: 100%;
      }

      > div {
        display: flex;
        width: 100%;
        padding: 15px 0;
        border-bottom: 1px solid #d8d8d8;
      }

      .title {
        flex-direction: column;
        font-size: 18px;
        font-weight: bold;
        color: #666;
        > span {
          display: flex;
          width: 100%;
          font-size: 14px;
          font-weight: normal;
          color: #a8a9a8;
        }
      }
      .price {
        font-size: 20px;
        font-weight: bold;
        color: #ae3346;
      }
      .others {
        border: none;
        > span {
          display: flex;
          align-items: center;
          width: 50%;
          > svg {
            margin: 0 7px 2px 0;
          }
        }
      }
    }
  }
`;

export const SideSearch = styled.aside`
  display: flex;
  width: 250px;
  height: 500px;
  background: #333;
  color: #fff;
  align-items: center;
  justify-content: center;
  @media (max-width: 933px) {
    width: 100%;
    height: 100px;
    margin-bottom: 15px;
  }
  @media (max-width: 560px) {
    height: 200px;
  }
`;
