/**
 * Created by hansollee on 2017-09-23.
 */
import React, { Component } from 'react';
import './css/MyExperience.css';






class MyExperience extends Component {

    render() {
        return (
            <div className="MyExperience">
                <section id="myExperience" className="section-space-padding flipInX animated">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 text-center sectionContainer ">
                                <div className="section-title">
                                    <h2 >My Experience!</h2>
                                    <div className="divider dark">
                                        <i className="fa fa-graduation-cap" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="row">

                            <div className="col-md-6 col-sm-6">
                                <div className="experience">

                                    <div className="experience-item">
                                        <div className="experience-circle">
                                            <i className="fa fa-graduation-cap" aria-hidden="true"></i>
                                            <p>8, Jan 2017</p>
                                        </div>
                                        <div className="experience-content experience-color-blue">
                                            <h4>Diploma in Computer Systems Technologies</h4>
                                            <h6>British Columbia Institute of Technology</h6>
                                            <p>Learned software engineering and programming from industry professionals,
                                                and gained experience working on projeccts</p>

                                        </div>
                                    </div>
                                    <div className="experience-item">
                                        <div className="experience-circle">
                                            <i className="fa fa-graduation-cap" aria-hidden="true"></i>
                                            <p>Dec 2013</p>
                                        </div>
                                        <div className="experience-content experience-color-blue">
                                            <h4>Bachelor in Multimedia System Technology</h4>
                                            <h6>Dankook University, Korea</h6>
                                            <p>Leared graphic systems related with computer.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-sm-6">
                                <div className="experience">
                                    <div className="experience-item">
                                        <div className="experience-circle experience-company pink-color-bg">
                                            <i className="fa fa-laptop" aria-hidden="true"></i>
                                        </div>
                                        <div className="experience-content">
                                            <h4>Web Developer in Vancouver Infectious Diseases Centre</h4>
                                            <h6>Currently working as Volunteer, Web Developer & Designer</h6>
                                            <p>Redesign Website for non-profit organization. Website is UI responsive</p>

                                        </div>
                                    </div>

                                    <div className="experience-item">
                                        <div className="experience-circle experience-company pink-color-bg">
                                            <i className="fa fa-laptop" aria-hidden="true"></i>
                                        </div>
                                        <div className="experience-content">
                                            <h4>web developer In The Jibe.</h4>
                                            <h6>May 2017 sep 2017, Contract Web Developer</h6>
                                            <p>Continuation of a task management tool, pulling employee data through the Teamwork API -
                                                developer.teamwork.com

                                                Application uses a combo of Laravel for the back-end and React for the front-end.</p>
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

export default MyExperience;
