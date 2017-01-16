// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");


// Helper functions for making API Calls
var helper = {


  // This runs our AXIOS/AJAX Requests and pulls the data from the API.
runQuery: function(keyword) {

        {/* YOUTUBE API REQUEST */}

   var queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + keyword + "&maxResults=50&order=viewCount&regionCode=US&relevanceLanguage=en&key=AIzaSyCjLHLmUo8kTzrJeh8WYzyyFOTMRDgOwg0" 
        
        return axios.get(queryURL).then(function(response) {
                if (response) {
                    return response.data.items;
                }
              return "";
              

        }); /* END AXIOS.GET */ 
    }, /* END RUNQUERY */ 
}; /* END HELPER */ 








// We export the API helper
module.exports = helper;













