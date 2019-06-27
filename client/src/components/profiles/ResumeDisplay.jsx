import React, { Component } from 'react'
import defaultAvatar from "../../img/img_avatar.png"

class ResumeDisplay extends Component {
    render() {
        return (
            <div className="resume-container center-contents flex-container-spacearound">
                <div className="resume-title center-contents m-2">
                    <img className="img-resume-avatar" src={defaultAvatar} alt="Avatar" />
                    <h1>Thomas Blais</h1>
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
                        <p>https://github.com/tblais1224</p>
                        <p>https://tb-dev-connect-122412.herokuapp.com/</p>
                        <p>https://twitter.com/tblais1224</p>
                        <p>https://www.linkedin.com/in/thomas-blais-15013b100/</p>
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
                <div className="capstoneprojects-info m-4">
                    <h3>Capstone Projects:</h3>
                    <div className="flex-container-spacearound">
                        <div className="center-contents resume-box-border padding-L-R-5px margin-3px">
                            <p>https://github.com/tblais1224/Future-CV-Team1</p>
                            <p>
                                A project for creating interactive and dynamic resumes for
                                employers to view and invite people for interviews.
                            </p>
                            <p>JavaScript</p>
                        </div>
                        <div className="center-contents resume-box-border padding-L-R-5px margin-3px margin-3px">
                            <p>https://github.com/tblais1224/TBs-DevConnect</p>
                            <p>A simple social media application for developers.</p>
                            <p>JavaScript</p>
                        </div>
                        <div className="center-contents resume-box-border padding-L-R-5px margin-3px margin-3px">
                            <p>https://github.com/tblais1224/gameListGraphQL</p>
                            <p>A simple application to learn the basics of GraphQL.</p>
                            <p>JavaScript</p>
                        </div>
                    </div>
                </div>
                <div className="programmingskills-info m-4">
                    <h3>Tech Skills:</h3>
                    <div className="flex-container-spacearound">
                        <div className="center-contents resume-box-border padding-L-R-5px margin-3px">
                            <h3>Languages:</h3>
                            <p>JavaScript, HTML, CSS</p>
                        </div>
                        <div className="center-contents resume-box-border padding-L-R-5px margin-3px">
                            <h3>Frameworks:</h3>
                            <p>ExpressJS, ReactJS</p>
                        </div>
                        <div className="center-contents resume-box-border padding-L-R-5px margin-3px">
                            <h3>Other Technical Skills:</h3>
                            <p>MongoDB, GraphQL</p>
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
            </div>
        )
    }
}


export default ResumeDisplay