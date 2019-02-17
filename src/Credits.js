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
      <div className="infobox soma">
        <div className="somaphotoplace"></div>
        <div></div>
        <div></div>
      </div>
      <div className="appinfo">
        <p>
          This apppcation made by Soma Kanyasi and Daniel Berei for the Hackaton organized by Green Fox Academy.
          After the one-day competition we planned to improve the application.
          Fromage Budget Manager is a great tool to track your expenses and incomes. FBM is an SPA with a clean and minimalist UI.
        </p>
        <hr />
        <p>Technologies:</p>
        <p>MongoDB</p>
        <p>NodeJS</p>
        <p>Express</p>
        <p>ReactJS + Redux</p>
        <p>ChartJS</p>
        <hr />
        <p><a href="https://github.com/bereid/fromage-budget-manager" target="_blank" rel="noopener noreferrer">Find the project on GitHub</a></p>
        <img src="https://image.flaticon.com/icons/svg/25/25231.svg"></img>
      </div>
      <div className="infobox dani">
        <div className="daniphotoplace"></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
);

export default Credits;