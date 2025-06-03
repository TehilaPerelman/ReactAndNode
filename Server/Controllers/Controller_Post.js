
const Post = require("../Models/Post");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
destination: (req, file, cb) => cb(null, "UpImg"),
filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});

const upload = multer({ storage });

const createPost = async (req, res) => {
try {
const { title, subject, writerName } = req.body;
const imageUrl = req.file ? `/UpImg/${req.file.filename}` : null;

if (!title || !subject || !writerName) {
  return res.status(400).json({ message: "יש למלא את כל השדות" });
}

const post = new Post({
  
  title,
  subject,
  writerName,
  userId: req.userId,
  imageUrl
});

await post.save();
res.status(201).json({ message: "הפוסט נוצר בהצלחה", post });
} catch (error) {
console.error("שגיאה ביצירת פוסט:", error);
res.status(500).json({ message: "שגיאת שרת" });
}
};

const getAllPosts = async (req, res) => {
try {
const posts = await Post.find().sort({ createdAt: -1 });
res.status(200).json(posts);
} catch (error) {
console.error("שגיאה בשליפת פוסטים:", error);
res.status(500).json({ message: "שגיאת שרת" });
}
};

const getPostById = async (req, res) => {
try {
const post = await Post.findById(req.params.id);
if (!post) {
return res.status(404).json({ message: "פוסט לא נמצא" });
}
res.status(200).json(post);
} catch (error) {
console.error("שגיאה בשליפת פוסט:", error);
res.status(500).json({ message: "שגיאת שרת" });
}
};

const updatePost = async (req, res) => {
try {
const { id } = req.params;
const { title, subject, writerName } = req.body;

if (!title || !subject || !writerName) {
  return res.status(400).json({ message: "יש למלא את כל השדות לעדכון" });
}

const post = await Post.findById(id);
if (!post) {
  return res.status(404).json({ message: "פוסט לא נמצא" });
}

post.title = title;
post.subject = subject;
post.writerName = writerName;

if (req.file) {
  post.imageUrl = `/UpImg/${req.file.filename}`;
}

await post.save();
res.status(200).json(post);
} catch (error) {
console.error("שגיאה בעדכון הפוסט:", error);
res.status(500).json({ message: "שגיאת שרת" });
}
};

const deletePost = async (req, res) => {
try {
const { id } = req.params;
const post = await Post.findByIdAndDelete(id);
if (!post) {
return res.status(404).json({ message: "פוסט לא נמצא" });
}
res.status(200).json({ message: "הפוסט נמחק" });
} catch (error) {
console.error("שגיאה במחיקת פוסט:", error);
res.status(500).json({ message: "שגיאת שרת" });
}
};

module.exports = {
createPost,
getAllPosts,
getPostById,
updatePost,
deletePost,
upload
};