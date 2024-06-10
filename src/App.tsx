// import components from project;
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

// import external 
import MediaQuery from "react-responsive";
import Favicon from "react-favicon";

// Declare Breakpoints
// const breakpoints = {
//   desktop: '(min-width: 1025px)',
//   tablet: '(min-width: 768px) and (max-width: 1024px)',
//   phone: '(max-width: 768px)'
// };

// Styles
import './scss/App.scss';

// Main Page
export default function App() {
  return (
    // Separate the Navbar from other components.
    <div className="main-wrapper">
      {/* Favicon for tab icon */}
      <Favicon url="/Thumbnail.jpg" />

      {/* Navbar outside main container */}
      <Navbar />

      {/* Main container for content to the right of navbar */}
      <main className="main-container">

        {/* Menu toggle that hides when screen is too small */}
        <MediaQuery query="(max-width: 766px)">
          <div className="menu-toggle">
            <img src="/Menu.png" alt="menu-toggle"/>
          </div>
        </MediaQuery>

        {/* Initial about statement */}
        <About />

        {/* Project Section */}
        <div className="project-title">
          <h1>Projects</h1>
        </div>
        <Projects />

        {/* Contact Form */}
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