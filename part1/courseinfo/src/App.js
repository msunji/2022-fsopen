const Header = ({ courseName }) => {
  return (
    <h1>{courseName}</h1>
  )
}

const Content = ({ part1, part2, part3 }) => {
  return (
    <>
      <p>{part1[0]} {part1[1]}</p>
      <p>{part2[0]} {part2[1]}</p>
      <p>{part3[0]} {part3[1]}</p>
    </>
  )
}

const Total = ({ exercises }) => {
  const total = exercises.reduce((acc, total) => acc + total);
  return (
    <p>Number of exercises {total}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header courseName={course} />
      <Content part1={[part1, exercises1]} part2={[part2, exercises2]} part3={[part3, exercises3]} />
      <Total exercises={[exercises1, exercises2, exercises3]} />
    </div>
  )
}

export default App