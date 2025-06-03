
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path'); 
const Post_Route = require('./Routes/Post_Route');
const User_Route = require('./Routes/User_Route');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/UpImg', express.static(path.join(__dirname, 'UpImg')));

app.use('/post', Post_Route);

app.use('/user', User_Route);

mongoose.connect(process.env.MONGO_CONNECT)
  .then(() => {
    app.listen(process.env.APP_PORT, () => {
      console.log(`Server is running on port ${process.env.APP_PORT}`);
    });
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });
