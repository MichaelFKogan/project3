import React from 'react';
import helpers from './utils/helpers' 

import ResultsOne from './children/ResultsOne';
import ResultsTwo from './children/ResultsTwo';
import ResultsThree from './children/ResultsThree';
import SearchPageSunny from './children/SearchPageSunny';

const SearchPage = React.createClass({
  

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
<div> {/* <-- DO NOT DELETE THIS DIV */}



<SearchPageSunny resultsOne={this.state.resultsOne} />   




{ /* SEARCH BOX INPUT AND MAIN PAGE GO HERE */}


<div className="centerTextInsideDiv"><h1> Search Page</h1>
    <form 
        onSubmit={this.handleSubmit} >
        <input 
            onChange={this.handleChange} 
            id="keyword" 
            placeholder="Search..." >
        </input>
        <button type="submit"> Search </button>
    </form>









    {/* You can pass data from the search component to the results components here */}
        {/* Component 1 */}
           <ResultsOne resultsOne={this.state.resultsOne} />                   
        {/* Component 2 */}
           <ResultsTwo resultsTwo={this.state.resultsTwo} /> 
        {/* Component 2 */}
           <ResultsThree resultsThree={this.state.resultsThree} />     
    </div>


        


{/* DO NOT DELETE THIS DIV --> */} </div> 
    );},
});

export default SearchPage;
