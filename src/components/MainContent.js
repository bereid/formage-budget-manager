import React from 'react';
import DoughnutChartDemo from './Donut';
import CompareMonths from './CompareMonths';
import Summary from './Summary';

const styles = {
  grid: {
    overflow: 'scroll',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    paddingTop: '1em',
  }
}

const MainContent = ({ budget }) => (
  <div style={styles.grid}>
    <DoughnutChartDemo budget={budget} />
    <CompareMonths budget={budget}/>
  </div>
);

export default MainContent;