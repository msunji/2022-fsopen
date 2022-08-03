import { useState } from 'react';

const Button = ({ feedbackType, handleClick}) => {
  return (
    <button onClick={() => handleClick(feedbackType)}>{feedbackType}</button>
  )
}

const StatisticLine = ({ label, value }) => {
  return (
    <tr>
      <td>{label}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({ feedback }) => {
  const { good, neutral, bad } = feedback;

  const calculateTotal = (feedback) => {
    return feedback.reduce((acc, total) => acc + total)
  }
  const calculateAverage = (feedback) => {
    const total = calculateTotal(feedback);
    return ((good * 1) + (neutral * 0) + (bad * -1)) / total * 100;
  }
  const calculatePercentPos = (feedback) => {
    const total = calculateTotal(feedback);
    return (good / total) * 100;
  }

  if (calculateTotal([good, neutral, bad]) === 0) {
    return (
      <div>
        <p>You can use this app by pressing any of the buttons shown above.</p>
      </div>
    )
  }
  return (
    <table>
      <tbody>
        <StatisticLine label="good" value={good} />
        <StatisticLine label="neutral" value={neutral} />
        <StatisticLine label="bad" value={bad} />
        <StatisticLine label="all" value={calculateTotal([good, neutral, bad])} />
        <StatisticLine label="average" value={`${calculateAverage([good, neutral, bad])}%`} />
        <StatisticLine label="positive" value={`${calculatePercentPos([good, neutral, bad])}%`} />
      </tbody>
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClick = (feedbackType) => {
    switch (feedbackType) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        console.log('Not a valid option');
    }
  }

  return (
    <div>
      <div>
        <h1>give feedback</h1>
        <Button handleClick={() => handleClick('good')} feedbackType="good" />
        <Button handleClick={() => handleClick('neutral')} feedbackType="neutral" />
        <Button handleClick={() => handleClick('bad')} feedbackType="bad" />
      </div>
      <div>
        <h2>statistics</h2>
        <Statistics feedback={{ good, neutral, bad }} />
      </div>
    </div>
  )
}

export default App