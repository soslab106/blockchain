import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Strategy from './Components/Strategy'

function App() {
  return (
    <div>
      <h1>智能投資模擬平台</h1>
      <form>
        <div>
          <input type="number" />
        </div>
        <div>
          <Strategy/>
        </div>
        <div>
          <button>模擬</button>
        </div>
      </form>
      <div>
        <h1>結果</h1>
      </div>
    </div>
  );
}

export default App;
