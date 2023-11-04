import {
  Container,
  PositiveFeedback,
  StatisticItem,
  Total,
} from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <Container>
      <StatisticItem>Good: {good}</StatisticItem>
      <StatisticItem>Neutral: {neutral}</StatisticItem>
      <StatisticItem>Bad: {bad}</StatisticItem>
      {total > 0 && <Total>Total: {total}</Total>}
      {good > 0 && (
        <PositiveFeedback>
          Positive feedback: {positivePercentage}%
        </PositiveFeedback>
      )}
    </Container>
  );
};
