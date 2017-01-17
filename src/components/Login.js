import React from 'react';
import NavLink from '../utils/NavLink'
import Home from './Home'
import { LoginLink } from 'react-stormpath';
import DocumentTitle from 'react-document-title';

const Login = React.createClass({
  

getInitialState: function () {
    return {

    };
  },


handleChange: function (event) {

  },


handleSubmit: function (event) {

  },
  

render: function () {
    return (

<div> {/* <-- DO NOT DELETE THIS DIV */}







{ /* LOG IN AND SIGN UP PAGE GOES IN HERE */}

<div className="centerTextInsideDiv">

<h1> HOME PAGE</h1>


{ /* LOG IN/SIGN UP PAGE GOES IN HERE */}


      <DocumentTitle title='My React App'>
        <div className='Login'>
        {/*  <Home /> */}
          { this.props.children }
        </div>
      </DocumentTitle>

<br/>
<p><NavLink to="/Search" className="navLinks">LINK TO SEARCH PAGE</NavLink></p>


</div>



{/* DO NOT DELETE THIS DIV --> */} </div>

    );},
});

export default Login;
