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
    
    // filterezni az egyszer előfordulóra!!!
    
    return (
      <ListGroup flush>
        {this.props.props.transactions.map(month => (
          <ListGroupItem style={styles.list} tag="a" href="#">{month.date}</ListGroupItem>
        ))}
      </ListGroup>
    );
  }
}