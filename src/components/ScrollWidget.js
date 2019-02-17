import React from 'react';
import { ScrollPanel } from 'primereact/scrollpanel';
import Switcher from './Switcher';

const styles = {
  scrollpanel: {
    width: '25%',
    height: '100%',
    paddingRight: '1em',
    paddingTop: '1em',
    paddingLeft: '1em',
  }
}

const ScrollWidget = ({ budget }) => (
  <div style={styles.scrollpanel}>
    <Switcher props={budget} />
  </div>
);

export default ScrollWidget;