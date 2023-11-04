import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${p => p.theme.spacing(3)};
`;

export const StatisticItem = styled.p`
  font-size: 22px;
  font-weight: 500;
  color: ${p => p.theme.colors.blue};
`;

export const Total = styled.p`
  font-size: 24px;
  font-weight: 500;
  color: ${p => p.theme.colors.red};
`;

export const PositiveFeedback = styled.p`
  font-size: 26px;
  font-weight: 600;
  color: ${p => p.theme.colors.green};
`;
