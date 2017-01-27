import React from 'react';
import ResultsOne from './ResultsOne';
import ResultsTwo from './ResultsTwo';
import ResultsThree from './ResultsThree';
import Footer from './Footer';
import helpers from '../utils/helpers' 

const SearchPageSunny = React.createClass({



getInitialState: function () {
    return {
     keyword: "", resultsOne: [], resultsTwo: [], resultsThree: [],
    };
  },


handleChange: function (event) {
        switch(event.target.id){
          case "keyword":
            this.setState({ keyword: event.target.value });
            break;
    }
  },


handleSubmit: function (event) {
        event.preventDefault();
        var results = [];
        var resultsTwo = [];
        var resultsThree = [];


// QUERY the APIs here through the helpers file
    helpers.runQuery(this.state.keyword).then(function(data){
        if (data !== this.state.results){
            for(var i=0;i<=data.length-1;i++){
                results.push(data[i]);
            }
            this.setState({resultsOne: results});
        }
      }.bind(this)); 


// QUERY the APIs here through the helpers file
    helpers.runQueryTwo(this.state.keyword).then(function(data){
        if (data !== this.state.results){
            for(var i=0;i<=data.length-1;i++){
                resultsTwo.push(data[i]);
            }
            this.setState({resultsTwo: resultsTwo});
        }
      }.bind(this)); 

    // QUERY the APIs here through the helpers file
    helpers.runQueryThree(this.state.keyword).then(function(data){
        if (data !== this.state.results){
            for(var i=0;i<=data.length-1;i++){
                resultsThree.push(data[i]);
            }
            this.setState({resultsThree: resultsThree});
        }
      }.bind(this)); 


      this.setState({results: [], resultsOne: [], resultsTwo:[], resultsThree:[] });
      this.setState({ keyword: ""});

  },


  render: function () {
    return (
      
<div>{/* <-- DO NOT DELETE THIS DIV */}




<div id="main">

    
                {/* ========== SEARCH BAR ============= */}
    <div className="searchPage" id="rowZero">
        <div className="row center" id="rowOne">
          <h1 className="lime-text text-accent-4" id="rowTwo" >SEARCH</h1>
        </div>
        <div className="row white center" id="rowThree">
            <div className="nav-wrapper "> 
                <form onSubmit={this.handleSubmit} >
                    <div className="input-field ">
                        <input onChange={this.handleChange} id="keyword" type="search" placeholder="Search..." required />
                            <label htmlFor="search">
                                <i className="material-icons">search</i> 
                            </label>
                        <i className="material-icons" id="closeIcon">close</i>
                    </div>
                    <button type="submit"> Search </button>
                </form>
            </div>
        </div>  
    </div>




<ResultsOne resultsOne={this.state.resultsOne} /> 

<ResultsTwo resultsTwo={this.state.resultsTwo} /> 

<ResultsThree resultsThree={this.state.resultsThree} /> 

<Footer />




</div> {/* <-- END <div id="main"> */}




{/* DO NOT DELETE THIS DIV --> */} </div>
    
   );},
});

export default SearchPageSunny;
