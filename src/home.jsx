import React from "react";
import { useNavigate } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./home.css";

const apiUrl = import.meta.env.VITE_API_URL;
const developers = [
  {
    name: "Aayush Kalia",
    role: "Full Stack Developer",
    branch: "Computer Science & Engineering",
    img: "/Aayush.webp",
    linkedin: "https://www.linkedin.com/in/aayush-kalia-1b52b825a/",
    github: "https://github.com/aayush-kalia",
  },
  {
    name: "Abhijot Singh",
    role: "Full Stack Developer",
    branch: "Computer Science & Engineering",
    img: "/abhijot.png",
    linkedin: "https://www.linkedin.com/in/abhijot-singh-680888287/",
    github: "https://github.com/Abhijot01",
  },
  {
    name: "Keshav Garg",
    role: "Full Stack Developer",
    branch: "Computer Science & Engineering",
    img: "/simar.jpeg",
    linkedin: "https://www.linkedin.com/in/keshav-garg-092748213/",
    github: "https://github.com/binaryfetch",
  },
  {
    name: "Simarjot Singh",
    role: "Full Stack Developer",
    branch: "Information Technology & Engineering",
    img: "/keshav.jpeg",
    linkedin: "https://www.linkedin.com/in/simarjot-singh-a65b08261/",
    github: "https://github.com/singhsimarjot13",
  },
  {
    name: "Gaganjot Kaur",
    role: "Content Writer",
    branch: "Computer Science & Engineering",
    img: "/gagan.jpeg",
    linkedin: "https://www.linkedin.com/in/gaganjot-kaur-244439251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    github: "https://github.com/gaganjot02",
  },
];

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
        <nav className="navbar">
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
          <li>Students can register for two types of events: <strong></strong>Track & Field and Relay.</strong></li>
          <li>Each Track & Field event allows a maximum of <strong>two students per event.</strong></li>
          <li>Relay events require exactly <strong>four students to register.</strong></li>
          <li><strong>Once the form is submitted, it will be locked and cannot be edited.</strong></li>
          <li>If the Form is skipped, the form remains open.</li>
          <li>A student can participate in a maximum of <strong>two events</strong> and <strong>one relay.</strong></li>
          <li>Uploading a valid ID card or a recent PTU mark sheet is <strong>mandatory.</strong></li>
          <li>The age of the athlete must be <strong>less than 25 years.</strong></li>
          <li>All athlete details must be correct and verifiable.</li>
        </ul>
      </section>

      <section id="contact" className="contact-section">
        <h2>Contact Us</h2>
        <p>If you have any queries, feel free to reach out to us:</p>
        <ul>
          <li>Email: athleticptu@gmail.com</li>
          <li>Location: Guru Nanak Dev Engineering College, Ludhiana</li>
        </ul>
      </section>

      <section id="dev-team" className="dev-team text-center">
        <h2>Meet the Developers</h2>
        <div className="dev-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {developers.map((dev, index) => (
            <div key={index} className="dev-card bg-white shadow-lg rounded-2xl p-4 text-center">
              <img src={dev.img} alt={dev.name} className="w-24 h-24 mx-auto rounded-full mb-4" />
              <h3 className="text-xl font-semibold">{dev.name}</h3>
              <p className="text-gray-600">{dev.role}</p>
              <p className="text-gray-500 text-sm">{dev.branch}</p>
              <div className="flex justify-center gap-8 space-x-6 mt-3">
                <a href={dev.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 text-2xl">
                  <FaLinkedin />
                </a>
                <a href={dev.github} target="_blank" rel="noopener noreferrer" className="text-gray-800 text-2xl">
                  <FaGithub />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>
          Made by Genconians, with ❤️ &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Home;
