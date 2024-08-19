import { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  /*   state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }; */

  const countTotalFeedback = () => {
    // const { good, neutral, bad } = this.state;
    setGood(0);
    setNeutral(0);
    setBad(0);
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    // const { good } = this.state;
    setGood(0);
    const total = countTotalFeedback();
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };
  const handleClick = type => {
    /*   this.setState(prevState => ({
      ...prevState,
      [type]: prevState[type] + 1,
    })); */
    prevState => prevState + 1;
  };

  // const { good, neutral, bad } = this.state;
  setGood(0);
  setNeutral(0);
  setBad(0);
  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();
  const options = ['good', 'neutral', 'bad'];

  return (
    <>
      <Section title="Please leave a feedback">
        <FeedbackOptions options={options} onLeaveFeedback={this.handleClick} />
      </Section>

      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          // <p>There is no feedback yet.</p>
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};
