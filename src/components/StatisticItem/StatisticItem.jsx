import "./StatisticItem.scss";

import PropTypes from "prop-types";

const StatisticItem = (props) => {
  const { good, neutral, bad, total, positivePercentage } = props;

  return (
    <>
      <li className="Statistics__item">Good: {good}</li>
      <li className="Statistics__item">Neutral: {neutral}</li>
      <li className="Statistics__item">Bad: {bad}</li>
      <li className="Statistics__item">Total: {total}</li>
      <li className="Statistics__item">
        Positive feedback: {positivePercentage}%
      </li>
    </>
  );
};

StatisticItem.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};

export default StatisticItem;
