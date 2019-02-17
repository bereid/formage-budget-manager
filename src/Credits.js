import React from 'react';
import './Credits.css';
import logo from './components/FromageIcon.png'

const Credits = () => (
  <div>
    <div className="header">
      <div className="logo">
        <img src={logo}></img>
        <p>Budget Manager</p>
      </div>
    </div>
    <div className="content">
      <div className="infobox soma"></div>
      <div className="appinfo">
        <p>
        This application made by Soma Kanyasi and Daniel Berei for the Hackaton organized by Green Fox Academy. 
        Fromage Budget Manager is a great tool to track your expenses and incomes. FBM is an SPA with a clean and minimalist UI.
        </p>
      </div>
      <div className="infobox dani"></div>
    </div>
  </div>
);

export default Credits;