import React from 'react';
import MainContent from './components/MainContent';
import ScrollWidget from './components/ScrollWidget';
import Progress from './components/Progressbar';
import Topbar from './components/Topbar';

const styles = {
  main: {
    display: 'flex',
  },
}

const Main = ({ data, getData }) => {
  if (data.length === 0) {
    getData();
    return (
      <Progress />
    )
  } else {
    return (
      <div>
        <Topbar />
        <div style={styles.main}>
          <MainContent budget={data[0]} />
          <ScrollWidget budget={data[0]} />
        </div>
      </div>
    )
  }
}

export default Main;
