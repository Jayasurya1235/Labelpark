import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LabelCard from "./components/LabelCard";
import About from "./components/About";
import Product from "./components/Product";
import Services from "./components/Services";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        {/* Routing setup */}
        <Routes>
          <Route path="/" element={<LabelCard />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
