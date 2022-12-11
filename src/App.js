import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Services from "./components/Services";



//All styles import
import "./style/App.scss";
import "./style/header.scss";
import "./style/home.scss";
import "./style/footer.scss";
import "./style/contact.scss";
import "./style/mediaquery.scss";



function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/services" element={<Services/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
