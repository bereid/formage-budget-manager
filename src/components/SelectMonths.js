import React, { Component } from 'react';
import { MultiSelect } from 'primereact/multiselect';
import './SelectMonths.css'

export class SelectMonths extends Component {

  constructor() {
    super();
    this.state = {
      months: [],
    };
  }


  render() {
    const months = [
      { label: '2019 Januar', value: '2019 Januar' },
      { label: '2019 Februar', value: '2019 Februar' },
      { label: '2018 December', value: '2018 December' },
      { label: '2018 November', value: '2018 November' },
      { label: '2018 October', value: '2018 October' },
      { label: '2018 September', value: '2018 September' },
    ];

    return (
      <MultiSelect
        value={this.state.months}
        options={months}
        onChange={(e) => this.setState({ months: e.value })}
        fixedPlaceholder={true}
        style={{ marginRight: '1em', width: '12em', minWidth: '8em', maxWidth: '16em', background: "rgba(0, 0, 0, 0.3)", height: "40px", border: "0px", outline: 'none' }}
        filter={true}
        placeholder="Select months"
      />
    );
  }
}

export default SelectMonths;