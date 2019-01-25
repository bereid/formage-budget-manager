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

    let months = [];
    let splittedMonths = [];
    let joinedMonths = [];
    let filteredMonths = [];
    this.props.props.transactions.forEach(action => months.push(action.date));
    months.forEach(month => splittedMonths.push(month.split(' ')));
    splittedMonths.forEach(splitMonth => {splitMonth.shift();});
    splittedMonths.forEach(shifted => {joinedMonths.push(shifted.join(' '));});
    joinedMonths.forEach(filtered => {if (filteredMonths.indexOf(filtered) === -1) {filteredMonths.push(filtered);}});

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