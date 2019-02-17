import React from 'react';
import './Topbar.css'
import SelectMonths from './SelectMonths';
import Form from './Form';
import UserInfo from './UserInfo';
import FromageIcon from './FromageIcon';

const Topbar = () => (
  <div className={"topbar"}>
    <div className={"header-selects"}>
      <SelectMonths />
      <Form />
    </div>
    <FromageIcon />
    <UserInfo />
  </div>
);

export default Topbar;