import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

// style
import './assets/sass/index.scss';

// components
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
      </div>
    </Router>
  );
}

export default App;
