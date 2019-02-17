import React from 'react';
import { ScrollPanel } from 'primereact/scrollpanel';
import Switcher from './Switcher';

const ScrollWidget = ({ budget }) => (
  <ScrollPanel style={{ width: '25%', height: '100vh', padding: '1em', top: '60px' }}>
    <Switcher props={budget} />
  </ScrollPanel >
);

export default ScrollWidget;