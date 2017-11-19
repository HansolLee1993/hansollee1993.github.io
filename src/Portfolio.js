/**
 * Created by hansollee on 2017-09-23.
 */
import React, { Component } from 'react';
import './css/Portfolio.css';


class Portfolio extends Component {

    render() {
        return (
            <div className="Portfolio">
                <section id="portfolio" className="portfolio section-space-padding">
                    <div className = "container">
                    <div className="row">
                        <div className="col-sm-12 text-center sectionContainer">
                            <div className="section-title">
                                <h2>Portfolio</h2>
                                <div className="divider dark">
                                    <i className="fa fa-id-card" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                        <section className="bg-light" id="portfolio">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-4 col-sm-6 portfolio-item">
                                        <a className="portfolio-link" data-toggle="modal" href="http://thejibe.io/">
                                            <div className="portfolio-hover">
                                                <div className="portfolio-hover-content">
                                                    <i className="fa fa-plus fa-3x"><h4>Check Website</h4></i>
                                                </div>
                                            </div>
                                            <img className="img-fluid" src={require('./img/portfolio/thejibeLogo.png')}  alt="thejibe"></img>
                                        </a>
                                        <div className="portfolio-caption">
                                            <h4>Task management tool </h4>
                                            <h6 className="companyName">Thejibe <br></br>May 2017 - Sep 2017</h6>
                                            <p className="text-muted">
                                                Continuation of a task management tool, pulling employee data through the Teamwork API
                                                Application uses a combo of Laravel for the back-end and React for the front-end.

                                                <br></br> <br></br>Technologies used:<br></br>
                                                <li><img className="react" style={{width: 70, height: 50}} src={require('./img/tech/react.png')} alt="react"></img>React</li>
                                                <li><img className="react" style={{width: 40, height: 40}} src={require('./img/tech/html.png')} alt="react"></img>  HTML5</li>
                                                <li><img className="react" style={{width: 40, height: 40}} src={require('./img/tech/css.png')} alt="react"></img>  CSS3</li>
                                                <li><img className="react" style={{width: 40, height: 40}} src={require('./img/tech/laravel.png')} alt="react"></img>  Laravel Framework</li>
                                                <li><img className="react" style={{width: 40, height: 40}} src={require('./img/tech/bootstrap.png')} alt="react"></img>  bootstrap</li>
                                                <li><img className="react" style={{width: 40, height: 30}} src={require('./img/tech/git.png')} alt="react"></img>  Git</li>

                                                <br></br><br></br>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-6 portfolio-item">
                                        <a className="portfolio-link" data-toggle="modal" href="http://schedule.ovcmt.com/">
                                            <div className="portfolio-hover">
                                                <div className="portfolio-hover-content">
                                                    <i className="fa fa-plus fa-3x"><h4>Check Website</h4></i>
                                                </div>
                                            </div>
                                            <img className="img-fluid" src={require('./img/portfolio/ovcmt.png')} alt="ovcmt"></img>
                                        </a>
                                        <div className="portfolio-caption">
                                            <h4>College Scheduling Application</h4>
                                            <h6 className="companyName">Okanagan Valley College of Massage Therapy
                                            <br></br>Jan 2017 – Apr 2017</h6>
                                            <p className="text-muted">
                                                A scheduling application built for Okanagan Valley College of Massage Therapy that provides a drag-and-drop and schedule propagation
                                                <br></br>
                                                - Designed and implemented the database structure along with full-stack responsibilities.
                                                <br></br>  <br></br>
                                                Technologies used: <br></br>
                                                <li><img className="react" style={{width: 70, height: 50}} src={require('./img/tech/php.png')} alt="react"></img>PHP</li>
                                                <li><img className="react" style={{width: 120, height: 40}} src={require('./img/tech/multi.png')} alt="react"></img></li>
                                                <li><img className="react" style={{width: 40, height: 40}} src={require('./img/tech/laravel.png')} alt="react"></img>  Laravel Framework</li>
                                                <li><img className="react" style={{width: 40, height: 40}} src={require('./img/tech/bootstrap.png')} alt="react"></img>  bootstrap</li>
                                                <li><img className="react" style={{width: 40, height: 40}} src={require('./img/tech/git.png')} alt="react"></img>  Git</li>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-6 portfolio-item">
                                        <a className="portfolio-link" data-toggle="modal" href="http://www.vidc.ca/">
                                            <div className="portfolio-hover">
                                                <div className="portfolio-hover-content">
                                                    <i className="fa fa-plus fa-3x"><h4>Check Website</h4></i>

                                                </div>
                                            </div>
                                            <img className="img-fluid" src={require('./img/portfolio/vidcLogo.png')} alt=""></img>
                                        </a>
                                        <div className="portfolio-caption">
                                            <h4>Redesign Website</h4>
                                            <h6 className="companyName">Vancouver Infectious Diseases Centre
                                                <br></br>sep 2017 – Present</h6>
                                            <p className="text-muted">Redesigned the website for non profit-organization.
                                                Website represents VIDC characteristics well.
                                                <br></br><br></br><br></br>
                                                Technologies used:
                                                <li><img className="react" style={{width: 70, height: 50}} src={require('./img/tech/php.png')} alt="react"></img>PHP</li>
                                                <li><img className="react" style={{width: 50, height: 46}} src={require('./img/tech/wordpress.png')} alt="react"></img> WordPress</li>
                                                <li><img className="react" style={{width: 120, height: 40}} src={require('./img/tech/multi.png')} alt="react"></img></li>
                                            </p>
                                            <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-6 portfolio-item">
                                        <a className="portfolio-link" data-toggle="modal" href="http://divfit.com/">
                                            <div className="portfolio-hover">
                                                <div className="portfolio-hover-content">
                                                    <i className="fa fa-plus fa-3x"><h4>Check Website</h4></i>
                                                </div>
                                            </div>
                                            <img className="img-fluid" src={require('./img/portfolio/split.png')}  alt=""></img>
                                        </a>
                                        <div className="portfolio-caption">
                                            <h4>Expense Tracking</h4>
                                            <p className="text-muted">Website Design<br></br>
                                                Split is a web application where users can register and login to
                                                track personal expenses individually or among friends. Project
                                                consisted of 9 team members separated into front and back-end teams,
                                                plus a middle-man to provide adequate code reviews and feedback. <br></br><br></br>
                                                Technologies used:
                                                <li><img className="react" style={{width: 70, height: 50}} src={require('./img/tech/php.png')} alt="react"></img>PHP</li>
                                                <li><img className="react" style={{width: 120, height: 40}} src={require('./img/tech/multi.png')} alt="react"></img></li>
                                                <li><img className="react" style={{width: 40, height: 40}} src={require('./img/tech/laravel.png')} alt="react"></img>  Laravel Framework</li>
                                                <li><img className="react" style={{width: 40, height: 40}} src={require('./img/tech/git.png')} alt="react"></img>  Git</li>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-6 portfolio-item">
                                        <a className="portfolio-link" data-toggle="modal" href="http://starrymorning.com/">
                                            <div className="portfolio-hover">
                                                <div className="portfolio-hover-content">
                                                    <i className="fa fa-plus fa-3x"><h4>Check Website</h4></i>
                                                </div>
                                            </div>
                                            <img className="img-fluid" src={require('./img/portfolio/numberPop.png')}  alt=""></img>
                                        </a>
                                        <div className="portfolio-caption">
                                            <h4>JavaScript Game</h4>
                                            <p className="text-muted">Brain Game<br></br>
                                                NumberPOP is javaScript game.
                                                <br></br><br></br><br></br>
                                                Technologies used:
                                                <li><img className="react" style={{width: 70, height: 50}} src={require('./img/tech/php.png')} alt="react"></img>PHP</li>
                                                <li><img className="react" style={{width: 120, height: 40}} src={require('./img/tech/multi.png')} alt="react"></img></li>
                                                <li><img className="react" style={{width: 50, height: 55}} src={require('./img/tech/git.png')} alt="react"></img>  Git</li>
                                            </p>
                                            <br></br><br></br><br></br> <br></br><br></br><br></br>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-6 portfolio-item">
                                        <a className="portfolio-link" data-toggle="modal" href="http://students.bcitdev.com/A00785290/g20/Group20/index.php">
                                            <div className="portfolio-hover">
                                                <div className="portfolio-hover-content">
                                                    <i className="fa fa-plus fa-3x"><h4>Check Website</h4></i>
                                                </div>
                                            </div>
                                            <img className="img-fluid" src={require('./img/portfolio/condo.png')}  alt=""></img>
                                        </a>
                                        <div className="portfolio-caption">
                                            <h4>Website Degin </h4>

                                            <p className="text-muted">Website Design
                                                Creating website for strata owners seeking guidance and information that may help them resolve current/future issues.
                                                Focused on responsive design and clean, modern, content-first interface.
                                                <br></br><br></br><br></br>
                                                Technologies used:
                                                <li><img className="react" style={{width: 70, height: 50}} src={require('./img/tech/php.png')} alt="react"></img>PHP</li>
                                                <li><img className="react" style={{width: 120, height: 40}} src={require('./img/tech/multi.png')} alt="react"></img></li>
                                                <li><img className="react" style={{width: 50, height: 55}} src={require('./img/tech/git.png')} alt="react"></img>  Git</li>
                                            </p>
                                            <br></br><br></br>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </section>




                    <div className = "col-md-12 text-center">
                        <a href="https://github.com/HansolLee1993">
                            <h5>https://github.com/HansolLee1993</h5>
                        </a>
                        <div className="col-sm-offset-2 col-sm-8" id ="githublink">
                            <img className="img-fluid" src={require('./img/github.png')} style={{'width':'100%','height':'200px'}} alt="github image"></img>
                        </div>



                    <div className="text-center margin-top-50">
                        <a className="button button-style button-style-dark button-style-color-2 smoth-scroll" href="#contact">Hire Me!</a>
                    </div>
                    </div>
                    </div>

                </section>

            </div>

        );
    }
}

export default Portfolio;
