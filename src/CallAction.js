/**
 * Created by hansollee on 2017-09-23.
 */
/**
 * Created by hansollee on 2017-09-23.
 */
import React, { Component } from 'react';
import './css/CallAction.css';




class CallAction extends Component {

    render() {
        return (
            <div className="CallAction">
                <section className="call-to-action bg-cover section-space-padding text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <h2>Do You Want to Know More About Me?</h2>
                            </div>

                            <div className="col-md-4">
                                <div className="text-center">
                                    <a className="button button-style button-style-color-2 smoth-scroll" href="#contact">Contact Me</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </div>

        );
    }
}

export default CallAction;
