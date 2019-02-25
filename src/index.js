// @flow

import React from 'react';
import ReactDOM from 'react-dom';
// Styles
import 'grapesjs/dist/css/grapes.min.css';

import App from 'example/App';
import * as serviceWorker from 'example/serviceWorker';

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
