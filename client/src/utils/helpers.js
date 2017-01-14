// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");


// Helper functions for making API Calls
var helper = {


  // This runs our AXIOS/AJAX Requests and pulls the data from the API.
runQuery: function(location, keyword) {


   var queryURL = "http://service.dice.com/api/rest/jobsearch/v1/simple.json?text=" 
        
        return axios.get(queryURL).then(function(response) {
                if (response) {
                    return response.data.resultItemList;
                }
              return "";
              

        }); /* END AXIOS.GET */ 
    }, /* END RUNQUERY */ 
}; /* END HELPER */ 

// We export the API helper
module.exports = helper;













