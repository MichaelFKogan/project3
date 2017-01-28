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





                    {/* ========== GOOGLE SECTION ============= */}

<div className="whiteSpace"></div>

    <div className="section" id="rowThirteen" >
        <div className="row">
            
            <div className="col l7 s12 blue lighten-3" id="rowFourteen" >
                <div className="row" id="rowFifteen" > 
                    
                    <div className="col l12 s12 center">
                        <div className="card blue-grey lighten-2">
                            <div className="card-content white-text">

                            {/*
                                {this.props.resultsThree.map(function(search, i) {
                                return (
                                <div key={i}>

                                <span className="card-title">

                                <a href={search.formattedUrl}>{search.title}</a></span>
                                <p>{search.snippet}</p>
                                <hr/>

                                </div>)})}
{{{markup}}}
                            */}
                            

                            </div>
                            <div className="card-action">
                                <a href="#"><i className="material-icons">grade</i></a>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

                <div className="col l5 s12 center" id="rowSixteen" >
                  <h1 className="red-text text-lighten-1" id="rowSeventeen" >Google</h1>
                </div>

        </div>
    </div>
<div className="whiteSpace"></div>



{/* DO NOT DELETE THIS DIV --> */} </div>
    
   );},
});

export default ResultsThree;