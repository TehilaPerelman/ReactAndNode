const express = require('express');
const { registerUser, loginUser,getUser } = require('../Controllers/Controller_User');
// const { authenticateUser } = require('../Middlewares/authMiddleware');
const authenticateUser = require('../Middlewares/authMiddleware');


const router = express.Router();

router.post("/registerUser", registerUser);
router.post('/loginUser', loginUser);
router.get('/getUser', authenticateUser, getUser);


module.exports = router;
