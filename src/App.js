import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./Home";
// import AboutPage from "./pages/AboutPage";
// import Service from "./pages/Service";
import Header from "./components/Header/Header";
// import ProjectPage from "./pages/Projects";
// import ContactUs from "./pages/Contact";
import AboutPage from "./pages/about/AboutPage";
import Service from "./pages/services/Service";
import ProjectPage from "./pages/projects/Projects";
import Home from "./pages/home/Home";
import ContactUs from "./pages/contact/Contact";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
