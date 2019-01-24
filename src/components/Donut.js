import React, { Component } from 'react';
import { Chart } from 'primereact/chart';

class DoughnutChartDemo extends Component {

  render() {
    const { user } = this.props.budget;

    let expenses = {
      utility: 0,
      rent: 0,
      car: 0,
      food: 0,
      personal: 0,
      medical: 0,
      entertainment: 0,
      misc: 0,
    }
    
    let dataToLabels = Object.keys(user.transactions.january2019);
    dataToLabels.splice(0, 1);
    
    Object.values(user.transactions.january2019).forEach(value => {
      value.forEach(element => {
        if (element.category === 'Utilities') {
          expenses.utility += element.amount;
        } else if (element.category === 'Car') {
           expenses.car += element.amount;
        } else if (element.category === 'Home/Rent') {
          expenses.rent += element.amount;
        } else if (element.category === 'Insurance/Medical') {
          expenses.medical += element.amount;
        } else if (element.category === 'Personal') {
          expenses.personal += element.amount;
        } else if (element.category === 'Misc/One-time') {
          expenses.misc += element.amount;
        } else if (element.category === 'Food/Groceries') {
          expenses.food += element.amount;
        }
      });
    });

    const colors = [
      "#fdcb6e", "#e17055", "#00b894", "#00cec9", "#6c5ce7", "#0984e3", "#2d3436", "#b2bec3"
    ];

    const hoovers = [
      "#ffeaa7", "#fab1a0", "#55efc4", "#81ecec", "#a29bfe", "#74b9ff", "#636e72", "#dfe6e9"
    ]

    const data = {
      labels: dataToLabels,
      datasets: [
        {
          data: Object.values(expenses),
          backgroundColor: colors,
          hoverBackgroundColor: hoovers,
        }]
    };

    return (
      <div className="content-section implementation">
        <Chart type="doughnut" data={data} />
      </div>
    )
  }
}

export default DoughnutChartDemo;