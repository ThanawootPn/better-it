import "./DataAnalytics.css";

import React, { Component } from "react";

import Chart from "./Chart";
import Axios from "axios";


let labelsValue = [];
let dataValue = [];
class DataAnalytics extends Component {
  constructor() {
    super();
    this.state = {
      chartData: {},
      testdata: null,
    };
  }
 
  componentWillMount() {
    // this.getchartData(); // this should be this.getChartData();
    this.getChartData();
  }

  getChartData() {
    
    Axios.get("http://localhost:3001/Entites/getChartData").then((res) => {
      //console.log(res.data);
      this.setState({ testdata: res.data });
      //console.log("++++++++++++++++");
      //console.log(this.state.testdata);
      labelsValue = this.state.testdata.map((user) => user.chart_name);
      dataValue = this.state.testdata.map((user) => user.chart_value);
      //console.log(labelsValue);
    });
    this.setState({
      chartData: {
        labels: labelsValue,
        datasets: [
          {
            label: "Population",
            data: dataValue,
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
              "rgba(255, 159, 64, 0.6)",
              "rgba(55, 99, 132, 0.6)",
            ],
          },
        ],
      },
    });
  }

  render() {
    return (
      <>
        <div className="form-phrase">
          <div className="head-analytics">
            <label className="head-text">Chart</label>
          </div>

          <div className="chart-control">
            
            <Chart
              chartData={this.state.chartData}
              location="Massachusetts"
              legendPosition="bottom"
            />
          </div>
        </div>
      </>
    );
  }
}

export default DataAnalytics;
