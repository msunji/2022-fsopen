const Header = ({ courseName }) => {
  return (
    <h1>{courseName}</h1>
  )
}

const Part = ({ partName, numEx }) => {
  return (
    <p>{partName} {numEx}</p>
  )
}

const Content = ({ parts }) => {
  return (
    <>
      <Part partName={parts[0].name} numEx={parts[0].exercises} />
      <Part partName={parts[1].name} numEx={parts[1].exercises} />
      <Part partName={parts[2].name} numEx={parts[2].exercises} />
    </>
  )
}

const Total = ({ parts }) => {
  const total = parts.reduce((acc, { exercises }) => acc + exercises, 0);
  return (
    <p>Number of exercises {total}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header courseName={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App