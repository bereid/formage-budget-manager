import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const mockdb = require('./mockdb');

ReactDOM.render(<App props={mockdb} />, document.getElementById('root'));

serviceWorker.unregister();
