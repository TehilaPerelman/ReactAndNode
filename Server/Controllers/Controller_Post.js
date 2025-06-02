
// // // const Post = require("../Models/Post");
// // // const createPost = async (req, res) => {
// // //   const { title, subject, writerName } = req.body;

// // //   if (!title || !subject || !writerName) {
// // //     return res.status(400).json({ message: "יש למלא את כל השדות" });
// // //   }

// // //   try {
// // //     const post = new Post({ title, subject, writerName, userId: req.userId });
// // //     await post.save();
// // //     res.status(201).json({ message: "הפוסט נוצר בהצלחה", post });
// // //   } catch (error) {
// // //     console.error("שגיאה ביצירת פוסט:", error);
// // //     res.status(500).json({ message: "שגיאת שרת" });
// // //   }
// // // };
// // // const updatePost = async (req, res) => {
// // //   try {
// // //     const { id } = req.params;
// // //     const { title, subject, writerName } = req.body;

// // //     if (!title || !subject || !writerName) {
// // //       return res.status(400).json({ message: 'יש למלא את כל השדות לעדכון' });
// // //     }

// // //     const post = await Post.findById(id);
// // //     if (!post) {
// // //       return res.status(404).json({ message: 'פוסט לא נמצא' });
// // //     }

// // //     // עדכון שדות
// // //     post.title = title;
// // //     post.subject = subject;
// // //     post.writerName = writerName;

// // //     await post.save();

// // //     res.status(200).json(post);
// // //   } catch (error) {
// // //     console.error("שגיאה בעדכון הפוסט:", error);
// // //     res.status(500).json({ message: 'שגיאת שרת' });
// // //   }
// // // };

// // // const getAllPosts = async (req, res) => {
// // //   try {
// // //     const posts = await Post.find().sort({ createdAt: -1 });
// // //     res.status(200).json(posts);
// // //   } catch (error) {
// // //     console.error("שגיאה בשליפת פוסטים:", error);
// // //     res.status(500).json({ message: "שגיאת שרת" });
// // //   }
// // // };

// // // const deletePost = async (req, res) => {
// // //   try {
// // //     const { id } = req.params;
// // //     const post = await Post.findByIdAndDelete(id);

// // //     if (!post) {
// // //       return res.status(404).json({ message: "פוסט לא נמצא" });
// // //     }

// // //     res.status(200).json({ message: "הפוסט נמחק" });
// // //   } catch (error) {
// // //     console.error("שגיאה במחיקת פוסט:", error);
// // //     res.status(500).json({ message: "שגיאת שרת" });
// // //   }
// // // };
 
// // // // ✅ שליפת פוסט לפי מזהה
// // // const getPostById = async (req, res) => {
// // //   try {
// // //     const post = await Post.findById(req.params.id);
// // //     if (!post) {
// // //       return res.status(404).json({ message: "פוסט לא נמצא" });
// // //     }
// // //     res.status(200).json(post);
// // //   } catch (error) {
// // //     console.error("שגיאה בשליפת פוסט:", error);
// // //     res.status(500).json({ message: "שגיאת שרת" });
// // //   }
// // // };

// // // module.exports = {
// // //   createPost,
// // //   getAllPosts,
// // //   deletePost,
// // //   getPostById,
// // //   updatePost
// // // };
// // // קובץ: Controllers/Controller_Post.js

// // // const Post = require("../Models/Post");
// // // const multer = require("multer");
// // // const path = require("path");

// // // // הגדרת אחסון לקבצים
// // // const storage = multer.diskStorage({
// // //   destination: (req, file, cb) => cb(null, "uploads/"),
// // //   filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
// // // });

// // // const upload = multer({ storage });

// // // // יצירת פוסט חדש
// // // const createPost = async (req, res) => {
// // //   try {
// // //     const { title, subject, writerName } = req.body;
// // //     const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

// // //     if (!title || !subject || !writerName) {
// // //       return res.status(400).json({ message: "יש למלא את כל השדות" });
// // //     }

// // //     const post = new Post({
// // //       title,
// // //       subject,
// // //       writerName,
// // //       userId: req.userId,
// // //       imageUrl
// // //     });

// // //     await post.save();
// // //     res.status(201).json({ message: "הפוסט נוצר בהצלחה", post });
// // //   } catch (error) {
// // //     console.error("שגיאה ביצירת פוסט:", error);
// // //     res.status(500).json({ message: "שגיאת שרת" });
// // //   }
// // // };

// // // // שליפת כל הפוסטים
// // // const getAllPosts = async (req, res) => {
// // //   try {
// // //     const posts = await Post.find().sort({ createdAt: -1 });
// // //     res.status(200).json(posts);
// // //   } catch (error) {
// // //     console.error("שגיאה בשליפת פוסטים:", error);
// // //     res.status(500).json({ message: "שגיאת שרת" });
// // //   }
// // // };

// // // // שליפת פוסט לפי ID
// // // const getPostById = async (req, res) => {
// // //   try {
// // //     const post = await Post.findById(req.params.id);
// // //     if (!post) {
// // //       return res.status(404).json({ message: "פוסט לא נמצא" });
// // //     }
// // //     res.status(200).json(post);
// // //   } catch (error) {
// // //     console.error("שגיאה בשליפת פוסט:", error);
// // //     res.status(500).json({ message: "שגיאת שרת" });
// // //   }
// // // };

// // // // עדכון פוסט קיים
// // // const updatePost = async (req, res) => {
// // //   try {
// // //     const { id } = req.params;
// // //     const { title, subject, writerName } = req.body;

// // //     if (!title || !subject || !writerName) {
// // //       return res.status(400).json({ message: "יש למלא את כל השדות לעדכון" });
// // //     }

// // //     const post = await Post.findById(id);
// // //     if (!post) {
// // //       return res.status(404).json({ message: "פוסט לא נמצא" });
// // //     }

// // //     post.title = title;
// // //     post.subject = subject;
// // //     post.writerName = writerName;

// // //     await post.save();
// // //     res.status(200).json(post);
// // //   } catch (error) {
// // //     console.error("שגיאה בעדכון הפוסט:", error);
// // //     res.status(500).json({ message: "שגיאת שרת" });
// // //   }
// // // };

// // // // מחיקת פוסט
// // // const deletePost = async (req, res) => {
// // //   try {
// // //     const { id } = req.params;
// // //     const post = await Post.findByIdAndDelete(id);
// // //     if (!post) {
// // //       return res.status(404).json({ message: "פוסט לא נמצא" });
// // //     }
// // //     res.status(200).json({ message: "הפוסט נמחק" });
// // //   } catch (error) {
// // //     console.error("שגיאה במחיקת פוסט:", error);
// // //     res.status(500).json({ message: "שגיאת שרת" });
// // //   }
// // // };

// // // module.exports = {
// // //   createPost,
// // //   getAllPosts,
// // //   getPostById,
// // //   updatePost,
// // //   deletePost,
// // //   upload
// // // };
// // const Post = require("../Models/Post");
// // const multer = require("multer");
// // const path = require("path");

// // // הגדרת אחסון לקבצים
// // const storage = multer.diskStorage({
// //   destination: (req, file, cb) => cb(null, "UpImg/"),
// //   filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
// // });

// // const upload = multer({ storage });

// // // יצירת פוסט חדש
// // const createPost = async (req, res) => {
// //   try {
// //     const { title, subject, writerName } = req.body;
// //     const imageUrl = req.file ? `/UpImg/${req.file.filename}` : null;

// //     if (!title || !subject || !writerName) {
// //       return res.status(400).json({ message: "יש למלא את כל השדות" });
// //     }

// //     const post = new Post({
// //       title,
// //       subject,
// //       writerName,
// //       userId: req.userId,
// //       imageUrl
// //     });

// //     await post.save();
// //     res.status(201).json({ message: "הפוסט נוצר בהצלחה", post });
// //   } catch (error) {
// //     console.error("שגיאה ביצירת פוסט:", error);
// //     res.status(500).json({ message: "שגיאת שרת" });
// //   }
// // };

// // // שליפת כל הפוסטים
// // const getAllPosts = async (req, res) => {
// //   try {
// //     const posts = await Post.find().sort({ createdAt: -1 });
// //     res.status(200).json(posts);
// //   } catch (error) {
// //     console.error("שגיאה בשליפת פוסטים:", error);
// //     res.status(500).json({ message: "שגיאת שרת" });
// //   }
// // };

// // // שליפת פוסט לפי ID
// // const getPostById = async (req, res) => {
// //   try {
// //     const post = await Post.findById(req.params.id);
// //     if (!post) {
// //       return res.status(404).json({ message: "פוסט לא נמצא" });
// //     }
// //     res.status(200).json(post);
// //   } catch (error) {
// //     console.error("שגיאה בשליפת פוסט:", error);
// //     res.status(500).json({ message: "שגיאת שרת" });
// //   }
// // };

// // // עדכון פוסט קיים (כולל תמונה)
// // const updatePost = async (req, res) => {
// //   try {
// //     const { id } = req.params;
// //     const { title, subject, writerName } = req.body;

// //     if (!title || !subject || !writerName) {
// //       return res.status(400).json({ message: "יש למלא את כל השדות לעדכון" });
// //     }

// //     const post = await Post.findById(id);
// //     if (!post) {
// //       return res.status(404).json({ message: "פוסט לא נמצא" });
// //     }

// //     post.title = title;
// //     post.subject = subject;
// //     post.writerName = writerName;

// //     // אם הגיעה תמונה חדשה - מעדכן את הנתיב
// //     if (req.file) {
// //       post.imageUrl = `/UpImg/${req.file.filename}`;
// //     }

// //     await post.save();
// //     res.status(200).json(post);
// //   } catch (error) {
// //     console.error("שגיאה בעדכון הפוסט:", error);
// //     res.status(500).json({ message: "שגיאת שרת" });
// //   }
// // };

// // // מחיקת פוסט
// // const deletePost = async (req, res) => {
// //   try {
// //     const { id } = req.params;
// //     const post = await Post.findByIdAndDelete(id);
// //     if (!post) {
// //       return res.status(404).json({ message: "פוסט לא נמצא" });
// //     }
// //     res.status(200).json({ message: "הפוסט נמחק" });
// //   } catch (error) {
// //     console.error("שגיאה במחיקת פוסט:", error);
// //     res.status(500).json({ message: "שגיאת שרת" });
// //   }
// // };

// // module.exports = {
// //   createPost,
// //   getAllPosts,
// //   getPostById,
// //   updatePost,
// //   deletePost,
// //   upload
// // };
// const Post = require("../Models/Post");
// const multer = require("multer");
// const path = require("path");

// // הגדרת אחסון לקבצים בתיקייה UpImg
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => cb(null, "UpImg"), // ✅ שונה מ־uploads ל־UpImg
//   filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
// });

// const upload = multer({ storage });

// // יצירת פוסט חדש
// const createPost = async (req, res) => {
//   try {
//     const { title, subject, writerName } = req.body;
//     const imageUrl = req.file ? `/UpImg/${req.file.filename}` : null; // ✅ מתייחס ל־UpImg

//     if (!title || !subject || !writerName) {
//       return res.status(400).json({ message: "יש למלא את כל השדות" });
//     }

//     const post = new Post({
//       title,
//       subject,
//       writerName,
//       userId: req.userId,
//       imageUrl
//     });

//     await post.save();
//     res.status(201).json({ message: "הפוסט נוצר בהצלחה", post });
//   } catch (error) {
//     console.error("שגיאה ביצירת פוסט:", error);
//     res.status(500).json({ message: "שגיאת שרת" });
//   }
// };

// // שאר הפעולות (getAllPosts, getPostById, updatePost, deletePost) ללא שינוי...

// module.exports = {
//   createPost,
//   getAllPosts,
//   getPostById,
//   updatePost,
//   deletePost,
//   upload
// };
const Post = require("../Models/Post");
const multer = require("multer");
const path = require("path");

// הגדרת אחסון לקבצים בתיקייה UpImg
const storage = multer.diskStorage({
destination: (req, file, cb) => cb(null, "UpImg"),
filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});

const upload = multer({ storage });

// יצירת פוסט חדש
const createPost = async (req, res) => {
try {
const { title, subject, writerName } = req.body;
// const imageUrl = req.file ? /UpImg/${req.file.filename} : null;
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

// שליפת כל הפוסטים
const getAllPosts = async (req, res) => {
try {
const posts = await Post.find().sort({ createdAt: -1 });
res.status(200).json(posts);
} catch (error) {
console.error("שגיאה בשליפת פוסטים:", error);
res.status(500).json({ message: "שגיאת שרת" });
}
};

// שליפת פוסט לפי ID
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

// עדכון פוסט (כולל אפשרות לעדכן תמונה)
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

// מחיקת פוסט
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