import React, { useState } from 'react';

const Button = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <p>
      {text}: {value}
    </p>
  );
};

const Statistics = ({ good, neutral, bad }) => {

  const totalFeedback = good + neutral + bad;

  const averageScore = totalFeedback === 0 ? 0 : (good - bad) / totalFeedback;

  const positivePercentage = totalFeedback === 0 ? 0 : (good / totalFeedback) * 100;

  return (
    <div>
      <h2>statistics</h2>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="total" value={totalFeedback} />
      <StatisticLine text="average" value={averageScore.toFixed(2)} />
      <StatisticLine text="positive feedback" value={positivePercentage.toFixed(2) + '%'} />
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [feedbackGiven, setFeedbackGiven] = useState(false);

  const handleFeedback = (type) => {
    if (type === 'good') {
      setGood(good + 1);
    } else if (type === 'neutral') {
      setNeutral(neutral + 1);
    } else if (type === 'bad') {
      setBad(bad + 1);
    }
    setFeedbackGiven(true);
  };

  return (
    <div>
      <h1>Give feedback</h1>
      <Button text="good" handleClick={() => handleFeedback('good')} />
      <Button text="neutral" handleClick={() => handleFeedback('neutral')} />
      <Button text="bad" handleClick={() => handleFeedback('bad')} />

      {feedbackGiven ? (
        <Statistics good={good} neutral={neutral} bad={bad} />
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};

export default App;
