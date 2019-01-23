import React, { Component } from 'react';
import { Chart } from 'primereact/chart';

class DoughnutChartDemo extends Component {

  render() {
    const data = {
      labels: ['A', 'B', 'C'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ]
        }]
    };

    return (
      <div className="content-section implementation">
        <Chart type="doughnut" data={data} />
        {console.log(this.props.props)}
      </div>
    )
  }
}

export default DoughnutChartDemo;