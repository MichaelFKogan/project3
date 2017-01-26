import React from 'react';

const ResultsTwo = React.createClass({

  getInitialState: function () {
    return {
      term: "" 
    };
  },

  
  render: function () {
    return (

<div> {/* <-- DO NOT DELETE THIS DIV */}





                    {/* ========== GITHUB SECTION ============= */}

    <div className="section" id="rowNine" >
        <div className="row">
            <div className="col l5 s12 center" id="rowTen">
                <h1 className="lime-text text-accent-4" id="rowEleven">Github</h1>
            </div>
            <div className="col l7 s12 blue lighten-3" id="rowTwelve">
                <div className="card red lighten-3">
                    <div className="row">
                        <div className="col l11 s11 card-content white-text center">


                            {this.props.resultsTwo.map(function(search, i) {
                            return (
                            <div key={i}>                        

                            <span className="card-title">

                            <a href={search.clone_url}>{search.description}</a></span>
                            <p><a href={search.clone_url}>{search.clone_url}</a></p>
                            <hr />                            

                            </div> )})}


                        </div>
                        <div className="col l1 s1 card-action center">
                            <a href="#"><i className="material-icons">grade</i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>





{/* DO NOT DELETE THIS DIV --> */}  </div>
    
   );},
});

export default ResultsTwo;