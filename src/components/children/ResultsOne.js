import React from 'react';

const ResultsOne = React.createClass({

  getInitialState: function () {
    return {
      term: "" 
    };
  },

  
  render: function () {
    return (
      
<div>{/* <-- DO NOT DELETE THIS DIV */}


	<div className="centerTextInsideDiv">

		<div className="resultsDiv col-4" id="resultsDivOne">

		    <h1> SEARCH RESULTS COMPONENT ONE </h1>

		</div>

	</div>


{/* DO NOT DELETE THIS DIV --> */} </div>
    
   );},
});

export default ResultsOne;
