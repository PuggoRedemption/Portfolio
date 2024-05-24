import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

// Styles
import './scss/App.scss';

export default function App() {
  return (
    <div className="main-wrapper">
      <Navbar />
      <main className="main-container">
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}