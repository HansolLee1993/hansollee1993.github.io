/**
 * Created by hansollee on 2017-09-23.
 */
import React, { Component } from 'react';
import './css/Foot.css';

class Foot extends Component {
    render() {
        return (
            <div className="Foot">
                {/* Footer Start*/ }
                <footer className="footer-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <ul className="social-icon margin-bottom-30">
                                    <li>
                                        <a href="https://www.facebook.com/profile.php?id=100003659577011"  className="facebook">
                                            <i className="fa fa-facebook" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/HansolLee1993" className="github">
                                            <i className="fa fa-github"aria-hidden="true"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href=""  className="google-plus">
                                            <i className="fa fa-google" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/kate_lee93/"  className="instagram">
                                            <i className="fa fa-instagram" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/in/hansollee1993/"  className="dribbble">
                                            <i className="fa fa-linkedin" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
                {/*  Footer End */}
                {/*  Back to Top Start */}
                <a href="" className="scroll-to-top">
                    <i className="icon-arrow-up-circle"></i>
                </a>
                {/*  Back to Top End */}
            </div>

        );
    }
}

export default Foot;
