import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  height: 100px;
  padding: 20px 0;
`;

export const Footer = styled.footer`
  width: 100%;
  height: 108px;
  margin-top: auto;

  &::before {
    content: '';
    display: block;
    height: 1px;
    width: 100%;
    background: linear-gradient(
      to right,
      rgba(128, 147, 255, 0.25) 15%,
      rgba(125, 155, 250, 1) 40%,
      rgba(96, 219, 212, 0.8) 65%,
      rgba(92, 228, 207, 0.15)
    );
  }
`;

export const FooterText = styled.p`
  margin-top: 60px;
  text-align: center;
  font-size: 16px;
`;
