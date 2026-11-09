import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/lou7776" target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/lucious-lokko/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon/></a>
        {/* TODO: replace with your real email address */}
        <a href="mailto:Lucious7776@gmail.com" aria-label="Email"><EmailIcon/></a>
      </div>
      {/* TODO: replace "Your Name" with your name */}
      <p>© {new Date().getFullYear()} Lucious Lokko</p>
      {/* <p>A portfolio designed & built by <a href="https://github.com/yujisatojr/react-portfolio-template" target="_blank" rel="noreferrer">Yuji Sato</a> with 💜</p> */}
    </footer>
  );
}

export default Footer;