/**
 * Created by hansollee on 2017-09-22.
 */
import React, { Component } from 'react';
import './css/Navi.css';

class Navi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isTop: true,
        };

    }

    componentDidMount() {
        document.addEventListener('scroll', () => {
            this.setState({ isTop: window.scrollY < 800 })
        });
    }


    render() {
        return (
            <div className="Navi" id="page-top">
                {/* Navigation */}
                <nav id="mainNav" className={this.state.isTop ? 'navbar navbar-default navbar-fixed-top navbar-before ' : 'navbar navbar-default navbar-fixed-top navbar-after'}>
                    <div className="container">
                        {/* Brand and toggle get grouped for better mobile display */}
                        <div className="navbar-header page-scroll">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1" aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span> Menu <i className="fa fa-bars"></i>
                            </button>
                            <a className="navbar-brand" href="#page-top">Hansol</a>
                        </div>

                        {/* Collect the nav links, forms, and other content for toggling */}
                        <div className="navbar-collapse collapse" id="navbar-collapse-1">
                            <ul className="nav navbar-nav navbar-right">
                                <li className="hidden">
                                    <a href="#page-top"></a>
                                </li>
                                <li className="page-scroll">
                                    <a href="#page-top">Home</a>
                                </li>
                                <li className="page-scroll">
                                    <a href="#about">About</a>
                                </li>
                                <li className="page-scroll">
                                    <a href="#portfolio">Portfolio</a>
                                </li>
                                <li className="page-scroll">
                                    <a href="#myExperience">Experiences</a>
                                </li>
                                <li className="page-scroll">
                                    <a href="#contact">Contact</a>
                                </li>
                                <li className="page-scroll">
                                    <a href="">Resume</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navi;
