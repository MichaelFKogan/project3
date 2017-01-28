// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");


// Helper functions for making API Calls
var helper = {


  // This runs our AXIOS/AJAX Requests and pulls the data from the API.
runQuery: function(keyword) {

        {/* YOUTUBE API REQUEST */}

   var queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=Learn" + keyword + "&maxResults=50&order=viewCount&regionCode=US&relevanceLanguage=en&key=AIzaSyCjLHLmUo8kTzrJeh8WYzyyFOTMRDgOwg0" 
        
        return axios.get(queryURL).then(function(response) {
                if (response) {
                console.log("YoutTube SEARCH RESULTS BELOW: Object.data.items[] ");
          console.log(response);
                    return response.data.items;
                }
              return "";
              

        }); /* END AXIOS.GET */ 
    }, /* END RUNQUERY */ 


  // This runs our AXIOS/AJAX Requests and pulls the data from the API.
runQueryTwo: function(keyword) {

        {/* GITHUB API REQUEST */}

   // var queryURL = "https://www.google.com/search?q=" + keyword + "" 

   var queryURL = "https://api.github.com/search/repositories?q="+keyword+"Tutorial"
        
        return axios.get(queryURL).then(function(response) {
                if (response) {
                  console.log("GITHUB SEARCH RESULTS BELOW: Object.data.items[] ");
    console.log(response);
                    return response.data.items;
                }
              return "";
              

        }); /* END AXIOS.GET */ 
    }, /* END RUNQUERY */ 

    
    
  // This runs our AXIOS/AJAX Requests and pulls the data from the API.
runQueryThree: function(keyword) {

        {/* GOOGLE API REQUEST */}

   // var queryURL = "https://www.google.com/search?q=" + keyword + "" 

   var queryURL = "https://www.googleapis.com/customsearch/v1?key=AIzaSyCjLHLmUo8kTzrJeh8WYzyyFOTMRDgOwg0&cx=017576662512468239146:omuauf_lfve&q=Learn"+keyword+"Online"
        
        return axios.get(queryURL).then(function(response) {
                if (response) {
                  console.log("GOOGLE SEARCH RESULTS BELOW: Object.data.items[] ");
    console.log(response);
                    return response.data.items;
                }
              return "";
              

        }); /* END AXIOS.GET  */
    }, /* END RUNQUERY */ 



}; /* END HELPER */ 









// We export the API helper
module.exports = helper;













