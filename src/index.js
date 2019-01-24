import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';

const mockdb = require('./mockdb');

ReactDOM.render(<App props={mockdb} />, document.getElementById('root'));

serviceWorker.unregister();
