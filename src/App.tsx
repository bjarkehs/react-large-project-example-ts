import * as React from 'react';

import UsersOverview from './scenes/UsersOverview';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Welcome to React
        </h1>
        <UsersOverview />
      </div>
    );
  }
}

export default App;
