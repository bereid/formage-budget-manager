import React from 'react';
import './Topbar.css'
import SelectMonths from './SelectMonths';
import Form from './Form';
import ReactAvatar from 'react-avatar';

const Topbar = () => (
  <div className={"topbar"}>
    <SelectMonths />
    <Form />
    <p style={{ color: "white" }}>Dévényi Tibor</p>
    <ReactAvatar color={'#ffeaa7'} round={true} size={40} name={"Dévényi Tibor"} />
  </div>
);

export default Topbar;