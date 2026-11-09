import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import mock11 from '../assets/images/mock11.png';
import mock12 from '../assets/images/mock12.png';
import mock13 from '../assets/images/mock13.png';
import mock14 from '../assets/images/mock14.png';
import mock15 from '../assets/images/mock15.png';

import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            {/* TODO: replace YOUR-USERNAME and the repo names in each GitHub link */}
            <div className="project">
                <a href="https://phillywaterr.netlify.app/" target="_blank" rel="noreferrer"><img src={mock11} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://phillywaterr.netlify.app/" target="_blank" rel="noreferrer"><h2>Two Street Water Ice Website</h2></a>
                <p>Responsive marketing website for a Philiadelphia water ice stand</p>
                <div className="project-footer">
                    <p className="tech-stack">HTML · CSS · Flexbox</p>
                    <div className="project-links">
                        <a className="project-btn" href="https://phillywaterr.netlify.app/" target="_blank" rel="noreferrer">Live ↗</a>
                        <a className="project-btn" href="https://github.com/lou7776/Philly-Water-Website/tree/main" target="_blank" rel="noreferrer">GitHub ↗</a>
                    </div>
                </div>
            </div>
            <div className="project">
                <a href="https://jwliii.netlify.app/" target="_blank" rel="noreferrer"><img src={mock12} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://jwliii.netlify.app/" target="_blank" rel="noreferrer"><h2>JWLI Website</h2></a>
                <p>Responsive website for a Japanese nonprofit</p>
                <div className="project-footer">
                    <p className="tech-stack">HTML · CSS · Flexbox</p>
                    <div className="project-links">
                        <a className="project-btn" href="https://jwliii.netlify.app/" target="_blank" rel="noreferrer">Live ↗</a>
                        <a className="project-btn" href="https://github.com/lou7776/jwli-website" target="_blank" rel="noreferrer">GitHub ↗</a>
                    </div>
                </div>
            </div>
            <div className="project">
                <a href="villain-generator.onrender.com/" target="_blank" rel="noreferrer"><img src={mock15} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="villain-generator.onrender.com/" target="_blank" rel="noreferrer"><h2> Villain Name Generator Website </h2></a>
                <p>A full stack quiz app where users answer five question and turns their answers into a custom superhero alias.</p>
                <div className="project-footer">
                    <p className="tech-stack">HTML · CSS · JavaScript · Node.js · Render</p>
                    <div className="project-links">
                        <a className="project-btn" href="https://villain-generator.onrender.com/" target="_blank" rel="noreferrer">Live ↗</a>
                        <a className="project-btn" href="https://github.com/lou7776/Villain-generator" target="_blank" rel="noreferrer">GitHub ↗</a>
                    </div>
                </div>
            </div>
            <div className="project">
                <a href="https://warrenstreetbarber.netlify.app/" target="_blank" rel="noreferrer"><img src={mock14} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://warrenstreetbarber.netlify.app/" target="_blank" rel="noreferrer"><h2>Warren Street Barbershop Website </h2></a>
                <p>Responsive website for a Barbershop</p>
                <div className="project-footer">
                    <p className="tech-stack">HTML · CSS · Flexbox</p>
                    <div className="project-links">
                        <a className="project-btn" href="https://warrenstreetbarber.netlify.app/" target="_blank" rel="noreferrer">Live ↗</a>
                        <a className="project-btn" href="https://github.com/lou7776/warren-street-barbershop/tree/main" target="_blank" rel="noreferrer">GitHub ↗</a>
                    </div>
                </div>
            </div>
            {/* <div className="project">
                <a href="http://www.wemanage.jp/" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="http://www.wemanage.jp/" target="_blank" rel="noreferrer"><h2>WeManage: Real Estate Asset Management</h2></a>
                <p>This mobile application allows realtors in Japan to securely manage their property information and view future income predictions. This app is built with Ruby on Rails and JavaScript.</p>
            </div>
            <div className="project">
                <a href="https://www.byuh.edu/covid-19-case-management" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.byuh.edu/covid-19-case-management" target="_blank" rel="noreferrer"><h2>COVID-19 Case Management</h2></a>
                <p>Built official charts for COVID/vaccination tracking for an educational institution using JavaScript and the Google Sheets API v4. The dashboard served the university's leadership in their decision-making processes.</p>
            </div>
            <div className="project">
                <a href="https://github.com/yujisatojr/multi-reg-analysis" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/yujisatojr/multi-reg-analysis" target="_blank" rel="noreferrer"><h2>Multiple Regression Property Analysis</h2></a>
                <p>Analyzed the real estate market in Japan and predicted property prices by implementing statistical methods such as OLS and multi-regression analysis. This project leveraged Python and various libraries such as Pandas, NumPy, Matplotlib, and Scikit-Learn.</p>
            </div>
            <div className="project">
                <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><h2>Programs of Study</h2></a>
                <p>Designed and developed a custom component for a CMS-based platform (e.g., 'Brightspot') using Java, Handlebars, and LESS. University students can find their majors of interest through this module.</p>
            </div>
            <div className="project">
                <a href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix" target="_blank" rel="noreferrer"><h2>Transfer Evaluation Matrix</h2></a>
                <p>Created an interactive CSV table generator with Java, Handlebars, and LESS. This project helps transfer students to quickly identify eligible credits.</p>
            </div>
            <div className="project">
                <a href="https://github.com/yujisatojr/submeowrine" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/yujisatojr/submeowrine" target="_blank" rel="noreferrer"><h2>Submeowrine</h2></a>
                <p>Developed and released an Android mobile application using Java and Android Studio that runs a 2D shooting game.</p>
            </div> */}
        </div>
    </div>
    );
}

export default Project;