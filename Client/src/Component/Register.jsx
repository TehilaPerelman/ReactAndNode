
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Alert,
} from "@mui/material";
import axiosInstance from '../api/axiosConfig'; // ודא שהנתיב נכון

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const onSubmit = async (data) => {
    try {
      setErrorMsg('');
      await axiosInstance.post('/user/registerUser', data);

      setSuccess(true);
      reset();
    } catch (error) {
      setSuccess(false);
      setErrorMsg(error.response?.data?.message || 'שגיאה בהרשמה, נסה שנית');
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
          הרשמה
        </Typography>

        {success && (
          <Alert severity="success" sx={{ mb: 2 }}>
            נרשמת בהצלחה!
          </Alert>
        )}

        {errorMsg && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {errorMsg}
          </Alert>
        )}

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
      
            
          <TextField
  fullWidth
  label="שם משתמש"
  margin="normal"
  {...register("UserName", {
    required: "שדה חובה",
    minLength: {
      value: 3,
      message: "השם חייב להכיל לפחות 3 תווים",
    },
  })}
  error={!!errors.UserName}
  helperText={errors.UserName?.message}
/>


          <TextField
            fullWidth
            label="אימייל"
            type="email"
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
            label="סיסמה"
            type="password"
            margin="normal"
            {...register("password", {
              required: "שדה חובה",
              minLength: {
                value: 6,
                message: "הסיסמה חייבת להכיל לפחות 6 תווים",
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
          >
            הרשמה
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Register;
