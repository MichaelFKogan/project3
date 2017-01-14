import React from 'react';
import SelectedFoods from './SelectedFoods';
import FoodSearch from './FoodSearch';

const App = React.createClass({
  

getInitialState: function () {
    return {
      selectedFoods: [],
    };
  },
  

render: function () {
    return (
<div>

          

{/* Component 1 */}
    <SelectedFoods />
          



{/* Component 2 */}
    <FoodSearch />
        
        

        </div>
    );},
});

export default App;
