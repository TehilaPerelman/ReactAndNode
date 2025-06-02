
// // const express = require('express');
// // const {
// //   createPost,
// //   getAllPosts,
// //   deletePost,
// //   getPostById,
// //   updatePost
// // } = require('../Controllers/Controller_Post');
// // const authenticateUser = require('../Middlewares/authMiddleware');

// // const router = express.Router();

// // router.post('/createPost', authenticateUser, createPost);
// // router.get('/getAllPosts', authenticateUser, getAllPosts);
// // router.delete('/deletePost/:id', authenticateUser, deletePost);
// // router.get('/:id', authenticateUser, getPostById); // ✅ שליפת פוסט לפי ID
// // router.put('/updatePost/:id', authenticateUser, updatePost); // ← חדש
// // module.exports = router;
// // קובץ: Routes/Post_Route.js

// const express = require('express');
// const {
//   createPost,
//   getAllPosts,
//   deletePost,
//   getPostById,
//   updatePost,
//   upload
// } = require('../Controllers/Controller_Post');
// const authenticateUser = require('../Middlewares/authMiddleware');

// const router = express.Router();

// // יצירת פוסט חדש עם תמונה
// router.post('/createPost', authenticateUser, upload.single("image"), createPost);

// // שליפת כל הפוסטים
// router.get('/getAllPosts', authenticateUser, getAllPosts);

// // שליפת פוסט לפי ID
// router.get('/:id', authenticateUser, getPostById);

// // עדכון פוסט
// router.put('/updatePost/:id', authenticateUser, updatePost);

// // מחיקת פוסט
// router.delete('/deletePost/:id', authenticateUser, deletePost);

// module.exports = router;
const express = require('express');
const {
  createPost,
  getAllPosts,
  deletePost,
  getPostById,
  updatePost,
  upload
} = require('../Controllers/Controller_Post');
const authenticateUser = require('../Middlewares/authMiddleware');

const router = express.Router();

// יצירת פוסט חדש עם תמונה
router.post('/createPost', authenticateUser, upload.single("image"), createPost);

// שליפת כל הפוסטים
router.get('/getAllPosts', authenticateUser, getAllPosts);

// שליפת פוסט לפי ID
router.get('/:id', authenticateUser, getPostById);

// עדכון פוסט (כולל אפשרות לעדכן תמונה)
router.put('/updatePost/:id', authenticateUser, upload.single("image"), updatePost);

// מחיקת פוסט
router.delete('/deletePost/:id', authenticateUser, deletePost);

module.exports = router;
