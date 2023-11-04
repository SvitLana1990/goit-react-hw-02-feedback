import styled from 'styled-components';

export const ContainerBtn = styled.div`
  display: flex;
  gap: ${p => p.theme.spacing(3)};
`;

export const Button = styled.button`
  width: 100px;
  padding: ${p => p.theme.spacing(2)};
  border: none;
  background-color: ${p => p.theme.colors.orange};
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 500;
  border-radius: 20px;
`;
