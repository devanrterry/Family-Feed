const mongoose = require("mongoose");


const postSchema = new mongoose.Schema(
  {
    user: String,
    content: String,
    date: Date,
    picture: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Post", postSchema);
