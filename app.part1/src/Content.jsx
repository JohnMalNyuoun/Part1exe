const Content = ({ part1, exercises1, part2, exercises2, part3, exercises3 }) => {
  return (
    <div>
      <p>
        {part1.name} {exercises1}
      </p>
      <p>
        {part2.name} {exercises2}
      </p>
      <p>
        {part3.name} {exercises3}
      </p>
    </div>
  )
}

export default Content
