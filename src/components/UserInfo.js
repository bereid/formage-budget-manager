import React from 'react';
import ReactAvatar from 'react-avatar';

const styles = {
  userinfo: {
    display: 'flex',
    height: '100%',
    alignItems: 'center',
  },
  username: {
    color: "white",
    marginBottom: '0',
    fontWeight: '400',
  },
  avatar: {
    marginLeft: 10,
  }
}

const UserInfo = () => (
  <div style={styles.userinfo}>
    <p style={styles.username}>Dévényi Tibor</p>
    <ReactAvatar color={'#ffeaa7'} round={true} size={40} name={"Dévényi Tibor"} style={styles.avatar}/>
  </div>
);

export default UserInfo;