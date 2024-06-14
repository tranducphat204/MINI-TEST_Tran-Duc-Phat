import Header from "./components/Header";
import Scores from "./components/Scores";
import { JAVA_RESULTS } from "./data";
import { PYTHON_RESULTS } from "./data";
import { ENGLISH_RESULTS } from "./data";
function App() {
  return (
    <>
      <Header batchName="Fake batch name" />

      <main className="scores-container">
        <Scores courseName="HTML" courseResult={JAVA_RESULTS} />
        <Scores courseName="PYTHON" courseResult={PYTHON_RESULTS} />
        <Scores courseName="ENGLISH" courseResult={ENGLISH_RESULTS} />
      </main>
    </>
  );
}

export default App;