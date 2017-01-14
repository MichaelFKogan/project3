import React from 'react';

import ResultsOne from './children/ResultsOne';
import ResultsTwo from './children/ResultsTwo';
import ResultsThree from './children/ResultsThree';

const app = React.createClass({
  

getInitialState: function () {
    return {
     searchTerm: "", ResultsOne: [], ResultsTwo: [], ResultsThree: [],
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


// QUERY the APIs here through the helpers file
    helpers.runQuery(this.state.keyword).then(function(data){
        // if (data !== this.state.results){
        //     for(var i=0;i<=data.length-1;i++){
        //         results.push(data[i]);
        //     }        
            this.setState({results: results});
        // }
      }.bind(this)); 


  },
  

render: function () {
    return (
<div>



{ /* SEARCH BOX INPUT AND MAIN PAGE GO HERE */}
<h1> SEARCH PAGE</h1>

  Search<input></input>
  <button>Search</button>


  <form 
        onSubmit={this.handleSubmit}
        className="create-form" 
        action="/search" 
        method="GET" 
        id="searchForm" >

<div id="searchDiv">
    <span id="searchGlyphicon"> 
    <img id="searchGlyphiconImg" src="./assets/img/glyphicons-search.png"/>
    </span>
        <input 
        onChange={this.handleChange} 
        type="text" 
        className="form-control" 
        placeholder="Search..." 
        id="keyword" 
        name="jobType"
        autoComplete="off"
         />
    </div>

    <button 
        className="" 
        type="submit" 
        value="Search" 
        id="searchButton">
        Search
    </button>


</form>





{/* You can pass data from the search component to the results components here */}


{/* Component 1 */}
    <ResultsOne />
          


{/* Component 2 */}
    <ResultsTwo />



{/* Component 2 */}
    <ResultsThree />    
        
        

        </div>
    );},
});

export default app;
