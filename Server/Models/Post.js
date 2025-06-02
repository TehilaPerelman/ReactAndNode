// const mongoose = require("mongoose");

// const postSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   subject: { type: String, required: true },
//   writerName: { type: String, required: true },
//   userId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User",
//     required: true,
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//     immutable: false, // כדי שלא יוכלו לשנות את תאריך היצירה
//   },
// });

// module.exports = mongoose.model("Post", postSchema);
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
    immutable: false, // כדי שלא יוכלו לשנות את תאריך היצירה
  },
  imageUrl: { type: String, default: null }, // הוספת שדה לתמונה
});

module.exports = mongoose.model("Post", postSchema);
