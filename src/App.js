import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
 } from 'react-router-dom';

import NewsListContainer from '../src/containers/NewsListContainer';
import Navbar from '../src/components/Navbar'
import HistoryListContainer from '../src/containers/HistoryListContainer';
import Home from './Home';
 
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Home />
        <Switch>
          <Route 
            exact
            path ="/search"
            component={NewsListContainer}
            />
          
          <Route
            exact
            path="/history"
            component={HistoryListContainer}
            />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
