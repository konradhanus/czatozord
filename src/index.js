import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store';

const store = configureStore();

const target = document.getElementById('root');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  target
)

registerServiceWorker();
