import React from 'react';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import './App.css';

import ConnectedToDO from './container/ToDo';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <ConnectedToDO />
        </div>
      </Provider>
    );
  }
}

export default App;
