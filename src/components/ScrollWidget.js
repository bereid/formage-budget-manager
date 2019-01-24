import React from 'react';
import { ScrollPanel } from 'primereact/scrollpanel';
import Card from './Card';

const ScrollWidget = ({ budget }) => (
  <ScrollPanel style={{ width: '100%', height: '100vh'}}>
  <Card budgetToRender={budget}/>
  </ScrollPanel >
);

export default ScrollWidget;