
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Box,
  Button,
  Paper,
  List,
  ListItem,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import HomeRounded from "@mui/icons-material/HomeRounded";

const AppBar = () => {
  const posts = useSelector((state) => state.posts.items);
  const [post, setPost] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [flag, setFlag] = useState(false);
  const location = useLocation();

  const Search = () => {
    setFlag(true);
    if (!searchTerm.trim()) {
      setPost(null);
      return;
    }
    const foundPost = posts.find((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setPost(foundPost || null);
  };

  useEffect(() => {
    setPost(null);
    setSearchTerm("");
    setFlag(false);
  }, [location]);

  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 10,
        direction: "rtl",
        background: "#f5f5f5",
        borderBottom: "1px solid #ccc",
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
      }}
    >
      <Paper
        elevation={0}
        sx={{
          maxWidth: "1000px",
          mx: "auto",
          px: 3,
          py: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "transparent",
        }}
      >
        <List
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            padding: 0,
          }}
        >
          {[
            { to: "/", icon: <HomeRounded fontSize="large" />, label: null },
            { to: "/feed", label: "פיד פוסטים" },
            { to: "/create-post", label: "יצירת פוסט" },
            { to: "/login", label: "התחברות" },
            { to: "/register", label: "הרשמה" },
          ].map((item, idx) => (
            <ListItem key={idx} disablePadding sx={{ width: "auto" }}>
              <Button
                component={Link}
                to={item.to}
                sx={{
                  fontWeight: "bold",
                  color: "#0d47a1", 
                  minWidth: item.icon ? 0 : undefined,
                  px: item.icon ? 1 : 2,
                  ":hover": { color: "#ffffff", background: "#00bcd4" }, 
                }}
              >
                {item.icon || item.label}
              </Button>
              {idx < 4 && <Divider orientation="vertical" flexItem sx={{ mx: 1, borderColor: "#bbb" }} />}
            </ListItem>
          ))}
        </List>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <TextField
            label="חפש לפי כותרת"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setFlag(false);
            }}
            size="small"
            sx={{
              width: 240,
              background: "#ffffff",
              borderRadius: 1,
              input: { color: "#212121" },
              label: { color: "#616161" },
            }}
            InputLabelProps={{ style: { color: '#9e9e9e' } }}
          />
          <Button
            variant="contained"
            onClick={Search}
            sx={{
              background: "#00bcd4",
              ":hover": { background: "#008ba3" },
              color: "#fff",
            }}
          >
            חפש
          </Button>
        </Box>
      </Paper>

      {flag && (
        <Box
          sx={{
            mt: 1,
            px: 3,
            py: 2,
            background: "#ffffff",
            borderTop: "1px solid #ccc",
            textAlign: "center",
          }}
        >
          {post ? (
            <>
              <Typography variant="h6" sx={{ color: "#0d47a1" }}>פוסט נמצא:</Typography>
              <Typography sx={{ color: "#212121" }}>כותרת: {post.title}</Typography>
              <Typography sx={{ color: "#212121" }}>שם כותב: {post.writerName}</Typography>
              <Typography sx={{ color: "#757575" }}>
                תאריך: {new Date(post.createdAt).toLocaleString()}
              </Typography>
              <Button
                component={Link}
                to={`/posts/${post._id}`}
                variant="contained"
                sx={{ mt: 2, background: "#00acc1", ":hover": { background: "#0097a7" } }}
              >
                לצפייה בפוסט
              </Button>
            </>
          ) : (
            <Typography sx={{ color: "#999" }}>לא נמצא פוסט עם כותרת זו.</Typography>
          )}
        </Box>
      )}
    </Box>
  );
};

export default AppBar;
