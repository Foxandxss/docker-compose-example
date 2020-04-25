import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Fib from './Fib';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Fib} />
      </div>
    </Router>
  );
}

export default App;
