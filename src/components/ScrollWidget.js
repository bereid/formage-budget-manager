import React from 'react';
import { ScrollPanel } from 'primereact/scrollpanel';
import Switcher from './Switcher';

const styles = {
  scrollpanel: {
    width: '25%',
    height: '740px',
    padding: '1em',
    top: '60px',
    overflow: 'scroll',
  }
}

const ScrollWidget = ({ budget }) => (
  <div style={styles.scrollpanel}>
    <Switcher props={budget} />
  </div>
);

export default ScrollWidget;