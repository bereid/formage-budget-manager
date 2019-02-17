import React from 'react';
import Switcher from './Switcher';

const styles = {
  scrollpanel: {
    width: '25%',
    minWidth: '250px',
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