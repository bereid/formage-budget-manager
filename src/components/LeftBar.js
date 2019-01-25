import React from 'react';
import List from './List';
import Form from './Form';
import Avatar from 'react-avatar';

const styles = {
  leftBar: {
    background: 'rgb(51,51,51)',
    height: '100vh',
    width: '100%',
    boxShadow: '4px 0px 85px 0px rgba(0,0,0,0.75)',
    display: 'flex',
    flexDirection: 'column',
    minWidth: '200px'
  },
  list: {
    height: '50%',
    overflow: 'scroll',
  },
  logobar: {
    padding: '1em',
    borderTop: '1px solid white'
  },
  name: {
    color: 'white',
    display: 'block',
    padding: '1em',
    textAlign: 'center',
  },
  addnew: {
    margin: 'auto 0',
  },
  userinfo: {
    display: 'flex',
    justifyContent: 'center',
    padding: '1em',
    paddingBottom: '0',
  }
}

const LeftBar = ({ props }) => (
  <div style={styles.leftBar}>
    <div style={styles.list}>
      <List props={props} />
    </div>
    <div style={styles.logobar}>
      <div style={styles.addnew}>
        <Form style={styles.addnew} />
      </div>
      <div style={styles.userinfo}>
        <Avatar color={'#ffeaa7'} round={true} size={50} name={props.user.username} />
      </div>
      <p style={styles.name}>{props.user.username}</p>
    </div>
  </div>
);

export default LeftBar;