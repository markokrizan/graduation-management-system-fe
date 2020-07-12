import React, { Component } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { createBrowserHistory as createHistory } from 'history'

import AppLayout from './containers/AppLayout';
import store from './store/Store';

import 'fontsource-roboto';

const history = createHistory();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
            <AppLayout history={history} />
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
