import React from 'react';
import DoughnutChartDemo from './components/Donut';
import ScrollWidget from './components/ScrollWidget';
import { Row, Col } from 'reactstrap';
import List from './components/List';
import Progress from './components/Progressbar';
import Avatar from 'react-avatar';
import Form from './components/Form';

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
    display: 'inline',
    padding: '1em',
  },
  addnew: {
    margin: 'auto 0',
    marginBottom: '1em',
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
            <div style={styles.list}>
              <List props={data} />
            </div>
            <div style={styles.logobar}>
              <div style={styles.addnew}>
                <Form style={styles.addnew}/>
              </div>
              <Avatar color={'#08c5d1'} round={true} size={50} name={data.user.username} />
              <p style={styles.name}>{data.user.username}</p>
            </div>
          </div>
        </Col>
        <Col sm="7"><DoughnutChartDemo budget={data} /></Col>
        <Col sm="3"><ScrollWidget budget={data} /></Col>
      </Row>
    )
  }
}

export default App;
