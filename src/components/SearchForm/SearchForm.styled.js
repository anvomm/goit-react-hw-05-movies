import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const Input = styled.input`
  @media (max-width: 479px) {
    width: 150px;
  }
  width: 357px;
  padding-left: 35px;
  margin-bottom: 50px;
  font-size: 18px;
  outline: none;
  background-color: inherit;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 2px solid transparent;
  border-image: linear-gradient(
    0.25turn,
    rgba(128, 147, 255, 0),
    rgba(125, 155, 250, 1),
    rgba(96, 219, 212, 1),
    rgba(92, 228, 207, 0)
  );
  border-image-slice: 1;
  color: #fff;
`;

export const Button = styled.button`
  background-color: inherit;
  transition: transform 250ms linear;
  margin-bottom: 50px;

  &:hover,
  &:focus {
    transform: scale(1.15);
  }
`;
