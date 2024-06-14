function Scores({
  courseName,
  courseResult: [{ firstName, lastName, score }],
}) {
  return (
    <div className="scores">
      <h1>{courseName}</h1>

      <table>
        <thead>
          <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {courseResult.map(() => {
            <tr>
              <td>{firstName}</td>
              <td>{lastName}</td>
              <td>{score}</td>
            </tr>;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Scores;
