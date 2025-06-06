
const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subject: { type: String, required: true },
  writerName: { type: String, required: true },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    immutable: false, 
  },
  imageUrl: { type: String, default: null },
});

module.exports = mongoose.model("Post", postSchema);
