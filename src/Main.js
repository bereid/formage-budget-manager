import React from 'react';
import { Row, Col } from 'reactstrap';
import MainContent from './components/MainContent';
import ScrollWidget from './components/ScrollWidget';
import Progress from './components/Progressbar';
import LeftBar from './components/LeftBar';

const Main = ({ data, getData }) => {
  if (data.length === 0) {
    getData();
    return (
      <Progress />
    )
  } else {
    return (
      <Row>
        <Col sm="2"><LeftBar props={data[0]}/></Col>
        <Col sm="7"><MainContent budget={data[0]} /></Col>
        <Col sm="3"><ScrollWidget budget={data[0]} /></Col>
      </Row>
    )
  }
}

export default Main;
