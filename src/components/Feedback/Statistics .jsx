import { FeedbackList } from './Statistic.styled';

export const Statistic = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <FeedbackList>
    <li>Good: {good}</li>
    <li>Nautral: {neutral}</li>
    <li>Bad: {bad}</li>
    <li>Total: {total}</li>
    <li>Positive feedback:{positivePercentage}%</li>
  </FeedbackList>
);
