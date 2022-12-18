import styled from 'styled-components';

export const MoviesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const Card = styled.li`
  background-color: #232526;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 5px;
  flex-basis: calc((100% - 60px) / 4);
        
        &:not(:nth-child(4n)) {
            margin-right: 20px;
        }
        
        &:not(:nth-last-child(-n+4)) {
            margin-bottom: 30px;
        }
    }
`;
