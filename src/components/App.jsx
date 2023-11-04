import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notofocation';
import { GlobalStyle } from 'GlobalStyle';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

// const Button = ({ label, onUpdate }) => {
//   return <button onClick={() => onUpdate(label.toLowerCase())}>{label}</button>;
// };

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };

  // updateGood = () => {
  //   this.setState(prevState => {
  //     return {
  //       neutral: prevState.neutral + 1,
  //     };
  //   });
  // };

  // updateNeutral = () => {
  //   this.setState(prevState => {
  //     return {
  //       neutral: prevState.neutral + 1,
  //     };
  //   });
  // };

  // updateBad = () => {
  //   this.setState(prevState => {
  //     return {
  //       bad: prevState.bad + 1,
  //     };
  //   });
  // };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return Math.round((good * 100) / total);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const options = ['good', 'neutral', 'bad'];

    return (
      <div>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
          {/* <Button label="Good" value={good} onUpdate={this.updateGood} />
          <Button label="Neutral" value={neutral} onUpdate={this.updateNeutral} />
          <Button label="Bad" value={bad} onUpdate={this.updateBad} /> */}
        </Section>
        <Section title="Statistics">
          {total > 0 && (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          )}
          {total < 1 && <Notification message="There is no feedback" />}
        </Section>
        <GlobalStyle />
      </div>
    );
  }
}
