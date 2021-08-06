import React, { Component } from "react";

import Section from "./Section";
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
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
    const name = event.target.name;

    this.setState((prevState) => ({ [name]: prevState[name] + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const btnList = Object.keys(this.state);

    return (
      <Section title="Please leave feedback">
        <FeedbackOptions options={btnList} onLeaveFeedback={this.addFeedback} />

        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </Section>
    );
  }
}

export default App;
