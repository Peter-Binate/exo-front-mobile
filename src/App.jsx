import React from 'react';
import MainContent from './components/main-content/MainContent';
import ServiceRecap from './components/services/services-recap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pourboire from './components/Pourboire/Pourboire.jsx';
import Employee from './components/Employee/Employee';
import './styles/main.scss';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/serviceRecap" element={<ServiceRecap />} />
          <Route path="/pourboire" element={<Pourboire />} />
          <Route path="/employee" element={<Employee />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
