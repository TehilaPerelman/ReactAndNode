
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../api/axiosConfig";
import {
  Box,
  Typography,
  Avatar,
  Button,
  CircularProgress,
  Alert,
  Paper,
} from "@mui/material";

const UserProfile = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const fetchUser = async () => {
      try {
        const res = await axiosInstance.get(`/users/${id}`);
        if (isMounted) {
          setUser(res.data);
          setError(null);
        }
      } catch (err) {
        console.error("שגיאה בטעינת פרופיל המשתמש:", err);
        if (isMounted) {
          setError("לא ניתן לטעון את פרופיל המשתמש.");
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    fetchUser();

    return () => {
      isMounted = false;
    };
  }, [id]);

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }

  if (!user) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
        <Alert severity="warning">משתמש לא נמצא.</Alert>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 5,
        px: 2,
      }}
    >
      <Paper sx={{ p: 4, width: "100%", maxWidth: 500, textAlign: "center" }}>
        <Avatar
          src={user.profilePicture || undefined} 
          alt={user.UserName || "פרופיל משתמש"}
          sx={{ width: 100, height: 100, margin: "auto", mb: 2 }}
        />
        <Typography variant="h4" gutterBottom>
          {user.UserName || "משתמש ללא שם"}
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          {user.bio?.trim() ? user.bio : "אין ביוגרפיה זמינה."}
        </Typography>
        <Button variant="contained" color="primary" onClick={() => alert('כפתור עריכה עדיין לא פעיל')}>
          ערוך פרופיל
        </Button>
      </Paper>
    </Box>
  );
};

export default UserProfile;
