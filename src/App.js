import React, { useState, useEffect } from "react";
import "./App.css";
import * as d3 from "d3";

function App() {
  const [data, setData] = useState([]);
  const [strategy, setStrategy] = useState("AssociationStock.csv");
  const [date, setDate] = useState("2020-04-14");
  const [amount, setAmount] = useState();

  const renderAmount = (amount) => {
    console.log(amount.target.value);
  };

  const renderStrategy = (selected_strategy) => {
    setAmount(selected_strategy.target.value);
  };

  const renderDate = (selected_date) => {
    console.log(selected_date);
  };

  useEffect(() => {
    d3.csv(`/csv/${strategy}`).then((data) => {
      let itemList = [];
      data.map((item) => {
        if (item.Date === date.replace(/-/g, "")) {
          itemList.push(item);
        }
      });
      setData(itemList);
    });
  }, [strategy]);

  return (
    <div>
      <h1 className="center">智能投資模擬平台</h1>
      <form className="center">
        金額：
        <input type="number" onInput={renderAmount} />
        <select name="strategy" value={strategy} onChange={renderStrategy}>
          <option value="AssociationStock.csv">方案一</option>　
          <option value="PatternStock.csv">方案三</option>　
          <option value="SBStock.csv">方案二</option>
        </select>
        <button>模擬</button>
      </form>
      <div className="center">
        <h1>結果</h1>
        <table>
          <tr>
            <th>名稱</th>
            <th>股票代號</th>
            <th>In weight</th>
            <th>period rate</th>
            <th>today rate</th>
          </tr>
          {data.map((each) => {
            return (
              <tr>
                <td align="center">{each.name}</td>
                <td align="center">{each.code}</td>
                <td align="center">{each.in_weight}</td>
                <td align="center">{each.period_ret}</td>
                <td align="center">{each.today_weight}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default App;
