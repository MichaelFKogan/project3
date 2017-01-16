// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");


// Helper functions for making API Calls
var helper = {


  // This runs our AXIOS/AJAX Requests and pulls the data from the API.
runQuery: function(keyword) {

{/* EXAMPLE YOUTUBE API CALL

	var queryURL = "https://www.googleapis.com/youtube/v3/videos
	?id=7lCDEYXw3mM
	&key=AIzaSyCjLHLmUo8kTzrJeh8WYzyyFOTMRDgOwg0
	&part=snippet,statistics" 

API KEY=AIzaSyCjLHLmUo8kTzrJeh8WYzyyFOTMRDgOwg0

     https://www.googleapis.com/youtube/v3/search

     ?part=snippet,statistics
     &q=" + keyword + "
     &maxResults=50
     &order=viewCount
     &key=AIzaSyCjLHLmUo8kTzrJeh8WYzyyFOTMRDgOwg0

*/}

   var queryURL = "https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=AIzaSyCjLHLmUo8kTzrJeh8WYzyyFOTMRDgOwg0&part=snippet,statistics" 
        
        return axios.get(queryURL).then(function(response) {
                if (response) {
                	console.log(response.data);
                    return response.data;
                }
              return "";
              

        }); /* END AXIOS.GET */ 
    }, /* END RUNQUERY */ 
}; /* END HELPER */ 

// We export the API helper
module.exports = helper;













