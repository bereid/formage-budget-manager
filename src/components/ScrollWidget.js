import React from 'react';
import { ScrollPanel } from 'primereact/scrollpanel';
import Switcher from './Switcher';

const ScrollWidget = ({ budget }) => (
  <ScrollPanel style={{ width: '100%', height: '100vh' }}>
    <Switcher props={budget} />
  </ScrollPanel >
);

export default ScrollWidget;