import React from 'react';
import Routes from './components/Routes'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from "react-router-dom";
import Header from './components/Header';
import ElectionTool from './components/ElectionTool';
import RegTool from './components/RegTool';
import Home from './components/Home';
import Registration from './components/Registration';
import VoteTool from './components/VoteTool';

function App() {
  return (
    
    <div className="App">
      <Router>
            <Route path='/:page' component={Header} />
            <Route exact path='/'>
              <Redirect to="/home"/>
            </Route>
            <Route exact path='/home' component={Home} />
            <Route exact path='/voters' component={RegTool} />
            <Route exact path='/register' component={Registration} />
            <Route exact path='/vote' component={VoteTool} />
            <Route exact path='/elections' component={ElectionTool} />
            </Router>
    </div>
  );
}

export default App;

