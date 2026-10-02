const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Content = (props) => {
  return (
    <div>
      <p>{props.subject1} {props.units1}</p>
      <p>{props.subject2} {props.units2}</p>
      <p>{props.subject3} {props.units3}</p>
    </div>
  )
}

const Total = (props) => {
  return <p>Total units: {props.total}</p>
}


const App = () => {
  const course = 'Information Technology'
  const subject1 = 'CSIT340 - Industry Elective'
  const units1 = 3
  const subject2 = 'CSIT327 - Information Technology'
  const units2 = 3
  const subject3 = 'IT365 - Data Analytics 1'
  const units3 = 3

  return (
    <div>
      <Header course={course} />
      <Content
        subject1={subject1} units1={units1}
        subject2={subject2} units2={units2}
        subject3={subject3} units3={units3}
      />
      <Total total={units1 + units2 + units3} />
    </div>
  )
}

export default App