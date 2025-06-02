
// // const express = require('express');
// // const mongoose = require('mongoose');
// // const dotenv = require('dotenv');
// // const cors = require('cors');

// // // רוט לפוסטים בלבד
// // const Post_Route = require('./Routes/Post_Route');

// // // רוט למשתמשים
// // const User_Route = require('./Routes/User_Route');

// // dotenv.config();

// // const app = express();
// // app.use(cors());
// // app.use(express.json());

// // // נתיב לפוסטים
// // app.use('/post', Post_Route);

// // // נתיב למשתמשים
// // app.use('/user', User_Route);

// // // חיבור ל־MongoDB והאזנה לשרת
// // mongoose.connect(process.env.MONGO_CONNECT)
// //   .then(() => {
// //     app.listen(process.env.APP_PORT, () => {
// //       console.log(`Server is running on port ${process.env.APP_PORT}`);
// //     });
// //   })
// //   .catch(err => {
// //     console.error('MongoDB connection error:', err);
// //   });
// const express = require('express');
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const cors = require('cors');
// const path = require('path'); // ✅ נדרש בשביל ניהול נתיבים

// // רוט לפוסטים בלבד
// const Post_Route = require('./Routes/Post_Route');

// // רוט למשתמשים
// const User_Route = require('./Routes/User_Route');

// dotenv.config();

// const app = express();

// // ✅ נגישות לתמונות מתוך תיקיית uploads
// app.use('/UpImg', express.static(path.join(__dirname, 'UpImg')));

// app.use(cors());
// app.use(express.json());

// // נתיב לפוסטים
// app.use('/post', Post_Route);

// // נתיב למשתמשים
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
const path = require('path'); // נדרש לניהול נתיב תקיית התמונות

// רוט לפוסטים בלבד
const Post_Route = require('./Routes/Post_Route');

// רוט למשתמשים
const User_Route = require('./Routes/User_Route');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ הגשת קבצי תמונה מתיקיית UpImg
app.use('/UpImg', express.static(path.join(__dirname, 'UpImg')));

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
