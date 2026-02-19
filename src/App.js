import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Success from "./Success";

function App() {
  return (
    <Router basename="/gradball/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/yes" element={<Success />} />
      </Routes>
    </Router>
  );
}

export default App;
