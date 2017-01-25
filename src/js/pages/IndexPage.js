import { Link } from 'react-router';
import React, { PropTypes } from 'react';
import DocumentTitle from 'react-document-title';
import { Authenticated, NotAuthenticated, LoginLink } from 'react-stormpath';
import Header from './Header';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import DrawerUndockedExample from './DrawerUndockedExample';
import DrawerUndockedExample2 from './DrawerUndockedExample2';
injectTapEventPlugin();


// import Table from './table';
let background = './project3/src/img/background.png'; 

const divStyle = {
  color: 'blue',
  backgroundImage: 'url(' + background + ')',
};

console.log(divStyle);

export default class IndexPage extends React.Component {
  
  // FIRST PAGE/WELCOME PAGE - LOGIN, CREATE ACCOUNT, ETC. 

  render() {
    return (
     <div style={divStyle}>
        <div className="row" id="home">
      <div className="grid-example col s12"><span className="flow-text">Standard Topics</span></div>
      <div className="grid-example col s12 m6"><span className="flow-text"></span></div>
      </div>




     <div>
    
       <MuiThemeProvider> 

       <DrawerUndockedExample />  

       </MuiThemeProvider> 

      <MuiThemeProvider> 

       <DrawerUndockedExample2 />  

       </MuiThemeProvider> 
      </div>

        <div className="section no-pad-bot" id="index-banner">
          <div className="container" >
            <br /><br />
            <h1 className="header center orange-text">iCODE</h1>
            <div className="row center">
              <h5 className="header col s12 light">A technology research application for Developers.</h5>
            </div>
            <div className="row center">
  

              <a href="/register" id="download-button" className="btn-large waves-effect waves-light orange">Sign Up</a>
            </div>
            <br /><br />
          </div>
        </div>
        <div className="container">
          <div className="section">
            {/*   Icon Section   */}
            <div className="row">
              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center light-blue-text"><i className="material-icons">flash_on</i></h2>
                  <h5 className="center">Our Vision</h5>
                  <p className="light">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.</p>
                </div>
              </div>
              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center light-blue-text"><i className="material-icons">pencil</i></h2>
                  <h5 className="center">Student Focused</h5>
                  <p className="light">A website Created by Students for Students </p>
                </div>
              </div>
              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center light-blue-text"><i className="material-icons">thumbs-up</i></h2>
                  <h5 className="center">Easy to Use</h5>
                  <p className="light">We have a vast amount of resources and subjects for various levels of experience in an easy to use format.</p>
                </div>
              </div>
            </div>
          </div>
          <br /><br />
          <div className="section">
          </div>
        </div>
        <footer className="page-footer orange">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Contact Us</h5>
                <p className="grey-text text-lighten-4">Please contact us at any time. We would love to hear you feedback.</p>
              </div>
              <div className="col l3 s12">
                <h5 className="white-text">Quick Links</h5>
                <ul>
                  <li><a className="white-text" href="#!">Link 1</a></li>
                  <li><a className="white-text" href="#!">Link 2</a></li>
                  
                </ul>
              </div>
              <div className="col l3 s12">
                <h5 className="white-text">Connect</h5>
                <ul>
                  <li><a className="white-text" href="#!">Link 1</a></li>
                  <li><a className="white-text" href="#!">Link 2</a></li>
                  
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
              Made by <a className="orange-text text-lighten-3" href="http://materializecss.com">Materialize</a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
