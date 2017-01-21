import React from 'react';

const ResultsThree = React.createClass({

  getInitialState: function () {
    return {
      term: "" 
    };
  },

  
  render: function () {
    return (
      
<div> {/* <-- DO NOT DELETE THIS DIV */}



<div className="centerTextInsideDiv">

    <div className="resultsDiv col-4" id="resultsDivThree">

        <h1> SEARCH RESULTS COMPONENT THREE </h1>



            {this.props.resultsThree.map(function(search, i) {
    return (

    <div key={i}>

        {/*x++*/}

        <div className="row">
            <p className=""><strong><a href={search.formattedUrl}>{search.title}</a></strong></p>
            <p className="">{search.snippet}</p>
        
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

export default ResultsThree;