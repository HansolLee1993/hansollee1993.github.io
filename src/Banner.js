/**
 * Created by hansollee on 2017-09-23.
 */
import React, { Component } from 'react';
import './css/Banner.css';




class Banner extends Component {

    render() {
        return (
            <div className="Banner">
                <div className="bannerContainer centered">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 container-banner" >
                            <a href="" className="typewrite" data-period="2000" data-type='[ "Hi, I Am Hansol Lee.", "I am a Front-end Unicorn", "I Love to Develop.", "I Am Creative.", "I Am Passionate."]'>
                            <span className="wrap"></span>
                        </a>
                        </div>
                    </div>

                    <div className = "col-md-12">
                        <div className="text-center margin-top-50">
                            <a className="button button-style button-style-white button-style-color-2 smoth-scroll" href="#portfolio">
                                <b>SEE MY WORKS</b></a>
                        </div>
                    </div>

                </div>

            </div>

        );
    }
}

export default Banner;
