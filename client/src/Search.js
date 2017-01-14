import React from 'react';

import ResultsOne from './children/ResultsOne';
import ResultsTwo from './children/ResultsTwo';
import ResultsThree from './children/ResultsThree';

const app = React.createClass({
  

getInitialState: function () {
    return {
      ResultsOne: [], ResultsTwo: [], ResultsThree: [],
    };
  },


handleChange: function (event) {

  },


handleSubmit: function (event) {

  },
  

render: function () {
    return (
<div>


{ /* SEARCH BOX INPUT AND MAIN PAGE GO HERE */}
<h1> SEARCH PAGE</h1>

  Search<input></input>
  <button>Search</button>



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
