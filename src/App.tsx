import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import './App.css'
import Navbar from './Layout/Navbar';

function App() {

  return (
    <div className="App">
    <Router>
      <div className="App">
      <Navbar/>
        <div className="content flex flex-row">
          <Routes>
            <Route path="/" element={<Home/>}>
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
    </div>
  );
}

export default App;
