// const Post = require("../Models/Post");
// const User = require("../Models/User");

// const createPost = async (req, res) => {
//     const { title, content } = req.body;

//     if (!title || !content) {
//         return res.status(400).json({ message: 'יש למלא את כל השדות' });
//     }

//     try {
//         const post = new Post({ title, content, userId: req.userId });
//         await post.save();

//         res.status(201).json({ message: 'הפוסט נוצר בהצלחה', post });
//     } catch (error) {
//         console.error('Error creating post:', error);
//         res.status(500).json({ message: 'שגיאת שרת' });
//     }
// };

// const getAllPosts = async (req, res) => {
//     try {
//         const posts = await Post.find().populate('userId', 'UserName');
//         res.status(200).json(posts);
//     } catch (error) {
//         console.error('Error fetching posts:', error);
//         res.status(500).json({ message: 'שגיאת שרת' });
//     }
// };

// const deletePost = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const post = await Post.findByIdAndDelete(id);

//         if (!post) {
//             return res.status(404).json({ message: 'פוסט לא נמצא' });
//         }

//         res.status(200).json({ message: 'הפוסט נמחק' });
//     } catch (error) {
//         console.error('Error deleting post:', error);
//         res.status(500).json({ message: 'שגיאת שרת' });
//     }
// };

// module.exports = { createPost, getAllPosts, deletePost };

// const Post = require("../Models/Post");

// const createPost = async (req, res) => {
//   const { title, subject, writerName } = req.body;

//   if (!title || !subject || !writerName) {
//     return res.status(400).json({ message: "יש למלא את כל השדות" });
//   }

//   try {
    
//     const post = new Post({ title, subject, writerName, userId: req.userId });

//     await post.save();

//     res.status(201).json({ message: "הפוסט נוצר בהצלחה", post });
//   } catch (error) {
//     console.error("שגיאה ביצירת פוסט:", error);
//     res.status(500).json({ message: "שגיאת שרת" });
//   }
// };

// const getAllPosts = async (req, res) => {
//   try {
//     const posts = await Post.find().sort({ createdAt: -1 }); // כדי להחזיר מהחדש לישן
//     res.status(200).json(posts);
//   } catch (error) {
//     console.error("שגיאה בשליפת פוסטים:", error);
//     res.status(500).json({ message: "שגיאת שרת" });
//   }
// };

// const deletePost = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const post = await Post.findByIdAndDelete(id);

//     if (!post) {
//       return res.status(404).json({ message: "פוסט לא נמצא" });
//     }

//     res.status(200).json({ message: "הפוסט נמחק" });
//   } catch (error) {
//     console.error("שגיאה במחיקת פוסט:", error);
//     res.status(500).json({ message: "שגיאת שרת" });
//   }
// };

// module.exports = {
//   createPost,
//   getAllPosts,
//   deletePost,
// };

// const Post = require("../Models/Post");

// const createPost = async (req, res) => {
// const { title, subject, writerName } = req.body;

// if (!title || !subject || !writerName) {
// return res.status(400).json({ message: "יש למלא את כל השדות" });
// }

// try {
// const post = new Post({ title, subject, writerName, userId: req.userId });
// await post.save();
// res.status(201).json({ message: "הפוסט נוצר בהצלחה", post });
// } catch (error) {
// console.error("שגיאה ביצירת פוסט:", error);
// res.status(500).json({ message: "שגיאת שרת" });
// }
// };

// const getAllPosts = async (req, res) => {
// try {
// const posts = await Post.find().sort({ createdAt: -1 });
// res.status(200).json(posts);
// } catch (error) {
// console.error("שגיאה בשליפת פוסטים:", error);
// res.status(500).json({ message: "שגיאת שרת" });
// }
// };

// const deletePost = async (req, res) => {
// try {
// const { id } = req.params;
// const post = await Post.findByIdAndDelete(id);

// if (!post) {
//   return res.status(404).json({ message: "פוסט לא נמצא" });
// }

// res.status(200).json({ message: "הפוסט נמחק" });
// } catch (error) {
// console.error("שגיאה במחיקת פוסט:", error);
// res.status(500).json({ message: "שגיאת שרת" });
// }
// };

// // ✅ פונקציה חדשה: שליפת פוסט לפי ID
// const getPostById = async (req, res) => {
// try {
// const post = await Post.findById(req.params.id);
// if (!post) {
// return res.status(404).json({ message: "פוסט לא נמצא" });
// }
// res.status(200).json(post);
// } catch (error) {
// console.error("שגיאה בשליפת פוסט:", error);
// res.status(500).json({ message: "שגיאת שרת" });
// }
// };

// module.exports = {
// createPost,
// getAllPosts,
// deletePost,
// getPostById, // ✅ מוסף כאן
// };
const Post = require("../Models/Post");

const createPost = async (req, res) => {
  const { title, subject, writerName } = req.body;

  if (!title || !subject || !writerName) {
    return res.status(400).json({ message: "יש למלא את כל השדות" });
  }

  try {
    const post = new Post({ title, subject, writerName, userId: req.userId });
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
 
// ✅ שליפת פוסט לפי מזהה
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

module.exports = {
  createPost,
  getAllPosts,
  deletePost,
  getPostById,
};
