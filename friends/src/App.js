import React from 'react';
import { Route } from 'react-router-dom';

import PrivateRoute from './services/PrivateRoute';

import Login from './components/Login';
import Friends from './components/Friends';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Login} />
      <Route exact path="/login" component={Login} />
      <PrivateRoute exact path="/friends" component={Friends} />
    </div>
  );
}

export default App;
