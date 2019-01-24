import React from 'react';
import './App.css';
import DoughnutChartDemo from './components/Donut';

const App = ({ props }) => (
  <DoughnutChartDemo budget={props}></DoughnutChartDemo>
)

export default App;
