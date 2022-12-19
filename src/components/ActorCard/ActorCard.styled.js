import styled from 'styled-components';
import { CardBottom } from 'components/MovieCard/MovieCard.styled';

export const CardTitle = styled.h2`
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  text-align: center;
`;

export const Text = styled.p`
  font-size: 15px;
  text-align: center;
`;

export const ActorCardBottom = styled(CardBottom)`
  width: 160px;
`;
