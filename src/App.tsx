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
      <Favicon url="/Thumbnail.jpg" />
      <Navbar />
      <main className="main-container">
        <MediaQuery query="(max-width: 766px)">
          <div className="menu-toggle">
            <img src="/Menu.png" alt="menu-toggle"/>
          </div>
        </MediaQuery>
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