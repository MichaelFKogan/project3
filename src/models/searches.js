var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var SearchesSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User"
},
  keyword: {
    type: String,
    lowercase: true, //always convert to lowercase
    trim: true
  },

  resultsOne:[],
  resultsTwo:[],
  resultsThree:[]

});

var Search = mongoose.model("Searches", SearchesSchema);
module.exports = Searches;