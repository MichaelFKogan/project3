import React from 'react';

const Footer = React.createClass({

  getInitialState: function () {
    return {
      term: "" 
    };
  },

  
  render: function () {
    return (
      
<div>{/* <-- DO NOT DELETE THIS DIV */}



<footer className="page-footer cyan darken-4" id="footer">
         <div className="container">
           <div className="row">
             <div className="col l6 s12">
               <h5 className="white-text">Team Bio</h5>
               <p className="grey-text text-lighten-4">We are a team of Rutgers students with a passion for coding. Any suggestions that would help make this project better are greatly appreciated.</p>

             </div>
             <div className="col l3 s12">
               <h5 className="white-text">Settings</h5>
               <ul>
                 <li><a className="white-text"> Thank you for </a></li>
                 <li><a className="blue-text" href="https://codingbootcamp.rutgers.edu/">Rutgers Full-Stack Flex Program</a>. </li>
               </ul>
             </div>
             <div className="col l3 s12">
               <h5 className="white-text">Connect Us</h5>
               <ul>
                 <li><a className="white-text" href="https://www.linkedin.com/in/harika-kasireddy">Harika Kasireddy</a></li>
                 <li><a className="white-text" href="https://www.linkedin.com/in/michaelfkogan">Mike Kogan</a></li>            
                 <li><a className="white-text" href="https://www.linkedin.com/in/sandra-duarte-25995040">Sandra Duarte</a></li>
                 <li><a className="white-text" href="https://www.linkedin.com/in/yuhan-song-sunny">Yuhan Song</a></li>
               </ul>
             </div>
           </div>
         </div>
         
       </footer>




{/* DO NOT DELETE THIS DIV --> */} </div>
    
   );},
});

export default Footer;
