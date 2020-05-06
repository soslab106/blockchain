import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <h1>智能投資模擬平台</h1>
      <form>
        <div>
          <input type="number" />
        </div>
        <div>
          <select name="Strategy">
            <option value="Taipei">台北</option>　
            <option value="Taoyuan">桃園</option>　
            <option value="Hsinchu">新竹</option>　
            <option value="Miaoli">苗栗</option>
          </select>
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
