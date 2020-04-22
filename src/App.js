import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

// style
import './assets/sass/index.scss';

// components
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import Error from './components/Error/Error';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Dashboard}/>
          <Route path='*' component={Error}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
