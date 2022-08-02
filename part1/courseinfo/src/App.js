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

const Content = ({ part1, part2, part3 }) => {
  return (
    <>
      <Part partName={part1.name} numEx={part1.exercises} />
      <Part partName={part2.name} numEx={part2.exercises} />
      <Part partName={part3.name} numEx={part3.exercises} />
    </>
  )
}

const Total = ({ parts }) => {
  const total = parts.reduce((acc, { exercises }) => acc + exercises, 0);
  console.log(total);
  return (
    <p>Number of exercises {total}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header courseName={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total parts={[part1, part2, part3]} />
    </div>
  )
}

export default App