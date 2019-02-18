import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'primereact/resources/themes/nova-dark/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Provider } from 'react-redux';
import store from './store';
import MainContainer from './MainContainer';
import { Router, Route } from 'react-router-dom';
import history from './history';
import App from './App';
import welcomePath from './utils/welcomePath';
import Login from './Login';
import Credits from './Credits';

ReactDOM.render(
  <Router history={history}>
    <Provider store={store}>
      <App>
        <Route exact path="/" component={welcomePath(MainContainer, Login)} />
        <Route path="/credits" component={Credits}/>
      </App>
    </Provider>
  </Router>,
  document.getElementById('root'));

serviceWorker.unregister();
