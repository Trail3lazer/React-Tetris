var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var RankSchema = new Schema({
  name: {
    type: String,
    required: true,
    default: "Player1"
  },
  score: {
    type: Number,
    required: true
  },
  lines: {
    type: Number,
    required: true
  }
});

// This creates our model from the above schema, using mongoose's model method
var Rank = mongoose.model("Rank", RankSchema);

// Export the Article model
module.exports = Rank;
