export const Statistic = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <ul>
    <li>Good:{good}</li>
    <li>Nautral:{neutral}</li>
    <li>Bad:{bad}</li>
    <li>Total:{total}</li>
    <li>Positive feedback:{positivePercentage}%</li>
  </ul>
);
