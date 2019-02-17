import React, { Component } from 'react';
import { Chart } from 'primereact/chart';

const styles = {
  chart: {
    minWidth: '300px',
    width: '50%',
  }
}

class CompareMonths extends Component {

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

    let lastMonthExpenses = {
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

    transactions.forEach(element => {
      if (element.category === 'Utilities' && element.type === 'expense') {
        lastMonthExpenses.utility += element.amount;
      } else if (element.category === 'Car' && element.type === 'expense') {
        lastMonthExpenses.car += element.amount;
      } else if (element.category === 'Home/Rent' && element.type === 'expense') {
        lastMonthExpenses.rent += element.amount;
      } else if (element.category === 'Insurance/Medical' && element.type === 'expense') {
        lastMonthExpenses.medical += element.amount;
      } else if (element.category === 'Personal' && element.type === 'expense') {
        lastMonthExpenses.personal += element.amount;
      } else if (element.category === 'Misc/One-time' && element.type === 'expense') {
        lastMonthExpenses.misc += element.amount;
      } else if (element.category === 'Food/Groceries' && element.type === 'expense') {
        lastMonthExpenses.food += element.amount;
      } else if (element.category === 'Entertainment' && element.type === 'expense') {
        lastMonthExpenses.entertainment += element.amount;
      }
    });


    const data = {
      labels: Object.keys(lastMonthExpenses),
      datasets: [
        {
          label: 'january',
          backgroundColor: '#fdcb6e"',
          data: Object.values(lastMonthExpenses)
        },
        {
          label: 'february',
          backgroundColor: '#ffeaa7',
          data: Object.values(expenses),
        }
      ]
    };

    return (
        <Chart style={styles.chart} type="bar" data={data} />
    )
  }
}

export default CompareMonths;