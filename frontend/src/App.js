import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home/index';
import Login from './components/pages/Login/index';
import Signup from './components/pages/Signup/index';
import Profile from './components/pages/Profile/index';

import './App.css';

function App() {
  return (
    <div className="App">
        <header className="App-header">
          <div>
              Divercity
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
            </ul>
          </nav>
        </header>
        <section>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
          </Switch>
        </section>
      </div>
  );
}

export default App;
