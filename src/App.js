import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import 'roboto-fontface';
import './App.css';
import Appbar from './components/Appbar';
import WelcomeNote from './components/WelcomeNote';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogged: false
    };
  }
  render() {
    const { isLogged } = this.state;
    return (
      <MuiThemeProvider>
        <div>
          <Appbar logged={isLogged} />
          <WelcomeNote />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
