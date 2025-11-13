const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  post_name: {
    type: String,
    required: true,
  },
  post_description: {
    type: String,
    required: true,
  },
  post: {
    type: String, 
    required: true
  }
});

module.exports = mongoose.model("Post", PostSchema);
