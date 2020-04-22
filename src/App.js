import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

// style
import './assets/sass/index.scss';

// components
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import Error from './components/Error/Error';
import ProjectDetails from './components/projects/ProjectDetails';
import SigneIn from './components/auth/SigneIn';
import SigneUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Dashboard}/>
          <Route exact path='/projects/:id' component={ProjectDetails}/>
          <Route exact path='/signin' component={SigneIn}/>
          <Route exact path='/signup' component={SigneUp}/>
          <Route exact path='/create' component={CreateProject}/>
          <Route path='*' component={Error}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
