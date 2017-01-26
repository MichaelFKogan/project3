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
                  <h5 className="center">Speeds up development</h5>
                  <p className="light">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.</p>
                </div>
              </div>
              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center light-blue-text"><i className="material-icons">group</i></h2>
                  <h5 className="center">User Experience Focused</h5>
                  <p className="light">By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally, a single underlying responsive system across all platforms allow for a more unified user experience.</p>
                </div>
              </div>
              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center light-blue-text"><i className="material-icons">settings</i></h2>
                  <h5 className="center">Easy to work with</h5>
                  <p className="light">We have provided detailed documentation as well as specific code examples to help new users get started. We are also always open to feedback and can answer any questions a user may have about Materialize.</p>
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
                <h5 className="white-text">Company Bio</h5>
                <p className="grey-text text-lighten-4">We are a team of college students working on this project like it's our full time job. Any amount would help support and continue development on this project and is greatly appreciated.</p>
              </div>
              <div className="col l3 s12">
                <h5 className="white-text">Settings</h5>
                <ul>
                  <li><a className="white-text" href="#!">Link 1</a></li>
                  <li><a className="white-text" href="#!">Link 2</a></li>
                  <li><a className="white-text" href="#!">Link 3</a></li>
                  <li><a className="white-text" href="#!">Link 4</a></li>
                </ul>
              </div>
              <div className="col l3 s12">
                <h5 className="white-text">Connect</h5>
                <ul>
                  <li><a className="white-text" href="#!">Link 1</a></li>
                  <li><a className="white-text" href="#!">Link 2</a></li>
                  <li><a className="white-text" href="#!">Link 3</a></li>
                  <li><a className="white-text" href="#!">Link 4</a></li>
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
    




{/* DO NOT DELETE THIS DIV --> */}   </div>
    );
  }
}
