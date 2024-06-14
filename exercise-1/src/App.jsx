import Header from "./components/Header";
import Scores from "./components/Scores";
import { JAVA_RESULTS } from "./data";
import { PYTHON_RESULTS } from "./data";
import { ENGLISH_RESULTS } from "./data";
function App() {
  return (
    <>
      <Header batchName="Fake batch name"></Header>

      <main className="scores-container">
        <Scores courseName="HTML" courseResult={JAVA_RESULTS} ></Scores>
        <Scores courseName="PYTHON" courseResult={PYTHON_RESULTS} ></Scores>
        <Scores courseName="ENGLISH" courseResult={ENGLISH_RESULTS} ></Scores>
      </main>
    </>
  );
}

export default App;