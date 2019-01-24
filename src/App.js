import React from 'react';
import DoughnutChartDemo from './components/Donut';
import ScrollWidget from './components/ScrollWidget';
import { Row, Col } from 'reactstrap';
import List from './components/List';
import Progress from './components/Progressbar';

const styles = {
  leftBar: {
    background: 'rgb(51,51,51)',
    height: '100vh',
    width: '100%',
    boxShadow: '4px 0px 85px 0px rgba(0,0,0,0.75)',
  }
}

const App = ({ data, getData }) => {
  if (data.length === 0) {
    getData();
    return (
      <Progress />
    )
  } else {
    return (
      <Row>
        <Col sm="2">
          <div style={styles.leftBar}>
            <List props={data} />
          </div>
        </Col>
        <Col sm="7"><DoughnutChartDemo budget={data} /></Col>
        <Col sm="3"><ScrollWidget budget={data} /></Col>
      </Row>
    )
  }
}

export default App;
