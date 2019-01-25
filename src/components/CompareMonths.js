import React, { Component } from 'react';
import { Chart } from 'primereact/chart';

const styles = {
  chart: {
    minWidth: '700px'
  }
}

class CompareMonths extends Component {

  render() {

    const { user } = this.props.data

    let expensesThisMonth = {
      utility: 0,
      rent: 0,
      car: 0,
      food: 0,
      personal: 0,
      medical: 0,
      entertainment: 0,
      misc: 0,
    }

    let expensesLastMonth = {
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
          expensesThisMonth.utility += element.amount;
        } else if (element.category === 'Car') {
          expensesThisMonth.car += element.amount;
        } else if (element.category === 'Home/Rent') {
          expensesThisMonth.rent += element.amount;
        } else if (element.category === 'Insurance/Medical') {
          expensesThisMonth.medical += element.amount;
        } else if (element.category === 'Personal') {
          expensesThisMonth.personal += element.amount;
        } else if (element.category === 'Misc/One-time') {
          expensesThisMonth.misc += element.amount;
        } else if (element.category === 'Food/Groceries') {
          expensesThisMonth.food += element.amount;
        }
      });
    });

    Object.values(user.transactions.december2018).forEach(value => {
      value.forEach(element => {
        if (element.category === 'Utilities') {
          expensesLastMonth.utility += element.amount;
        } else if (element.category === 'Car') {
          expensesLastMonth.car += element.amount;
        } else if (element.category === 'Home/Rent') {
          expensesLastMonth.rent += element.amount;
        } else if (element.category === 'Insurance/Medical') {
          expensesLastMonth.medical += element.amount;
        } else if (element.category === 'Personal') {
          expensesLastMonth.personal += element.amount;
        } else if (element.category === 'Misc/One-time') {
          expensesLastMonth.misc += element.amount;
        } else if (element.category === 'Food/Groceries') {
          expensesLastMonth.food += element.amount;
        }
      });
    });


    const data = {
      labels: dataToLabels,
      datasets: [
        {
          label: Object.keys(user.transactions)[1],
          backgroundColor: '#fdcb6e"',
          data: Object.values(expensesLastMonth)
        },
        {
          label: Object.keys(user.transactions)[2],
          backgroundColor: '#ffeaa7',
          data: Object.values(expensesThisMonth),
        }
      ]
    };

    return (
      <div>
        <Chart style={styles.chart} type="bar" data={data} />
      </div>
    )
  }
}

export default CompareMonths;