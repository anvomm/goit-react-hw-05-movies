import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
`;

export const Card = styled.li`
  width: 285px;
  background-color: #232526;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 5px;

  @media (min-width: 768px) {
  }

  @media (min-width: 1280px) {
  }
`;
