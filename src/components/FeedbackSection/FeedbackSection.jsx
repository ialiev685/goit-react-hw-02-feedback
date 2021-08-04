import React, { Component } from "react";

import Control from "../Control";

class FeedbackSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      good: 2,
      neutral: 1,
      bad: 1,
    };
  }
  countTotalFeedback = () => {
    const values = Object.values(this.state);
    const totalFeedback = values.reduce((acc, value) => acc + value, 0);
    return totalFeedback;
  };

  countPositiveFeedbackPercentage = () => {
    const values = Object.values(this.state);
    const { good: countGood } = this.state;
    const totalFeedback = values.reduce((acc, value) => acc + value, 0);

    return Math.ceil((countGood / totalFeedback) * 100);
  };

  addFeedback = (event) => {
    console.log(event.target);
  };

  render() {
    return (
      <section>
        <h2>Please leave feedback</h2>
        <Control
          nameBtn={["good", "neutral", "bad"]}
          clickBtn={this.addFeedback}
        />
        <h2>Statistics</h2>
        <ul>
          <li>Good: {this.state.good}</li>
          <li>Neutral: {this.state.neutral}</li>
          <li>Bad: {this.state.bad}</li>
          <li>Total: {this.countTotalFeedback()}</li>
          <li>Positive feedback: {this.countPositiveFeedbackPercentage()}%</li>
        </ul>
      </section>
    );
  }
}

export default FeedbackSection;
