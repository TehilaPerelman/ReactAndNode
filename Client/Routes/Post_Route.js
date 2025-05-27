// const express = require('express');
// const { createPost, getAllPosts, deletePost } = require('../Controllers/Controller_Post');
// const authenticateUser = require('../Middlewares/authMiddleware');

// const router = express.Router();

// router.post('/createPost', authenticateUser, createPost);
// router.get('/getAllPosts', authenticateUser, getAllPosts);
// router.delete('/deletePost/:id', authenticateUser, deletePost);

// module.exports = router;
const express = require('express');
const { createPost, getAllPosts, deletePost } = require('../Controllers/Controller_Post');
const authenticateUser = require('../Middlewares/authMiddleware');

const router = express.Router();

router.post('/createPost', authenticateUser, createPost);
router.get('/getAllPosts', authenticateUser, getAllPosts);
router.delete('/deletePost/:id', authenticateUser, deletePost);

module.exports = router;

