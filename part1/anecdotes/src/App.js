import { useState } from 'react';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ];
   
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 });

  const voteAnecdote = (selectedAnecdote) => {
    setPoints({ ...points, [selectedAnecdote]: points[selectedAnecdote] + 1})
  }

  const getRandomAnecdote = () => {
    let randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  }

  const mostVotes = Object.keys(points).reduce((curr, next) => points[curr] > points[next] ? curr : next);

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>
        <blockquote style={{borderLeft: '6px solid black', padding: '1rem'}}>
          <p>"{anecdotes[selected]}"</p>
        </blockquote>
        <p>This anecdote has {points[selected]} votes</p>
      </div>
      <button onClick={() => voteAnecdote(selected)}>vote</button>
      <button onClick={() => getRandomAnecdote()}>show random anecdote</button>

      <h1>Anecdote with most votes</h1>
      <div>
        <blockquote style={{borderLeft: '6px solid black', padding: '1rem'}}>
          <p>"{anecdotes[mostVotes]}"</p>
        </blockquote>
        <p>This anecdote has {points[mostVotes]} votes</p>
      </div>
    </div>
  )
}

export default App;