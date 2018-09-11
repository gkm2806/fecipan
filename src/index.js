import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './container/Home';
import Sobre from './container/Sobre';
import Votacao from './container/Votacao';
import Manage from './container/Manage';
import registerServiceWorker from './registerServiceWorker';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';



ReactDOM.render(
  <Router history={hashHistory}>
    <route path="/" component={App}>
      <IndexRoute component={Home} />
      <route path="/A2016" component={""} />
      <route path="/A2017" component={""} />
      <route path="/votacao" component={Votacao} />
      <route path="/sobre" component={Sobre} />
      <route path="/config" component={Manage} />
    </route>
  </Router>,
  document.getElementById('root'));
registerServiceWorker();
