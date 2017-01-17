import React from 'react'
import NavLink from '../utils/NavLink'
import { LoginLink, LogoutLink, Authenticated, NotAuthenticated } from 'react-stormpath';

export default React.createClass({
  render() {
    return(  

    <div> {/* <-- DO NOT DELETE THIS DIV */}
    	



 <nav className="navbar navbar-default navbar-static-top">
        <div className="container">
          <div id="navbar-collapse" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">

            </ul>
            <ul className="nav navbar-nav navbar-right">
             <p><NavLink to="/" className="navLinks">Home</NavLink></p>

            <NotAuthenticated>
			  <p><LoginLink /></p>
			  <p><NavLink to="/register">Create Account</NavLink></p>
			</NotAuthenticated>

			<Authenticated>
			  <p>
			    <NavLink to="/profile">Profile</NavLink>
			  </p>
			</Authenticated>


            </ul>
          </div>
        </div>
      </nav>



<div className="container">
        <h2 className="text-center">Welcome!</h2>
        <hr />
        <div className="jumbotron">
          <p>
            <strong>To my React application!</strong>
          </p>
          <p>Ready to begin? Try these Stormpath features that are included in this example:</p>
          <ol className="lead">
            <p><NavLink to="/register">Create Account</NavLink></p>
            <p><LoginLink /></p>
            <p><NavLink to="/profile">Custom Profile Data</NavLink></p>
          </ol>
        </div>
      </div>








{/* DO NOT DELETE THIS DIV --> */} </div>

    )
  }
})
