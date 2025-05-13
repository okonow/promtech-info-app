import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import Home from './pages/Home';
import Map from './pages/Map';
import ContactsDir from './pages/ContactsDir';
import Profile from './pages/Profile';
import Docs from './pages/Docs';
import './styles/styles.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <TopBar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/map" element={<Map />} />
              <Route path="/contacts" element={<ContactsDir />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/docs" element={<Docs />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
