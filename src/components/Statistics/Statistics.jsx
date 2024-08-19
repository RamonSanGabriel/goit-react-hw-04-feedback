import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <p className={css.goodResult}>Good: {good}</p>
      <p className={css.neutralResult}>Neutral: {neutral}</p>
      <p className={css.badResult}>Bad: {bad}</p>
      <p className={css.totalResult}>total: {total}</p>
      <p className={css.positivePercentageResult}>
        Positive Feedback: {positivePercentage}%
      </p>
    </div>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
