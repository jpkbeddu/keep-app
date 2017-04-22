import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import logo from './logo.svg';
import 'roboto-fontface';
import './App.css';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to Keep App</h2>
          </div>
          <p className="App-intro">
            This is a Google Keep clone app build using
            {' '}
            <code>create-react-app</code>
            .
          </p>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
