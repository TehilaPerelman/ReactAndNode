

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
router.post('/createPost', authenticateUser, upload.single("image"), createPost);
router.get('/getAllPosts', authenticateUser, getAllPosts);
router.get('/:id', authenticateUser, getPostById);
router.put('/updatePost/:id', authenticateUser, upload.single("image"), updatePost);
router.delete('/deletePost/:id', authenticateUser, deletePost);
module.exports = router;
