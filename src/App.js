import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { orange300, darkBlack } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import 'roboto-fontface';
import './App.css';
import Appbar from './components/Appbar';
import WelcomeNote from './components/WelcomeNote';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const muiTheme = getMuiTheme({
  appBar: {
    color: orange300,
    textColor: darkBlack
  }
});

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
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <Appbar logged={isLogged} />
          <WelcomeNote />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
