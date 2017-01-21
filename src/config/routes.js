 
//Require Schemas
var User = require("./src/models/user");
var Searches = require("./src/models/searches");

 //Route to get Saved Searches
 app.get("/api/searches", function(req, res) {

  Searches.find({})
    .exec(function(err, doc) {

      if (err) {
        console.log(err);
      }
      else {
        res.send(doc);
      }
    });
});

///Route to add a search to a user
app.post("/api/searches", function(req, res) {
  var newSearch = new Search(req.body);

  console.log(req.body);

  newSearch.save(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});

// Route to delete an search from saved list
app.delete("/api/searches/", function(req, res) {

  var keyword = req.param("keyword");

  Searches.find({ keyword: keyword}).remove().exec(function(err) {
    if (err) {
      console.log(err);
    }
    else {
      res.send("Deleted");
    }
  });
});

///END MONGODB SETUP//////