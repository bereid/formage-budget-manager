import React from 'react';
import List from './components/List';
import Form from './components/Form';
import Avatar from 'react-avatar';
import DoughnutChartDemo from './components/Donut';
import ScrollWidget from './components/ScrollWidget';
import { Row, Col } from 'reactstrap';
import Progress from './components/Progressbar';
import LeftBar from './components/LeftBar';

const styles = {
  leftBar: {
    background: 'rgb(51,51,51)',
    height: '100vh',
    width: '100%',
    boxShadow: '4px 0px 85px 0px rgba(0,0,0,0.75)',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'scroll',
  },
  list: {
    height: '50%',
  },
  logobar: {
    padding: '1em',
    borderTop: '1px solid white'
  },
  name: {
    color: 'white',
    display: 'block',
    padding: '1em',
  },
  addnew: {
    margin: 'auto 0',
    marginBottom: '1em',
  },
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
        <Col sm="2"><LeftBar props={data[0]}/></Col>
        <Col sm="7"><DoughnutChartDemo budget={data[0]} /></Col>
        <Col sm="3"><ScrollWidget budget={data[0]} /></Col>
      </Row>
    )
  }
}

export default App;
