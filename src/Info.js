/**
 * Created by hansollee on 2017-09-23.
 */
import React, { Component } from 'react';
import './css/Info.css';
import './css/index.css';


class Info extends Component {
    render() {
        return (
            <div className="Info">
                <section id="about" className="about">
                    <div className ="InfoContainer">
                        <div className="col-sm-12 text-center sectionContainer">
                            <div className="section-title">
                                <h2>About Me.</h2>
                                <div className="divider dark">
                                    <i className="fa fa-user-o" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-offset-2 col-md-4 col-sm-2 margin-left-setting">
                                <div className="margin-top-150">
                                    <div className="table-responsive">
                                        <table className="table">
                                            <tbody>
                                                <tr>
                                                    <td>Name</td>
                                                    <td>Hansol Lee</td>
                                                </tr>
                                                <tr>
                                                    <td>Email</td>
                                                    <td>leehansol1993@gmail.com</td>
                                                </tr>
                                                <tr>
                                                    <td>Designation</td>
                                                    <td>Web Developer</td>
                                                </tr>
                                                <tr>
                                                    <td>Experience</td>
                                                    <td>2 Years</td>
                                                </tr>
                                                <tr>
                                                    <td>Contact</td>
                                                    <td>778-898-0183</td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-5 col-sm-6">
                                <div className="me-image">
                                    <img src = {require('./img/HansolPhoto.png')} className ="imgCss" alt="Hansol" ></img>
                                </div>
                            </div>


                            <div className = "col-md-12 " id = "skillsBox">
                                <h2 className="text-center skillHeader">- Skills -</h2>
                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="ProgressContainer">
                                        <h3 className="skillsTitle text-center">Front-End</h3>
                                        <div className="row">
                                            <h5 className="skills"> HTML5</h5>
                                            <div className="progress skill-bar ">
                                                <div className="progress-bar progress-bar-striped active progress-bar-success" role="progressbar"
                                                     aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{"width":"90%"}}>
                                                    <span className="skill"><i className="val"> 90%</i></span>
                                                </div>
                                            </div>

                                            <h5 className="skills"> CSS </h5>
                                            <div className="progress skill-bar">
                                                <div className="progress-bar progress-bar-striped active progress-bar-info" role="progressbar" aria-valuenow="90"  aria-valuemax="100" style={{"width":"90%"}}>
                                                    <span className="skill"><i className="val"> 90%</i></span>
                                                </div>
                                            </div>

                                            <h5 className="skills"> React</h5>
                                            <div className="progress skill-bar">
                                                <div className="progress-bar progress-bar-striped active progress-bar-primary" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{"width":"80%"}} >
                                                    <span className="skill"><i className="val"> 80%</i></span>
                                                </div>
                                            </div>

                                            <h5 className="skills">JavaScript</h5>
                                            <div className="progress skill-bar">
                                                <div className="progress-bar progress-bar-striped active progress-bar-warning" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{"width":"75%"}}>
                                                    <span className="skill"><i className="val"> 75%</i></span>
                                                </div>
                                            </div>

                                            <h5 className="skills"> Angular2</h5>
                                            <div className="progress skill-bar">
                                                <div className="progress-bar  progress-bar-striped active progress-bar-danger" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100" style={{"width":"55%"}}>
                                                    <span className="skill"><i className="val"> 55%</i></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-4">
                                    <div className="ProgressContainer">
                                        <h3 className="skillsTitle text-center" >Back-End</h3>
                                        <div className="row">
                                            <h5 className="skills"> Laravel PHP  </h5>
                                            <div className="progress skill-bar ">
                                                <div className="progress-bar progress-bar-striped active progress-bar-danger" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{"width":"70%"}}>
                                                    <span className="skill"> <i className="val">70%</i></span>
                                                </div>
                                            </div>

                                            <h5 className="skills"> ASP.Net C#</h5>
                                            <div className="progress skill-bar">
                                                <div className="progress-bar progress-bar-striped active progress-bar-primary" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{"width":"60%"}}>
                                                    <span className="skill"><i className="val">60%</i></span>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-4">
                                    <div className="ProgressContainer">
                                        <h3 className="skillsTitle text-center">Mobile</h3>
                                        <div className="row">
                                            <h5 className="skills">Swift3 </h5>
                                            <div className="progress skill-bar ">
                                                <div className="progress-bar progress-bar-striped active progress-bar-warning" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{"width":"80%"}}>
                                                    <span className="skill"><i className="val">80%</i></span>
                                                </div>
                                            </div>
                                            <h5 className="skills">Java for Android</h5>
                                            <div className="progress skill-bar">
                                                <div className="progress-bar progress-bar-striped active progress-bar-info" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{"width":"70%"}}>
                                                    <span className="skill"><i className="val">70%</i></span>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>


                    </div>
                </section>
            </div>

        );
    }
}

export default Info;
