export const FeedbackOptions = ({
  onIncrementGood,
  onIncrementNautral,
  onIncrementBad,
}) => (
  <>
    <button type="button" onClick={onIncrementGood}>
      Good
    </button>
    <button type="button" onClick={onIncrementNautral}>
      Nautral
    </button>
    <button type="button" onClick={onIncrementBad}>
      Bad
    </button>
  </>
);
