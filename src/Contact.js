/**
 * Created by hansollee on 2017-09-23.
 */
/**
 * Created by hansollee on 2017-09-23.
 */
import React, { Component } from 'react';
import './css/Contact.css';


class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        this._onSummitClick = this._onSummitClick.bind(this);

    }

    _onSummitClick() {
        return alert("Thank you!!, I will get back soon");
    }



    render() {
        return (
            <div className="Contact">
                <section id="contact" className="section-space-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 text-center sectionContainer">
                                <div className="section-title">
                                    <h2>Contact Me!</h2>
                                    <div className="divider dark">
                                        <i className="fa fa-envelope-o" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="margin-top-30 margin-bottom-50">
                            <div className="row">

                                <div className="col-md-offset-3 col-sm-offset-2 col-md-6 col-sm-8">
                                    <div className="row">
                                        <form className="contact-us pattern-bg" id="contactform"  method="post" action="send_form_email.php" >
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input type="text" name="name" id="name" className="form-control" placeholder="Your Name"></input>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input type="email"  name="email" id="email" className="form-control" placeholder="Your Email"></input>
                                                </div>
                                            </div>

                                            <div className="col-sm-12">
                                                <div className="textarea-message form-group">
                                                    <textarea name="message" id="message" className="textarea-message form-control" placeholder="Your Message" rows="5"></textarea>
                                                </div>
                                            </div>
                                            <div className="text-center">
                                                <button type="submit"  name="submit" id="submit" value="Submit Form" className="button button-style button-style-dark button-style-color-2">Submit</button>
                                            </div>
                                        </form>
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

export default Contact;
