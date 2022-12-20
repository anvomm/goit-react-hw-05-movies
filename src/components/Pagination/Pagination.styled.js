import ReactPaginate from 'react-paginate';
import styled from 'styled-components';

export const Pagination = styled(ReactPaginate)`
  width: 300px;
  margin: 70px auto 0 auto;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  color: #99a9ff;

  @media (min-width: 768px) {
    width: 500px;
  }

  @media (min-width: 1280px) {
    width: 700px;
  }
`;
