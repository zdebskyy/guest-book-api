const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const postSchema = new Schema({
  name: { type: String },
  comment: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const postModel = mongoose.model("Post", postSchema);

module.exports = postModel;
