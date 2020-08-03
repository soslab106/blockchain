import React, { Component } from "react";
import * as d3 from "d3";

class Strategy extends Component {
  getData = () => {
    d3.csv(, function (data) {
      console.log(data);
    });
  };

  render() {
    this.getData()
    return (
      <select name="Strategy">
        <option value="Taipei">台北</option>　
        <option value="Taoyuan">桃園</option>　
        <option value="Hsinchu">新竹</option>　
        <option value="Miaoli">苗栗</option>
      </select>
    );
  }
}

export default Strategy;
