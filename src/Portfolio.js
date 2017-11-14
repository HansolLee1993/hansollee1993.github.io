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
                                            <h6>Thejibe <br></br>May 2017 - Sep 2017</h6>
                                            <p className="text-muted">
                                                Continuation of a task management tool, pulling employee data through the Teamwork API
                                                Application uses a combo of Laravel for the back-end and React for the front-end.

                                                <br></br> <br></br>Technologies used:
                                                React, Teamwork Projects API, Laravel, PHP, jQuery, jQuery UI, Bootstrap, Git, Bitbucket</p>
                                                <br></br><br></br><br></br><br></br><br></br>
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
                                            <h6>Okanagan Valley College of Massage Therapy
                                            <br></br>Jan 2017 – Apr 2017</h6>
                                            <p className="text-muted">
                                                A scheduling application built for Okanagan Valley College of Massage Therapy that provides a drag-and-drop and schedule propagation
                                                <br></br>
                                                - Designed and implemented the database structure along with full-stack responsibilities.
                                                <br></br>  <br></br>
                                                Technologies used:
                                                Laravel, PHP, HTML5/CSS3, JavaScript, MySQL, jQuery, Bootstrap, Git, Asana, ZenHub
                                                See project College Scheduling Application</p>
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
                                            <h6>Vancouver Infectious Diseases Centre
                                                <br></br>sep 2017 – Present</h6>
                                            <p className="text-muted">Redegined the website for non profit-organization.
                                                Website should be follow trandt website style and represent organzation.
                                                <br></br><br></br><br></br>
                                            Technologies used:
                                                    PHP, Wordpress, HTML5, Bootstrap</p>
                                            <br></br><br></br><br></br><br></br><br></br><br></br>
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
                                            <h4>Website Design</h4>
                                            <p className="text-muted">Website Design</p>
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
                                            <p className="text-muted">Brain Game</p>
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
                                            <p className="text-muted">Website Design</p>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </section>




                    <div className = "col-md-12 text-center">
                        <a href="https://github.com/HansolLee1993"><h5>https://github.com/HansolLee1993</h5></a>
                        <div className="github_link center-block" alt="">

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
