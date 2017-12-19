import * as React from 'react';
import { Route, Switch } from 'react-router';

import Users from './scenes/Users';
import NavigationBar from './components/NavigationBar';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <NavigationBar />
          <h1>Welcome to React</h1>
          <Switch>
            <Route path="/users" component={Users} />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
