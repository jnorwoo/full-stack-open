const Header = (props) => {
  const course = props.title;

  return (
    <h1>{course}</h1>
  )
}

const Total = (props) => {
  const exercises = props.exercises;
  let total = 0;
  exercises.forEach(exercise => {
    total += exercise
  });

  return (
    <p>
      Number of exercises {total}
    </p>
  );
}

const Content = (props) => {
  const exercises = props.exercises;
  const parts = props.parts;

  return (
    <>
      {parts.map((parts, index) => (
        <p key={index}>{parts} {exercises[index]}</p>
      ))}
    </>
  );
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
      <Header title={course} />
      <Content parts={[part1, part2, part3]} exercises={[exercises1, exercises2, exercises3]} />
      <Total exercises={[exercises1, exercises2, exercises3]} />
    </div>
  );
}

export default App;
