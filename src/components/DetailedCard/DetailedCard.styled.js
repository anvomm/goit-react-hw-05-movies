import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Title = styled.h2`
  text-align: center;
  margin: 25px 0;
  font-size: 28px;
  font-weight: 500;
`;

export const Image = styled.img`
  border-radius: 5px;
`;

export const Wrap = styled.div`
  display: flex;
  gap: 50px;
  margin-bottom: 30px;
`;

export const SmallWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Span = styled.span`
  font-weight: 500;
  font-size: 24px;
`;

export const Text = styled.p`
  font-size: 20px;
  line-height: 1.66;
`;

export const AdditionalTitle = styled.h3`
  text-align: center;
  margin-bottom: 30px;
  font-weight: 500;
  font-size: 24px;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 50px;
`;

export const AdditionalLink = styled(Link)`
  font-size: 20px;
  text-transform: lowercase;
`;
