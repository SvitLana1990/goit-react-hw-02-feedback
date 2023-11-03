import { Component } from 'react';

const Button = ({ label, onUpdate }) => {
  return <button onClick={onUpdate}>{label}</button>;
};

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  updateNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  updateBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

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

    return (
      <div>
        <h1>Please leave feedback</h1>
        <Button label="Good" value={good} onUpdate={this.updateGood} />
        <Button label="Neutral" value={neutral} onUpdate={this.updateNeutral} />
        <Button label="Bad" value={bad} onUpdate={this.updateBad} />
        <p>Statistics</p>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        {this.countTotalFeedback() > 0 && (
          <p>Total: {this.countTotalFeedback()}</p>
        )}
        {good > 0 && (
          <p>Positive Feedback: {this.countPositiveFeedbackPercentage()}%</p>
        )}
      </div>
    );
  }
}
