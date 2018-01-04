import * as React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import Users from './scenes/Users';
import NavigationBar from './components/NavigationBar';

import './App.scss';

class App extends React.Component {
  render() {
    return (
      <>
        <NavigationBar />
        <h1>Welcome to React</h1>

        <Switch>
          <Route path="/users" component={Users} />
          <Route
            render={() => (
              <div>
                <Link to="/users">Users</Link>
              </div>
            )}
          />
        </Switch>
      </>
    );
  }
}

export default App;
