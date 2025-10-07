import './App.css';
import profilePic from './profile-pic.jpg';
import linkedinIcon from './linkedin.png';
import githubIcon from './github.png';
import emailIcon from './email.png';
import TextType from './TextType';

export default function App() {
  const toggleMenu = () => {
    const menuLinks = document.querySelector('.menu-links');
    menuLinks.classList.toggle('open');
  };

  return (
    <>
      <nav id="desktop-nav">
        <div className="logo">JENNIFER</div>
        <div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <div className="logo">JENNIFER</div>
        <div className="hamburger-menu">
          <div className="hamburger-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="menu-links">
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
            <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          </div>
        </div>
      </nav>
      <section id="profile">
        <div className="section__pic-container">
          <img src={profilePic} alt="Jennifer" />
        </div>
        <div className="section__text">
          <p className="section__text__p1">Hello, I'm</p>
          <h1 className="title">Jennifer</h1>
          <p className="section__text__p2">
            <TextType 
              text={["Designer", "Developer", "Love jennifer"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
            />
          </p>
          <div className="btn-container">
            <button
              className="btn btn-color-2"
              onClick={() => window.open('/assets/resume-example.pdf')}
            >
              Download CV
            </button>
            <button
              className="btn btn-color-1"
              onClick={() => window.location.href = '#contact'}
            >
              Contact Info
            </button>
          </div>
          <div id="socials-container">
            <img
              src={linkedinIcon}
              alt="My LinkedIn profile"
              className="icon"
              onClick={() => window.location.href = 'https://linkedin.com/'}
            />
            <img
              src={githubIcon}
              alt="My Github profile"
              className="icon"
              onClick={() => window.location.href = 'https://github.com/'}
            />
          </div>
        </div>
      </section>
      <section id="contact">
        <p className="section__text__p1">Get in Touch</p>
        <h1 className="title">Contact Me</h1>
        <div className="contact-info-upper-container">
          <div className="contact-info-container">
            <img
              src={emailIcon}
              alt="Email icon"
              className="icon contact-icon email-icon"
            />
            <p><a href="mailto:examplemail@gmail.com">Example@gmail.com</a></p>
          </div>
          <div className="contact-info-container">
            <img
              src={linkedinIcon}
              alt="LinkedIn icon"
              className="icon contact-icon"
            />
            <p><a href="https://www.linkedin.com">LinkedIn</a></p>
          </div>
        </div>
      </section>
      <footer>
        <nav>
          <div className="nav-links-container">
            <ul className="nav-links">
              <li><a href="#contact"></a></li>
            </ul>
          </div>
        </nav>
        <p>Copyright &#169; 2025 Jennifer. All Rights Reserved.</p>
      </footer>
    </>
  );
}