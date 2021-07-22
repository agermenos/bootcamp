import React from 'react';
import Routes from './components/Routes'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Header from './components/Header';
import Voter from './components/Voter'
import Ballots from './components/Ballots';
import ElectionTool from './components/ElectionTool';
import RegTool from './components/RegTool';

function App() {
  return (
    
    <div className="App">
      <Router>
            <Route path='/:page' component={Header} />
            <Route exact path='/,home' component={Header} />
            <Route exact path='/voter' component={RegTool} />
            <Route exact path='/ballots' component={Ballots} />
            <Route exact path='/elections' component={ElectionTool} />
            </Router>
    </div>
  );
}

export default App;
