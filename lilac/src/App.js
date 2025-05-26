import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Intro from "./components/Intro";
import MainBlock from "./components/MainBlock";
import ProgrammingSubpage from "./components/ProgrammingSubpage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/Programming" element={<ProgrammingSubpage />} />
      </Routes>
    </Router>
  );
}

export default App;
