import React from 'react';
import './App.css';
import{BrowserRouter as Router, Route} from 'react-router-dom';
import Navigation from './components/Navigation';
import Cards from './components/Cards';

function App() {
  return (
    <>
      <Navigation/>
      <Cards/>
    </>
  );
}

export default App;
