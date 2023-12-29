import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Inicio from './components/pages/inicio';

function App() {
  return (
    <Router>
      <Inicio />
    </Router>
  );
}

export default App;

