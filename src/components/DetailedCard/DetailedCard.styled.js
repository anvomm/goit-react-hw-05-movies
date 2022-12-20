import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

export const Title = styled.h2`
  text-align: center;
  margin: 25px 0;
  font-size: 28px;
  font-weight: 500;
  color: #99a9ff;
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
  letter-spacing: 0.1em;
  color: #99a9ff;
`;

export const Text = styled.p`
  font-size: 20px;
  line-height: 1.45;
`;

export const AdditionalTitle = styled.h3`
  text-align: center;
  margin-bottom: 30px;
  font-weight: 500;
  font-size: 28px;
  color: #99a9ff;

  &::before {
    content: '';
    display: block;
    margin: 0 auto 25px auto;
    width: 750px;
    height: 1px;
    background: linear-gradient(
      to right,
      rgba(128, 147, 255, 0.25) 15%,
      rgba(125, 155, 250, 1) 40%,
      rgba(96, 219, 212, 0.8) 65%,
      rgba(92, 228, 207, 0.15)
    );
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-bottom: 50px;
`;

export const AdditionalLink = styled(Link)`
  font-size: 24px;
  text-transform: lowercase;
  color: #5ce4cf;
`;

export const StyledContainer = styled(ToastContainer)`
  .Toastify__toast {
    background-color: #232526;
    color: #5ce4cf;
    border: 1px solid #99a9ff;
  }
  .Toastify__close-button {
    color: #5ce4cf;
  }
  .Toastify__progress-bar {
    background: linear-gradient(
      to right,
      rgba(128, 147, 255, 0.25),
      rgba(125, 155, 250, 1),
      rgba(96, 219, 212, 0.8),
      rgba(92, 228, 207, 0.15)
    );
  }
`;
