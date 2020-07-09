import React from 'react';
import ReactDOM from 'react-dom';
import Routing from './routing';
import { BrowserRouter as Router ,useHistory} from 'react-router-dom';
import 'moment/locale/th'
import 'antd/dist/antd.css';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import Reducer from './store/Reducer'

const store = createStore(Reducer, applyMiddleware(logger))

const App = () => (
  <Provider store={store}>
    <Router>
      <Routing />
    </Router>
  </Provider>
)

ReactDOM.render(<App />,
  document.getElementById('root')
)