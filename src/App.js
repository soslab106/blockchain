import React, { useState, useEffect } from "react";
import "./App.css";
import * as d3 from "d3";

// metamask 密碼： soslab*2
//brain twice quarter mirror empower method pole elegant now parent cabbage hidden

function App() {
  const [data, setData] = useState([]);
  const [strategy, setStrategy] = useState("AssociationStock.csv");
  const [date, setDate] = useState("2020-04-14");
  const [price, setPrice] = useState();
  const [weightList, setWeightList] = useState([]);

  const renderPrice = (price) => {
    console.log(price.target.value);
  };

  const handleStrategy = (selected_strategy) => {
    setStrategy(selected_strategy.target.value);
  };

  const renderDate = (selected_date) => {
    console.log(selected_date);
  };

  useEffect(() => {
    d3.csv(`/csv/${strategy}`).then((data) => {
      let itemList = [];
      let weightList = [];
      data.map((item) => {
        if (item.Date === date.replace(/-/g, "")) {
          itemList.push(item);
          weightList.push(parseFloat(item.in_weight) * 100);
        }
      });
      setWeightList(weightList);
      setData(itemList);
    });
  }, [strategy]);

  return (
    <div className="center">
      <h1>智能投資模擬平台</h1>
      <div className="center">
        <h2>請投資人輸入資料</h2>
        <span>0x1456041D425fD2E15bCEAb32f94ad92300600b14</span>
      </div>
      <div>
        投資金額：
        <input type="number" value={price} onInput={renderPrice} />
        <button>確認</button>
      </div>
      <div>
        <select name="strategy" value={strategy} onChange={handleStrategy}>
          <option value="AssociationStock.csv">方案一</option>　
          <option value="PatternStock.csv">方案二</option>　
          <option value="SBStock.csv">方案三</option>
        </select>
        <button>模擬</button>
      </div>

      <div>
        <h1>結果</h1>
        <table>
          <thead>
            <tr>
              <th>名稱</th>
              <th>股票代號</th>
              <th>In weight</th>
              <th>period rate</th>
              <th>today rate</th>
            </tr>
          </thead>
          <tbody>
            {data.map((each) => {
              return (
                <tr>
                  <td align="center">{each.name}</td>
                  <td align="center">{each.code}</td>
                  <td align="center">
                    {(parseFloat(each.in_weight) * 100).toFixed(5)}
                  </td>
                  <td align="center">{each.period_ret}</td>
                  <td align="center">{each.today_weight}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
