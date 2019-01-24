import React from 'react';
import DoughnutChartDemo from './components/Donut';
import ScrollWidget from './components/ScrollWidget';
import { Row, Col } from 'reactstrap';

const styles = {
  leftBar: {
    background: 'rgb(51,51,51)',
    height: '100vh',
    width: '100%',
    boxShadow: '4px 0px 85px 0px rgba(0,0,0,0.75)',
  }
}

const App = ({ props }) => (
  <Row>
    <Col sm="2"><div style={styles.leftBar}></div></Col>
    <Col sm="7"><DoughnutChartDemo budget={props} /></Col>
    <Col sm="3"><ScrollWidget budget={props} /></Col>
  </Row>
)

export default App;
