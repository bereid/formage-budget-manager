import React from 'react';
import './App.css';
import DoughnutChartDemo from './components/Donut';
import ScrollWidget from './components/ScrollWidget';
import { Row, Col } from 'reactstrap';



const App = ({ props }) => (
  <div>
    <Row>
          <Col xs="6" sm="2"><ScrollWidget /></Col>
          <Col xs="6" sm="6"><DoughnutChartDemo budget={props} /></Col>
          <Col sm="4"><ScrollWidget /></Col>
        </Row>
    
    
  </div>
)

export default App;
