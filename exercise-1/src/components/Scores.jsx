function Scores({ courseName }, courseResult) {
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
          {courseResult.map((index) => {
            key = index;
            <tr>
              <td>{courseResult.firstName}</td>
              <td>{courseResult.lastName}</td>
              <td>{courseResult.score}</td>
            </tr>;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Scores;
