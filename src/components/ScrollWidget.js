import React from 'react';
import { ScrollPanel } from 'primereact/scrollpanel';
import IncomeCards from './IncomeCards';
import ExpendCards from './ExpendCards';

const ScrollWidget = ({ budget }) => (
  <ScrollPanel style={{ width: '100%', height: '100vh'}}>
  <IncomeCards budgetToRender={budget}/>
  <ExpendCards budgetToRender={budget}/>
  </ScrollPanel >
);

export default ScrollWidget;