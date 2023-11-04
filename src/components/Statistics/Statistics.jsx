export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      {total > 0 && <p>Total: {total}</p>}
      {good > 0 && <p>Positive Feedback: {positivePercentage}%</p>}
    </div>
  );
};
