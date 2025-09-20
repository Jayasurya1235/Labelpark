import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LabelCard from "./components/LabelCard";
import About from "./components/About";
import Product from "./components/Product";
import Services from "./components/Services";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<LabelCard />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
