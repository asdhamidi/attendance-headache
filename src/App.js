import { useState } from "react";
import "./App.css";

function App() {
  const [ans, setAns] = useState(0);
  const [present, setPresent] = useState(0);
  const [total, setTotal] = useState(null);

  function calc() {
    let p = present,
      t = total,
      ans = 0;

    while ((p / t) * 100 < 75) {
      p++;
      t++;
      ans++;
    }

    setAns(ans);
  }
  return (
    <div className="App">
      <header className="title">
        <h1>Attendance Headache</h1>
        <h2 className="subtitle">Count days till 75%</h2>
      </header>
      <main>
        <label>
          Days Present
          <input
            field="present"
            onChange={(e) => setPresent(e.target.value)}
            type="number"
          />
        </label>
        <label>
          Total Days
          <input
            field="total"
            onChange={(e) => setTotal(e.target.value)}
            type="number"
          />
        </label>
        <button onClick={calc}>Calculate</button>
        <div className="result">
          {ans !== null &&
            "You need to attend " + ans + " more days to reach 75%."}
        </div>
      </main>
    </div>
  );
}

export default App;
