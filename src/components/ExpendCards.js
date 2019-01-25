import React, { Component } from 'react';
import { Panel } from 'primereact/panel';
import 'primereact/resources/primereact.min.css';
import Progress from './Progressbar';

export class ExpendCards extends Component {

  render() {

    //filterezni az expendekre!!!

    return (
      <div>
        {this.props.budgetToRender.transactions.map((exp) => (
            <Panel header={exp.name} key={Math.random()}style={{ marginTop: '2em' }} toggleable={true}>
              {exp.amount}e Ft
            </Panel>
          ))}
      </div>
    )
  }
}


export default ExpendCards;