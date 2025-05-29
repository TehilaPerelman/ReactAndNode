
// // const express = require('express');
// // const mongoose = require('mongoose');
// // const dotenv = require('dotenv');
// // const cors = require('cors');
// // const Post_Route = require('../Server/Routes/Post_Route');

// // const User_Route = require('./Routes/User_Route');
// // const Product_Route = require('../Server/Routes/Post_Route');

// // dotenv.config();

// // const app = express();
// // app.use(cors());
// // app.use(express.json());
// // app.use('/post', Post_Route);

// // app.use('/user', User_Route);
// // app.use('/product', Product_Route);

// // mongoose.connect(process.env.MONGO_CONNECT)
// //     .then(() => {
// //         app.listen(process.env.APP_PORT, () => {
// //             console.log(` Server is running on port ${process.env.APP_PORT}`);
// //         });
// //     })
// //     .catch(err => console.log(' MongoDB connection error:', err));
// const express = require('express');
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const cors = require('cors');

// // רוט לפוסטים בלבד
// const Post_Route = require('../Server/Routes/Post_Route'); // שנה את הנתיב אם צריך בהתאם למבנה התיקיות שלך

// // רוט למשתמשים (אם יש לך)
// const User_Route = require('../Server/Routes/User_Route'); // שנה בהתאם למיקום הקובץ

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// // נתיב לפוסטים
// app.use('/post', Post_Route);

// // נתיב למשתמשים (אם יש צורך)
// app.use('/user', User_Route);

// // חיבור ל־MongoDB והאזנה לשרת
// mongoose.connect(process.env.MONGO_CONNECT)
//   .then(() => {
//     app.listen(process.env.APP_PORT, () => {
//       console.log(`Server is running on port ${process.env.APP_PORT}`);
//     });
//   })
//   .catch(err => {
//     console.error('MongoDB connection error:', err);
//   });
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// רוט לפוסטים בלבד
const Post_Route = require('./Routes/Post_Route');

// רוט למשתמשים
const User_Route = require('./Routes/User_Route');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// נתיב לפוסטים
app.use('/post', Post_Route);

// נתיב למשתמשים
app.use('/user', User_Route);
// חיבור ל־MongoDB והאזנה לשרת
mongoose.connect(process.env.MONGO_CONNECT)
  .then(() => {
    app.listen(process.env.APP_PORT, () => {
      console.log(`Server is running on port ${process.env.APP_PORT}`);
    });
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });