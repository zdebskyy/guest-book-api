const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const postSchema = new Schema({
  name: { type: String },
  comment: { type: String },
});

const postModel = mongoose.model("Post", postSchema);

module.exports = postModel;
