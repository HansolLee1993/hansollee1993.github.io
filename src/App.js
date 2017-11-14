import React, { Component } from 'react';

import './css/App.css';

import Navi from './Navi.js';
import Info from './Info.js';
import Foot from './Foot.js';
import Banner from './Banner.js';
import Portfolio from './Portfolio.js'
import CallAction from './CallAction.js'
import Contact from './Contact.js'
import MyExperience from './MyExperience.js'



class App extends Component {

  render() {
        return (
          <div className="App">

              <div className = "">
                  <Navi />
              </div>

              <Banner/>
              <Info />
              <Portfolio />
              <MyExperience />
              <CallAction />
              <Contact />
              <Foot />
          </div>

        );
    }
}

export default App;
