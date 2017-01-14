import React from 'react';
import NavLink from './utils/NavLink'

const Login = React.createClass({
  

getInitialState: function () {
    return {

    };
  },


handleChange: function (event) {
    // const value = event.target.value;


  },


handleSubmit: function (event) {
    // const value = event.target.value;

  },
  

render: function () {
    return (

<div> {/* DO NOT DELETE THIS <div> */}


{ /* LOG IN/SIGN UP PAGE GOES IN HERE */}


<h1> LOGIN PAGE</h1>


<h3> Sign Up</h3>
<div>Name<input></input></div>
<div>Password<input></input></div>
<button>Submit</button>

<h3> LOG IN</h3>
<div>Name<input></input></div>
<div>Password<input></input></div>
<button>Submit</button>

<br /> <br />

<p><NavLink to="/Search" className="navLinks">LINK TO SEARCH PAGE</NavLink></p>



{ /* LOG IN/SIGN UP PAGE GOES IN HERE */}





{/* DO NOT DELETE THIS <div> */} </div>

    );},
});

export default Login;
