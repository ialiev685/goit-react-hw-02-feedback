import Notification from "../Notification";
import StatisticItem from "../StatisticItem";
import "./Statistics.scss";

import PropTypes from "prop-types";

const Statistics = (props) => {
  const keys = Object.keys(props);

  const markupStatistic = (
    <div className="Statistics">
      <h2 className="Statistics__title">Statistics</h2>
      <ul className="Statistics__list">
        {[...keys].map((el) => (
          <StatisticItem key={el} text={el} value={props[el]} />
        ))}
      </ul>
    </div>
  );

  return props.total > 0 ? (
    markupStatistic
  ) : (
    <Notification message="No feedback given" />
  );
};

Statistics.propTypes = {
  props: PropTypes.objectOf(PropTypes.number),
};

export default Statistics;
