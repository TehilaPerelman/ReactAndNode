// const express = require('express');
// const { createPost, getAllPosts, deletePost } = require('../Controllers/Controller_Post');
// const authenticateUser = require('../Middlewares/authMiddleware');

// const router = express.Router();

// router.post('/createPost', authenticateUser, createPost);
// router.get('/getAllPosts', authenticateUser, getAllPosts);
// router.delete('/deletePost/:id', authenticateUser, deletePost);

// module.exports = router;
const express = require('express');
const { createPost, getAllPosts, deletePost ,updatePost,getPostById} = require('../Controllers/Controller_Post');
const authenticateUser = require('../Middlewares/authMiddleware');

const router = express.Router();

router.post('/createPost', authenticateUser, createPost);
router.get('/getAllPosts', authenticateUser, getAllPosts);
router.delete('/deletePost/:id', authenticateUser, deletePost);
// ✅ נתיב חדש לעדכון פוסט
router.put('/updatePost/:id', authenticateUser, updatePost);
router.get('/:id', authenticateUser, getPostById); // ✅ שליפת פוסט לפי ID

module.exports = router;

