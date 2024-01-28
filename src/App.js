import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import AboutPage from "./pages/AboutPage";

const App = () => {
  return (
    <Router>
      <div>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<Home />} />
          <Route path="/service" element={<Home />} />
          <Route path="/contact" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
