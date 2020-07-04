import React from 'react';
import ReactDOM from 'react-dom';
import Routing from './routing';
import 'antd/dist/antd.css';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import Reducer from './store/Reducer'

const store = createStore(Reducer, applyMiddleware(logger))
const App = () => (
  <Provider store={store}>
    <Routing />
  </Provider>
)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)