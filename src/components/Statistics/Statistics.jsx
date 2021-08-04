import Notification from "../Notification";
import "./Statistics.scss";

import PropTypes from "prop-types";

const Statistics = (props) => {
  const { good, neutral, bad, total, positivePercentage } = props;

  const markupStatistic = (
    <div className="Statistics">
      <h2 className="Statistics__title">Statistics</h2>
      <ul className="Statistics__list">
        <li className="Statistics__item">Good: {good}</li>
        <li className="Statistics__item">Neutral: {neutral}</li>
        <li className="Statistics__item">Bad: {bad}</li>
        <li className="Statistics__item">Total: {total}</li>
        <li className="Statistics__item">
          Positive feedback: {positivePercentage}%
        </li>
      </ul>
    </div>
  );

  return total > 0 ? (
    markupStatistic
  ) : (
    <Notification message="No feedback given" />
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};

export default Statistics;
