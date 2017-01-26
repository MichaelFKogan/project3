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






                    {/* ========== YOUTUBE SECTION ============= */}
<div className="whiteSpace"></div>
    <div className="section" id="sectionYouTube">
        <div className="row" id="rowFour">

                <div className="col l7 s12 blue lighten-3" id="rowFive">  
                    <div className="row" id="rowSix" >      
                        <div className="col l6 s12 center">
                            <div className="card blue-grey lighten-2">
                                <div className="card-content white-text">
                                    
                                    {this.props.resultsOne.map(function(search, i) {
                                    return (
                                    <div key={i}>                                

                                    <span className="card-title">{search.snippet.title}</span>
                                    <p>{search.snippet.description}</p>
                                    <p><img src={search.snippet.thumbnails.default.url} /></p>
                                    <hr/>
                                    </div> )})}

                                </div>
                                <div className="card-action">
                                    <a href="#">
                                    <i className="material-icons">grade</i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div className="col l5 s12 center" id="rowSeven">
                    <h1 className="red-text text-lighten-1" id="rowEight" >YouTube</h1>
                </div>
        </div> {/* <-- END <div className="row" id="rowFour"> */}
    </div> {/* <-- END <div className="section"> */}

<div className="whiteSpace"></div>






{/* DO NOT DELETE THIS DIV --> */} </div>
    
   );},
});

export default ResultsOne;
