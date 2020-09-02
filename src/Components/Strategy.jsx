import React, { Component } from "react";
import { CsvToHtmlTable } from "react-csv-to-table";
// import * as d3 from "d3";

class Strategy extends Component {
  // getData = () => {
  //   d3.csv(
  //     "https://raw.githubusercontent.com/soslab106/blockchain/master/src/csv/AssociationStock.csv",
  //     function (data) {
  //       console.log(data);
  //     }
  //   );
  // };

  render() {
    return (
      <>
        {this.props.data}
      </>
    );
  }
}

export default Strategy;
