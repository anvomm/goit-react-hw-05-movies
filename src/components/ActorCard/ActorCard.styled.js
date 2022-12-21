import styled from 'styled-components';
import { CardBottom } from 'components/MovieCard/MovieCard.styled';

export const CardTitle = styled.h2`
  margin-bottom: 10px;
  font-size: 18px;
  line-height: 1.33;
  text-align: center;
`;

export const Text = styled.p`
  font-size: 15px;
  text-align: center;
`;

export const ActorCardBottom = styled(CardBottom)`
  width: 160px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const Image = styled.img`
  border-radius: 5px 5px 0 0;
  width: 200px;
`;
