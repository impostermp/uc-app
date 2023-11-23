import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Tasks from './components/Tasks';
import Aside from './components/Aside';
import './App.css'
function App() {
  return (
    <Router>
      <div className="App">
        <nav className='menu'>
          <ul className='generic-info'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/tasks">Tasks</Link></li>
          </ul>
        </nav>
        <div className='main-content'>
        <Aside/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
        </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App;
