import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Intro from "./components/Intro/Intro";
import MainBlock from "./components/MainBlock/MainBlock";
import ProgrammingSubpage from "./components/Subpages/ProgrammingSubpage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/orchidea_lilac" element={<Intro />} />
        <Route path="/Programming" element={<ProgrammingSubpage />} />
      </Routes>
    </Router>
  );
}

export default App;
