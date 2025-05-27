// // import axios from 'axios';

// // const axiosInstance = axios.create({
// //   baseURL: 'http://localhost:3001',  // הכתובת של ה-API ב-Node.js
// //   headers: {
// //     'Content-Type': 'application/json',
// //   },
// // });

// // export default axiosInstance;
// // import axios from 'axios';

// // const axiosInstance = axios.create({
// //   baseURL: 'http://localhost:3001',
// //   headers: {
// //     'Content-Type': 'application/json',
// //   },
// // });

// // // Interceptor להוספת Authorization Header אוטומטית
// // axiosInstance.interceptors.request.use(
// //   (config) => {
// //     const token = localStorage.getItem('token');
// //     if (token) {
// //       config.headers['Authorization'] = `Bearer ${token}`;
// //     }
// //     return config;
// //   },
// //   (error) => {
// //     return Promise.reject(error);
// //   }
// // );

// // export default axiosInstance;

// import axios from "axios";

// // יצירת מופע של axios
// const axiosInstance = axios.create({
//   baseURL: "http://localhost:3001", // כתובת ה-API שלך
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// // Interceptor שיבדוק אם יש Token ב-localStorage ויוסיף אותו לכל בקשה
// axiosInstance.interceptors.request.use(
//   (config) => {
//     // קבלת ה-token מה-localStorage
//     const token = localStorage.getItem("token");
    
//     // אם יש Token, נוסיף אותו לכותרת Authorization
//     if (token) {
//       config.headers["Authorization"] = `Bearer ${token}`;
//     }

//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// export default axiosInstance;
// import axios from "axios";

// const axiosInstance = axios.create({
//   baseURL: "http://localhost:8080",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// // הוספת Interceptor לבקשה כדי להוסיף טוקן
// axiosInstance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       config.headers["Authorization"] = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// // הוספת Interceptor לתגובה כדי לטפל בשגיאות אימות
// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response && error.response.status === 401) {
//       alert("Session expired. Please log in again.");
//       localStorage.removeItem("token");
//       window.location.href = "/login"; // ניתוב לעמוד התחברות
//     }
//     return Promise.reject(error);
//   }
// );

// export default axiosInstance;

// // src/api/axiosConfig.js
// import axios from "axios";

// const axiosInstance = axios.create({
//   baseURL: "http://localhost:8080", // שים לב לעדכן לפי כתובת השרת שלך
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// // Interceptor לבקשה - מוסיף Authorization Header אם יש טוקן
// axiosInstance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       config.headers["Authorization"] = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// // Interceptor לתגובה - מטפל בשגיאות אימות
// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response && error.response.status === 401) {
//       alert("ההתחברות פגה. נא להתחבר שוב.");
//       localStorage.removeItem("token");
//       window.location.href = "/login"; // מעביר לעמוד ההתחברות
//     }
//     return Promise.reject(error);
//   }
// );

// export default axiosInstance;


import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000", // שימי לב: אם את ב-React, צריך להיות זהה לכתובת של השרת
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor לבקשה - מוסיף Authorization Header אם יש טוקן
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor לתגובה - טיפול בשגיאות אימות
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      alert("ההתחברות פגה. נא להתחבר שוב.");
      localStorage.removeItem("token");

      // טיפ: ודאי ש-page /login קיים בפרויקט שלך
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
