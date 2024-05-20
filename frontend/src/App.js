import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/main';
import ProjectBack from './pages/projectsback';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/projectback" element={<ProjectBack />} />
      </Routes>
    </Router>
  );
}

export default App;
