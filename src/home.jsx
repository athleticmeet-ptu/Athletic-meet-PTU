import React from "react";
import { useNavigate } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./home.css";

const apiUrl = import.meta.env.VITE_API_URL;


function Home() {
  const navigate = useNavigate();
  
  const handleLogout = async () => {
    await fetch(`${apiUrl}/logout`, { credentials: "include" });
    navigate("/");
  };

 const openInSameTab = (path) => {
  window.location.href = `https://ptu.gndecathletix.games${path}`;
};


  return (
    <div className="home-container">
      <header className="header">
        <nav className="navbarn">
          <h1 className="logo">26th IKGPTU Athletic Meet</h1>
          <ul className="nav-list">
            <button className="contact" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
              Contact
            </button>
            <li>
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <div className="hero">
        <h1>26th IKGPTU Athletic Meet</h1>
        <p>At Guru Nanak Dev Engineering College</p>
      </div>

      <section className="event-buttons">
        <h2>Select Your Event</h2>
        <div className="buttons-container">
          <button className="event-button" onClick={() => openInSameTab("/sportsApp")}>
            Male Track Events
          </button>
          <button className="event-button" onClick={() => openInSameTab("/female-sportsapp")}>
            Female Track Events
          </button>
          <button className="event-button" onClick={() => openInSameTab("/sportsApp-fields")}>
            Male Field Events
          </button>
          <button className="event-button" onClick={() => openInSameTab("/female-sportsapp-fields")}>
            Female Field Events
          </button>
          <button className="event-button" onClick={() => openInSameTab("/relayapp")}>
            Male Relay
          </button>
          <button className="event-button" onClick={() => openInSameTab("/female-relayapp")}>
            Female Relay
          </button>
        </div>
      </section>

      <section id="register" className="register-steps">
        <h2>How to Register</h2>
        <ul>
          <li><strong>Only the concerned sports teacher of the college can complete the registration process.</strong></li>
          <li>Students can register for two types of events: <strong>Track & Field and Relay.</strong></li>
          <li>Each Track & Field event allows a maximum of <strong>two students per event.</strong></li>
          <li>Relay events require exactly <strong>four students to register.</strong></li>
          <li><strong>Once the form is submitted, it will be locked and cannot be edited.</strong></li>
          <li>If the Form is skipped, the form remains open.</li>
          <li>A student can participate in a maximum of <strong>two events</strong> and <strong>one relay.</strong></li>
          <li>Uploading a valid ID card or a recent PTU mark sheet is <strong>mandatory.</strong></li>
          <li>The age of the athlete must be <strong>less than 25 years.</strong></li>
          <li>All athlete details must be correct and verifiable.</li>
          <li>For a better experience, <strong>registration should be done on a desktop or laptop.</strong></li>
        </ul>
      </section>

      <section id="contact" className="contact-section">
        <h2>Contact Us</h2>
        <p>If you have any queries, feel free to reach out to us:</p>
        <ul>
          <li>Email:<strong>athleticptu@gmail.com</strong></li>
          <li>Location: Guru Nanak Dev Engineering College, Ludhiana</li>
        </ul>
      </section>

     <section id="dev-team" className="dev-team">
          <h2>Meet the Developers</h2>
          <div className="dev-container">
            <div className="dev-card">
              <img src="/Aayush.webp" alt="Developer 1" />
              <h3>Aayush Kalia</h3>
              <p className="role">Full Stack Developer</p>
              <p className="branch">Computer Science &amp; Engineering</p>
              <div className="flex justify-center gap-4 mt-3">
                <a href="https://www.linkedin.com/in/aayush-kalia-1b52b825a/" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-2xl">
                  <FaLinkedin />
                </a>
                <a href= "https://github.com/aayush-kalia" target="_blank" rel="noopener noreferrer" className="text-gray-800 text-2xl">
                  <FaGithub />
                </a>
              </div>
            </div>
            <div className="dev-card">
              <img src="/abhijot.png" alt="Developer 2" />
              <h3>Abhijot Singh</h3>
              <p className="role">Full Stack Developer</p>
              <p className="branch">Computer Science &amp; Engineering</p>
              <div className="flex justify-center gap-4 mt-3">
                <a href="https://www.linkedin.com/in/abhijot-singh-680888287/" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-2xl">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/Abhijot01" target="_blank" rel="noopener noreferrer" className="text-gray-800 text-2xl">
                  <FaGithub />
                </a>
              </div>
            </div>
            <div className="dev-card">
              <img src="/simar.jpeg" alt="Developer 3" />
              <h3>Keshav Garg</h3>
              <p className="role">Full Stack Developer</p>
              <p className="branch">Computer Science &amp; Engineering</p>
              <div className="flex justify-center gap-4 mt-3">
                <a href="https://www.linkedin.com/in/keshav-garg-092748213/" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-2xl">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/binaryfetch" target="_blank" rel="noopener noreferrer" className="text-gray-800 text-2xl">
                  <FaGithub />
                </a>
              </div>
            </div>
            <div className="dev-card">
              <img src="/keshav.jpeg" alt="Developer 4" />
              <h3>Simarjot Singh</h3>
              <p className="role">Full Stack Developer</p>
              <p className="branch">Information Technology  &amp; Engineering</p>
              <div className="flex justify-center gap-4 mt-3">
                <a href="https://www.linkedin.com/in/simarjot-singh-a65b08261/" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-2xl">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/singhsimarjot13" target="_blank" rel="noopener noreferrer" className="text-gray-800 text-2xl">
                  <FaGithub />
                </a>
              </div>
            </div>
            <div className="dev-card">
              <img src="/gagan.jpeg" alt="Developer 5" />
              <h3>Gaganjot Kaur</h3>
              <p className="role">Content Writer</p>
              <p className="branch">Computer Science &amp; Engineering</p>
              <div className="flex justify-center gap-4 mt-3">
                <a href="https://www.linkedin.com/in/gaganjot-kaur-244439251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-2xl">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/gaganjot02" target="_blank" rel="noopener noreferrer" className="text-gray-800 text-2xl">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        </section>

      <footer className="footer">
        <p>
          Made by <a href="https://www.gndec.ac.in" target="_blank" rel="noopener noreferrer" >Genconians</a>, with ❤️ &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Home;
