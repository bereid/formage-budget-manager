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

    const { transactions } = this.props.props

    let dates = []
    let newdates = [];
    let filteredMonths = [];

    transactions.forEach(trans => {
      dates.push(trans.date);
    });

    dates.forEach(date => {
      newdates.push(date.substring(0, 7))
    });

    newdates.forEach(filtered => {if (filteredMonths.indexOf(filtered) === -1) {filteredMonths.push(filtered);}});

    console.log(filteredMonths);

    return (
      <ListGroup flush>
        {filteredMonths.map(month => (
          <ListGroupItem style={styles.list} tag="a" href="#">{month}</ListGroupItem>
        ))}
      </ListGroup>
    );
  }
}