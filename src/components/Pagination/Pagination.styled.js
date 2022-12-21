import ReactPaginate from 'react-paginate';
import styled from 'styled-components';

export const Pagination = styled(ReactPaginate)`
  width: 280px;
  margin: 70px auto 0 auto;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  color: #99a9ff;

  li.disabled a {
    color: grey;
  }
  li.disable,
  li.disabled a {
    cursor: default;
  }

  li.active a {
    color: #1d1d1d;
  }

  li.page-item {
    width: 25px;
    height: 25px;
    font-size: 15px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 768px) {
      width: 35px;
      height: 35px;
    }

    @media (min-width: 1280px) {
      width: 40px;
      height: 40px;
    }
  }

  li.page-item.active {
    border-radius: 50%;
    background-color: #99a9ff;
  }

  @media (min-width: 768px) {
    width: 500px;
  }

  @media (min-width: 1280px) {
    width: 700px;
  }
`;
