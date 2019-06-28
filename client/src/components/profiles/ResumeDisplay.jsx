import React, { Component } from "react";
import defaultAvatar from "../../img/img_avatar.png";

class ResumeDisplay extends Component {
  render() {
    return (
      <div className="resume-container center-contents flex-container-spacearound">
        <div
          className="resume-title center-contents"
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <img className="img-resume-avatar" src={defaultAvatar} alt="Avatar" />
          <h1 className="p-4">Thomas Blais</h1>
        </div>
        <div className="contact-info m-4">
          <h3>Contact:</h3>
          <div className="center-contents resume-box-border padding-L-R-5px margin-3px">
            <p>85 Sawmill Rd. Chepachet Rhode Island, 02814</p>
            <p>401-632-6856</p>
            <p>thomasblais.student@careerdevs.com</p>
          </div>
        </div>
        <div className="socialmedia-info m-4">
          <h3>Social Media:</h3>
          <div className="center-contents resume-box-border padding-L-R-5px margin-3px">
            <p className="p-2">
              <a
                className="text-infor p-2"
                href="https://tb-dev-connect-122412.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-globe fa-2x" />
              </a>
              <a
                className="text-info p-2"
                href="https://twitter.com/tblais1224"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter fa-2x" />
              </a>
              <a
                className="text-info p-2"
                href="https://www.linkedin.com/in/thomas-blais-15013b100/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin fa-2x" />
              </a>
            </p>
          </div>
        </div>
        <div className="aboutme-info m-4">
          <h3>About Me:</h3>
          <div className="center-contents resume-box-border padding-L-R-5px margin-3px">
            <p>I am one of the creators of Future CV.</p>
            <p>Developer skills obtained via CareerDevs University</p>
          </div>
        </div>
        <div className="education-info m-4">
          <h3>Education:</h3>
          <div className="flex-container-spacearound">
            <div className="center-contents resume-box-border padding-L-R-5px margin-3px">
              <p>CareerDevs University</p>
              <p>Currently Enrolled</p>
              <p>Biomedical Engineering</p>
            </div>
            <div className="center-contents resume-box-border padding-L-R-5px margin-3px">
              <p>Worcester Polytechnic Institute</p>
              <p>Bachelors degree</p>
              <p>Biomedical Engineering</p>
            </div>
          </div>
        </div>
        <div className="programmingskills-info m-4">
          <h3>Tech Skills:</h3>
          <div className="flex-container-spacearound">
            <div className="center-contents resume-box-border padding-L-R-5px margin-3px">
              <h4>Languages:</h4>
              <div>
                <button className="btn-info m-2">JavaScript</button>
                <button className="btn-info m-2">HTML</button>
                <button className="btn-info m-2">CSS</button>
              </div>
            </div>
            <div className="center-contents resume-box-border padding-L-R-5px margin-3px">
              <h4>Frameworks:</h4>
              <div>
                <button className="btn-info m-2">ExpressJS</button>
                <button className="btn-info m-2">ReactJS</button>
              </div>
            </div>
            <div className="center-contents resume-box-border padding-L-R-5px margin-3px">
              <h4>Other Technical Skills:</h4>
              <div>
                <button className="btn-info m-2">MongoDB</button>
                <button className="btn-info m-2">GraphQL</button>
              </div>
            </div>
          </div>
        </div>
        <div className="capstoneprojects-info m-4">
          <h3>Capstone Projects:</h3>
          <div className="flex-container-spacearound">
            <div className="center-contents resume-box-border padding-L-R-5px margin-3px">
              <p className="pt-2">
                <a
                  className="text-dark"
                  href="https://github.com/tblais1224/Future-CV-Team1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github fa-2x" />
                  <h4 style={{ textAlign: "center" }}>Future CV</h4>
                </a>
              </p>
              <p>
                A project for creating interactive and dynamic resumes for
                employers to view and invite people for interviews.
              </p>
              <p>JavaScript</p>
            </div>
            <div className="center-contents resume-box-border padding-L-R-5px margin-3px margin-3px">
              <p className="pt-2">
                <a
                  className="text-dark"
                  href="https://github.com/tblais1224/TBs-DevConnect"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github fa-2x" />
                  <h4 style={{ textAlign: "center" }}>Dev Connecter</h4>
                </a>
              </p>
              <p>A simple social media application for developers.</p>
              <p>JavaScript</p>
            </div>
            <div className="center-contents resume-box-border padding-L-R-5px margin-3px margin-3px">
              <p className="pt-2">
                <a
                  className="text-dark"
                  href="https://github.com/tblais1224/gameListGraphQL"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github fa-2x" />
                  <h4 style={{ textAlign: "center" }}>GraphQL Game List</h4>
                </a>
              </p>
              <p>A simple application to learn the basics of GraphQL.</p>
              <p>JavaScript</p>
            </div>
          </div>
        </div>
        <div className="devroles-info m-4">
          <h3>Developer Roles:</h3>
          <div className="center-contents resume-box-border padding-L-R-5px margin-3px">
            <p>starting developer, student</p>
            <p>0 years as a developer</p>
          </div>
        </div>
        <div className="workexperience-info m-4">
          <div>
            <h3>Work Experience:</h3>
            <div>
              <div className="center-contents resume-box-border padding-L-R-5px margin-3px">
                <p>Server / Line Cook</p>
                <p>Pare Clambakes</p>
                <p>Prepare food, Cook food, and serve food.</p>
                <p>2012-07-20 to 2019-06-10</p>
              </div>
              <div className="center-contents resume-box-border padding-L-R-5px margin-3px">
                <p>Concrete Worker</p>
                <p>Grenga and Sons Concrete and Excavation</p>
                <p>
                  Layout site excavation plans for resedential and commercial
                  jobs. Form and pour foundations, floors and all other concrete
                  work.
                </p>
                <p>2016-05-20 to 2019-01-10</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-10 m-5 flex-container-spacearound">
        <button className="btn-info btn-sm m-1">Edit Resume</button>
            <button className="btn-danger btn-sm m-1">Delete Account</button>
        </div>
      </div>
    );
  }
}

export default ResumeDisplay;
