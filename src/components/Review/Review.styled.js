import styled from 'styled-components';
import { Text } from 'components/DetailedCard/DetailedCard.styled';

export const Title = styled.h3`
  text-align: center;
  font-size: 20px;
  color: #5ce4cf;
  @media (min-width: 768px) {
    font-size: 22px;
  }
  @media (min-width: 1280px) {
    font-size: 26px;
  }
`;

export const Notification = styled.p`
  font-size: 24px;
  text-align: center;
`;

export const ReviewText = styled(Text)`
  text-align: center;
  font-size: 14px;
  color: #b8b8b8;

  @media (min-width: 768px) {
    font-size: 16px;
  }
  @media (min-width: 1280px) {
    font-size: 18px;
  }
`;
