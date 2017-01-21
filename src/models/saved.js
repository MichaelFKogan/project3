var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var SavedSchema = new Schema({
    userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User"
},
  saved: []
  
});

var Saved = mongoose.model("Saved", SavedSchema);
module.exports = Saved;