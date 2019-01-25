import React from 'react';
import DoughnutChartDemo from './Donut';
import CompareMonths from './CompareMonths';
import Summary from './Summary';

const styles = {
  grid: {
    height: '100vh',
    overflow: 'scroll',
    display: 'flex',
    flexWrap: 'wrap',
    paddingTop: '1em',
  }
}

const MainContent = ({ budget }) => (
  <div style={styles.grid}>
    <Summary data={budget}/>
    <DoughnutChartDemo budget={budget} />
    {/* <CompareMonths data={budget}/> */}
  </div>
);

export default MainContent;