import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const styles = {
  list: {
    background: 'none',
    color: 'white',
    width: '100%',
    minWidth: '200px'
  }
}

export default class List extends React.Component {
  render() {
    let months = Object.keys(this.props.props.user.transactions);

    return (
      <ListGroup flush>
        {months.map(month => (
          <ListGroupItem style={styles.list} tag="a" href="#">{month}</ListGroupItem>
        ))}
      </ListGroup>
    );
  }
}