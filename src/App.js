import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
 } from 'react-router-dom';
 import Navbar from './Navbar.js';
 import Search from './Search.js';
 import History from './History.js';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route 
            exact
            path ="/search"
            component={Search}
            />
          
          <Route
            exact
            path="/history"
            component={History}
            />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
