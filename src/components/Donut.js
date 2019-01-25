import React, { Component } from 'react';
import { Chart } from 'primereact/chart';

const styles = {
  chart: {
    minWidth: '500px',
    paddingTop: '5em',
  }
}

class DoughnutChartDemo extends Component {

  render() {

    const { transactions } = this.props.budget;

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

    transactions.forEach(element => {
      if (element.category === 'Utilities' && element.type === 'expense') {
        expenses.utility += element.amount;
      } else if (element.category === 'Car' && element.type === 'expense') {
        expenses.car += element.amount;
      } else if (element.category === 'Home/Rent' && element.type === 'expense') {
        expenses.rent += element.amount;
      } else if (element.category === 'Insurance/Medical' && element.type === 'expense') {
        expenses.medical += element.amount;
      } else if (element.category === 'Personal' && element.type === 'expense') {
        expenses.personal += element.amount;
      } else if (element.category === 'Misc/One-time' && element.type === 'expense') {
        expenses.misc += element.amount;
      } else if (element.category === 'Food/Groceries' && element.type === 'expense') {
        expenses.food += element.amount;
      } else if (element.category === 'Entertainment' && element.type === 'expense') {
        expenses.entertainment += element.amount;
      }
    });

    const colors = [
      "#fdcb6e", "#e17055", "#00b894", "#00cec9", "#6c5ce7", "#0984e3", "#2d3436", "#b2bec3"
    ];

    const hoovers = [
      "#ffeaa7", "#fab1a0", "#55efc4", "#81ecec", "#a29bfe", "#74b9ff", "#636e72", "#dfe6e9"
    ]

    const data = {
      labels: Object.keys(expenses),
      datasets: [
        {
          data: Object.values(expenses),
          backgroundColor: colors,
          hoverBackgroundColor: hoovers,
        }]
    };

    return (
      <Chart style={styles.chart} type="doughnut" data={data} />
    )
  }
}

export default DoughnutChartDemo;