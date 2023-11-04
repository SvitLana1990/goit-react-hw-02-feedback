import styled from 'styled-components';

export const Sections = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  margin-bottom: ${p => p.theme.spacing(2)};
  font-size: 28px;
  color: ${p => p.theme.colors.black};
`;
