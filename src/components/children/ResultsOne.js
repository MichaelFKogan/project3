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



            {this.props.resultsOne.map(function(search, i) {
    return (

    <div key={i}>

        {/*x++*/}

        <div className="row">
            <p className="">{search.jobTitle}</p>
        
       <button onClick="" className=" btn btn-default btn-xs saveButton">Save</button>
      </div>
            <hr className="hrResults"/>

    </div>

)})}



		</div>

	</div>


{/* DO NOT DELETE THIS DIV --> */} </div>
    
   );},
});

export default ResultsOne;
