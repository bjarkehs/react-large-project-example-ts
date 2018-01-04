import * as React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import Users from './scenes/Users';
import NavigationBar from './components/NavigationBar';

import logo from './assets/graphics/tmp.png';

import './App.scss';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <h1>Welcome to React</h1>
        <img src={logo} />

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

      </React.Fragment>
    );
  }
}

export default App;
