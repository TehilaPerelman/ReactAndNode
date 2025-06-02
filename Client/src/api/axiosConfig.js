
// import axios from "axios";

// const axiosInstance = axios.create({
//   baseURL: "http://localhost:3000", // שימי לב: אם את ב-React, צריך להיות זהה לכתובת של השרת
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
//   (error) => Promise.reject(error)
// );

// // Interceptor לתגובה - טיפול בשגיאות אימות
// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response?.status === 401) {
//       alert("ההתחברות פגה. נא להתחבר שוב.");
//       localStorage.removeItem("token");

//       // טיפ: ודאי ש-page /login קיים בפרויקט שלך
//       window.location.href = "/login";
//     }
//     return Promise.reject(error);
//   }
// );

// export default axiosInstance;
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000", // שימי לב לכתובת השרת
});

// Interceptor לבקשות - מוסיף Authorization Header אם יש טוקן
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

// Interceptor לתגובות - טיפול בשגיאות אימות
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      alert("ההתחברות פגה. נא להתחבר שוב.");
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
