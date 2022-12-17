import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;

  @media (min-width: 320px) {
    width: 320px;
    margin: 0 auto;
  }

  @media (min-width: 768px) {
    width: 768px;
    padding-left: 35px;
    padding-right: 35px;
  }

  @media (min-width: 1280px) {
    width: 1200px;
    padding-left: 0px;
    padding-right: 0px;
  }
`;
