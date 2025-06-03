
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
import axiosInstance from '../api/axiosConfig';

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
        background: "#f5f5f5",
        direction: 'rtl'
      }}
    >
      <Paper
        sx={{
          padding: 4,
          maxWidth: 400,
          width: "100%",
          borderRadius: 3,
          boxShadow: "0 2px 12px rgba(0, 0, 0, 0.05)",
          border: "1px solid #ccc",
          backgroundColor: "#ffffff",
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ color: "#0d47a1" }}>
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
            sx={{
              mt: 2,
              backgroundColor: "#00bcd4",
              color: "#fff",
              ':hover': { backgroundColor: "#008ba3" },
            }}
          >
            הרשמה
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Register;