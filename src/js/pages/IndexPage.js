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



export default class IndexPage extends React.Component {
  
  // FIRST PAGE/WELCOME PAGE - LOGIN, CREATE ACCOUNT, ETC. 

  render() {
    return (
      <div > {/* <-- DO NOT DELETE THIS DIV */}




        <div className="section no-pad-bot" id="index-banner">
              <div className="whiteCover">
          <div className="container" id="home">

            <br /><br />
            <h1 className="header center orange-text" id="home">iCODE</h1>
            <div className="row center">
              <h5 className="header col s12 light">A technology research application for Developers.</h5>
            </div>
            <div className="row center">


       <MuiThemeProvider> 

       <DrawerUndockedExample />  
        
        </MuiThemeProvider>
        &nbsp;
        <MuiThemeProvider> 

       <DrawerUndockedExample2 />  

        </MuiThemeProvider>    

            </div>
            <br /><br />
          </div>
        </div>
        </div>
        

        <div className="container-fluid" id="section2">
          <div className="section" >
            {/*   Icon Section   */}
            <div className="row">
              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center light-blue-text"><i className="material-icons">flash_on</i></h2>
                  <h5 className="center">Our Vision</h5>
                  <p className="light">We did most of the heavy lifting for you to provide a default styling that incorporates our custom components. Additionally, we refined animations and transitions to provide a smooth experience.</p>
                </div>
              </div>
              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center light-blue-text"><i className="material-icons">pencil</i></h2>
                  <h5 className="center">Student Focused</h5>
                  <p className="light">A website Created by Students for Students. </p>
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
        

        <footer className="page-footer orange" id="footer">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Contact Us</h5>
                <p className="grey-text text-lighten-4">Please contact us at any time. We would love to hear your feedback.</p>
              </div>
              <div className="col l3 s12">
                <h5 className="white-text">Settings</h5>
                <ul>
  <li><a className="white-text"> Thank you to </a></li>
                 <li><a className="blue-text" href="https://codingbootcamp.rutgers.edu/">Rutgers Full-Stack Flex Program</a>. </li>
                </ul>
              </div>
              <div className="col l3 s12">
                <h5 className="white-text">Connect</h5>
                <ul>
                <li><a className="white-text" href="https://www.linkedin.com/in/harika-kasireddy">Harika Kasireddy</a></li>
                 <li><a className="white-text" href="https://www.linkedin.com/in/michaelfkogan">Mike Kogan</a></li>            
                 <li><a className="white-text" href="https://www.linkedin.com/in/sandra-duarte-25995040">Sandra Duarte</a></li>
                 <li><a className="white-text" href="https://www.linkedin.com/in/yuhan-song-sunny">Yuhan Song</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="footer-copyright">
            <div className="container">

            </div>
          </div>
        </footer>
    




{/* DO NOT DELETE THIS DIV --> */}   </div>
    );
  }
}
