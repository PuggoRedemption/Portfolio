// import React from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

// Styles
import './scss/App.scss';

// Main Page
export default function App() {
  return (
    // Separate the Navbar from other components.
    <div className="main-wrapper">
      <Navbar />
      <main className="main-container">
        <About />
        <Projects />
        <div className="contact-form">
          <form name="contact" method="POST">
            <input type="hidden" name="form-name" value="contact" />
            <h1>Email Me</h1>
            <h3>Full Name</h3>
            <input type="text" name="Full Name" required></input>
            <h3>Email</h3>
            <input type="email" name="email" required></input>
            <h3>Message</h3>
            <textarea rows={5} cols={60} name="message" autoComplete="off" required></textarea>
            <button type="submit">Send Email</button>
          </form>
        </div>
      </main>
    </div>
  );
}