import "./StatisticItem.scss";

import PropTypes from "prop-types";

const StatisticItem = ({ text, value }) => {
  return (
    <>
      <li className="Statistics__item">
        {text}: {value}
        {text === "positivePercentage" ? "%" : ""}
      </li>
    </>
  );
};

StatisticItem.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default StatisticItem;
