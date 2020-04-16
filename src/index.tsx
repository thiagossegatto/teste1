import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DefaultLayout from 'pages/_layouts';
import { Provider } from 'react-redux';
import store from 'store';
import { Router } from 'react-router-dom';
import history from 'routes/history';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <DefaultLayout />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
