import React from 'react';
import { ScrollPanel } from 'primereact/scrollpanel';
import Card from './Card';

const ScrollWidget = () => (
  <ScrollPanel style={{ width: '100%', height: '100vh'}}>
  <Card/>
  </ScrollPanel >
);

export default ScrollWidget;