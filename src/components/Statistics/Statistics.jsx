import Notification from "../Notification";
import StatisticItem from "../StatisticItem";
import "./Statistics.scss";

const Statistics = (props) => {
  const { good, neutral, bad, total, positivePercentage } = props;

  const markupStatistic = (
    <div className="Statistics">
      <h2 className="Statistics__title">Statistics</h2>
      <ul className="Statistics__list">
        <StatisticItem
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      </ul>
    </div>
  );

  return total > 0 ? (
    markupStatistic
  ) : (
    <Notification message="No feedback given" />
  );
};

export default Statistics;
