import Header from "./components/Header";
import Scores from "./components/Scores";
import { JAVA_RESULTS } from "./data";

function App() {
  return (
    <>
      <Header batchName="Fake batch name" />

      <main className="scores-container">
        <Scores courseName="HTML" courseResult={JAVA_RESULTS} />
      </main>
    </>
  );
}

export default App;