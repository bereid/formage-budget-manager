import React, { Component } from 'react';
import { Panel } from 'primereact/panel';
import 'primereact/resources/primereact.min.css';
import Progress from './Progressbar';

export class IncomeCards extends Component {

  render() {


    if (this.props.budgetToRender === undefined) {
      return (
        <Progress />
      )
    } else {
      console.log(this.props.budgetToRender);
      const { user } = this.props.budgetToRender;

      return (
        <div>
          {user.transactions.january2019.income.map((inc) => (
            <Panel header={inc.name} key={Math.random()}style={{ marginTop: '2em' }} toggleable={true}>
              {inc.amount}e Ft
            </Panel>
          ))}
        </div>
      )
    }
  }
}


export default IncomeCards;