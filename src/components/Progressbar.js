import React, { Component } from 'react';
import { ProgressBar } from 'primereact/progressbar';

class Progress extends Component {

  constructor() {
    super();
    this.state = {
      value1: 0,
      value2: 50
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      let val = this.state.value1;
      val += Math.floor(Math.random() * 10) + 1;

      this.setState({
        value1: val
      });
    }, 2000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }

  render() {
    return (
      <div className="content-section implementation">
        <ProgressBar mode="indeterminate" style={{ height: '6px' }}></ProgressBar>
      </div>
    );
  }
}

export default Progress;