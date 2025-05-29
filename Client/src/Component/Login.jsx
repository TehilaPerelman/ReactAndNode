// // -----------------------------------------------------
// import React, { useState } from "react";
// import axiosInstance from "../api/axiosConfig";
// import { useForm } from "react-hook-form";
// import { Link } from "react-router-dom";

// import { useNavigate } from "react-router-dom";
// import {
//   Box,
//   TextField,
//   Button,
//   Typography,
//   Paper,
//   CircularProgress,
//   Alert,
// } from "@mui/material";

// const Login = () => {
//   const navigate = useNavigate();
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const [loading, setLoading] = useState(false);
//   const [loginError, setLoginError] = useState(null);

// //   const onSubmit = async (data) => {
// //     setLoading(true); // התחלת טעינה
// //     setLoginError(null); // איפוס שגיאה
// //     try {
      
// //       const res = await axiosInstance.post("/auth/login", data); // נתיב מותאם לפי השרת שלך
// //       const token = res.data.token; // קבלת ה-token
// //       localStorage.setItem("token", token); // שמירת ה-token ב-localStorage
// //       // alert("התחברת בהצלחה!");
// //       alert("התחברת בהצלחה!");
// // setTimeout(() => {
// // navigate("/feed");
// // }, 100);
// //       setLoginError(error.response?.data?.message || "שגיאה בהתחברות. בדוק מייל וסיסמה.");
// //       console.error("Login failed:", error);
// //     } finally {
// //       setLoading(false); // סיום טעינה
// //     }
    
//   const onSubmit = async (data) => {
//   setLoading(true); // התחלת טעינה
//   setLoginError(null); // איפוס שגיאה
//   try {
//     const res = await axiosInstance.post("/auth/login", data); // נתיב מותאם לפי השרת שלך
//     const token = res.data.token; // קבלת ה-token
//     localStorage.setItem("token", token); // שמירת ה-token ב-localStorage
//     alert("התחברת בהצלחה!");
//     setTimeout(() => {
//       navigate("/feed");
//     }, 100);
//   } catch (error) {
//     setLoginError(error.response?.data?.message || "שגיאה בהתחברות. בדוק מייל וסיסמה.");
//     console.error("Login failed:", error);
//   } finally {
//     setLoading(false); // סיום טעינה
//   }
// };


//   return (
//     <Box
//       sx={{
//         minHeight: "87vh",
//         width: "100vw",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         background: "#f9f4ef",
//       }}
//     >
//       <Paper sx={{ padding: 3, maxWidth: 400, width: "100%" }}>
//         <Typography variant="h4" gutterBottom>
//           התחברות
//         </Typography>
//         {loginError && (
//           <Alert severity="error" sx={{ mb: 2 }}>
//             {loginError}
//           </Alert>
//         )}
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <TextField
//             fullWidth
//             label="Email"
//             type="email"
//             variant="outlined"
//             margin="normal"
//             {...register("email", { required: "שדה חובה" })}
//             error={!!errors.email}
//             helperText={errors.email?.message}
//           />
//           <TextField
//             fullWidth
//             label="Password"
//             type="password"
//             variant="outlined"
//             margin="normal"
//             {...register("password", { required: "שדה חובה" })}
//             error={!!errors.password}
//             helperText={errors.password?.message}
//           />
//           <Button
//             type="submit"
//             variant="contained"
//             fullWidth
//             sx={{ mt: 2 }}
//             disabled={loading}
//           >
//             {loading ? <CircularProgress size={24} color="inherit" /> : "התחבר"}
//           </Button>
//         </form>
//       </Paper>
//     </Box>
//   );
// };

// export default Login;
import React, { useState } from "react";
import axiosInstance from "../api/axiosConfig";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  CircularProgress,
  Alert,
} from "@mui/material";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const onSubmit = async (data) => {
    setLoading(true);
    setLoginError(null);
    try {
      // const res = await axiosInstance.post("/auth/login", data);
      const res = await axiosInstance.post("/user/loginUser", data);

      const token = res.data.token;
      localStorage.setItem("token", token);
      alert("התחברת בהצלחה!");
      setTimeout(() => {
        navigate("/feed");
      }, 100);
    } catch (error) {
      setLoginError(error.response?.data?.message || "שגיאה בהתחברות. בדוק מייל וסיסמה.");
      console.error("Login failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "87vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f9f4ef",
      }}
    >
      <Paper sx={{ padding: 3, maxWidth: 400, width: "100%" }}>
        <Typography variant="h4" gutterBottom>
          התחברות
        </Typography>

        {loginError && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {loginError}
          </Alert>
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            fullWidth
            label="Email"
            type="email"
            variant="outlined"
            margin="normal"
            {...register("email", {
              required: "שדה חובה",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "כתובת אימייל לא תקינה",
              },
            })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            {...register("password", {
              required: "שדה חובה",
              minLength: {
                value: 6,
                message: "סיסמה חייבת להכיל לפחות 6 תווים",
              },
            })}
            error={!!errors.password}
            helperText={errors.password?.message}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 2 }}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : "התחבר"}
          </Button>

          <Typography variant="body2" sx={{ mt: 2, textAlign: "center" }}>
            אין לך משתמש? <Link to="/register">הרשם כאן</Link>
          </Typography>
        </form>
      </Paper>
    </Box>
  );
};

export default Login;
