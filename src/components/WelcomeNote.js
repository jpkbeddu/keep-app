import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
  margin: 20,
  padding: '40px 20px',
  textAlign: 'center'
};

const WelcomeNote = () => (
  <div>
    <Paper style={style} zDepth={1} rounded={false}>
      <h2>Welcome to Keep App</h2>
      <p>
        This is a Google Keep clone app build using
        {' '}
        <code>create-react-app</code>
        .
      </p>
    </Paper>
  </div>
);

export default WelcomeNote;
