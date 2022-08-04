const Header = ({ courseName }) => {
  return <h1>{courseName}</h1>;
};

const Part = ({ partName, numEx }) => {
  return (
    <p>
      {partName} {numEx}
    </p>
  );
};

const Content = ({ parts }) => {
  return (
    <>
      {parts.map(({ id, name, exercises }) => (
        <Part key={id} partName={name} numEx={exercises} />
      ))}
    </>
  );
};

const Total = ({ parts }) => {
  const total = parts.reduce((acc, { exercises }) => acc + exercises, 0);
  return <p><b>Total of {total} exercieses</b></p>;
};

const Course = ({ courses }) => {
  return (
    <div>
      {courses.map(({ id, name, parts }) => (
        <div key={id}>
          <Header courseName={name} />
          <Content parts={parts} />
          <Total parts={parts} />
        </div>
      ))}
    </div>
  );
};

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1,
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2,
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3,
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1,
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return (
    <div>
      <Course courses={courses} />
    </div>
  );
};

export default App;
