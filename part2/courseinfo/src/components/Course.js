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

export default Course;