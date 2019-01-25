import React, { Component } from 'react';
import { Panel } from 'primereact/panel';
import 'primereact/resources/primereact.min.css';
import Progress from './Progressbar';

export class IncomeCards extends Component {

  render() {

    //filterezni az incomra!!!

    return (
      <div>
        {this.props.budgetToRender.transactions.map((inc) => (
            <Panel header={inc.name} key={Math.random()}style={{ marginTop: '2em' }} toggleable={true}>
              {inc.amount}e Ft
            </Panel>
          ))}
      </div>
    )
  }
}


export default IncomeCards;