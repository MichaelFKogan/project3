import React from 'react';
import NavLink from '../utils/NavLink'

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

</div>

{ /* LOG IN/SIGN UP PAGE GOES IN HERE */}







{/* DO NOT DELETE THIS DIV --> */} </div>

    );},
});

export default Login;
