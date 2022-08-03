import { useState } from 'react';


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

  return (
    <div>
      <div>
        <h1>give feedback</h1>
        <button onClick={() => handleClick('good')}>good</button>
        <button onClick={() => handleClick('neutral')}>neutral</button>
        <button onClick={() => handleClick('bad')}>bad</button>
      </div>
      <div>
        <h2>statistics</h2>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {calculateTotal([good, neutral, bad])}</p>
        <p>average {calculateAverage([good, neutral, bad])}%</p>
        <p>positive {calculatePercentPos([good, neutral, bad])}%</p>
      </div>
    </div>
  )
}

export default App