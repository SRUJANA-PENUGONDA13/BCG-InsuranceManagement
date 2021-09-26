import React from "react";
import { Bar } from "react-chartjs-2";

class Chart extends React.Component {
  state = {
    dataValues: {
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
      ],
      datasets: [
        {
          label: "No.of Policies",
          data: this.props.months,
        },
      ],
    },
  };

  render() {
    return (
      <center>
        <Bar className="barChart" data={this.state.dataValues} />
      </center>
    );
  }
}

export default Chart;
