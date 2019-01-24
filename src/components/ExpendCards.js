import React, { Component } from 'react';
import { Panel } from 'primereact/panel';
import 'primereact/resources/primereact.min.css';
import Progress from './Progressbar';

export class ExpendCards extends Component {

  render() {


    if (this.props.budgetToRender === undefined) {
      return (
        <Progress />
      )
    } else {

      const { user } = this.props.budgetToRender;
      let expenses = Object.values(user.transactions.january2019);
      expenses.splice(0, 1);
      console.log(expenses)
      let newExpenses = [];
      for (let i = 0; i < expenses.length; i++) {
        for (let j = 0; j < expenses[i].length; j++) {
          newExpenses.push(expenses[i][j]);
        }
      }


      return (
        <div>
          {newExpenses.map(ex => (
            <Panel header={ex.name} style={{ marginTop: '2em' }} toggleable={true}>
              {ex.amount}e Ft
          </Panel>
          ))}
        </div>
      )
    }
  }
}


export default ExpendCards;