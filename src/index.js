import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App';
import store from './state/appStore';

const mountElement = document.querySelector('main')
ReactDOM.render(<App store={store} />, mountElement)