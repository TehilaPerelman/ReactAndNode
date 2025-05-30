
// // // // import { Link, useLocation } from "react-router-dom";
// // // // import { useState, useEffect } from "react";
// // // // import { useSelector } from "react-redux";
// // // // import Box from "@mui/material/Box";
// // // // import Button from "@mui/material/Button";
// // // // import Paper from "@mui/material/Paper";
// // // // import List from "@mui/material/List";
// // // // import ListItem from "@mui/material/ListItem";
// // // // import Divider from "@mui/material/Divider";
// // // // import HomeRounded from "@mui/icons-material/HomeRounded";
// // // // import TextField from "@mui/material/TextField";
// // // // import Typography from "@mui/material/Typography";

// // // // const AppBar = () => {
// // // //     const arr = useSelector((state) => state.RecipeList.arr); 
// // // //      const [recipe, setRecipe] = useState(null); 
// // // //      const [recipe2, setRecipe2] = useState(""); 
// // // //      const [flag, setFlag] = useState(false);
// // // //      const location = useLocation(); 

// // // //   const Search = () => {
// // // //      setFlag(true); 
// // // //      if (!recipe2.trim()) {
// // // //       setRecipe(null);
// // // //       return; 
// // // //     }
// // // //     const foundRecipe = arr.find((item) => item.name.trim() === recipe2.trim());
// // // //     setRecipe(foundRecipe || null); 
// // // //   };


// // // //   useEffect(() => {
// // // //      setRecipe(null);
// // // //      setRecipe2("");
// // // //      setFlag(false);
// // // //    }, [location]);


// // // //   return (
// // // //     <Box
// // // //       sx={{
// // // //         position: "sticky",
// // // //         top: 0,
// // // //         left: 0,
// // // //         zIndex: 10,
// // // //         background: "rgba(255, 255, 255, 0.95)",
// // // //         boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
// // // //         direction: "rtl",
// // // //       }}
// // // //     >
// // // //       <Paper
// // // //         elevation={0}
// // // //         sx={{
// // // //           width: "100%",
// // // //           maxWidth: "none",
// // // //           p: 2,
// // // //           borderRadius: 0,
// // // //           display: "flex",
// // // //           justifyContent: "space-between",
// // // //           alignItems: "center",
// // // //         }}
// // // //       >

// // // //         <List
// // // //           sx={{
// // // //             display: "flex",
// // // //             justifyContent: "flex-start",
// // // //             alignItems: "center",
// // // //             gap: 2,
// // // //             padding: 0,
// // // //           }}
// // // //         >

// // // //           <ListItem disablePadding sx={{ width: "auto" }}>
// // // //             <Button
// // // //               component={Link}
// // // //               to="/Home"
// // // //               sx={{
// // // //                 color: "#5e4429",
// // // //                 ":hover": { color: "#8c6e52" },
// // // //                 minWidth: 0,
// // // //                 padding: 1,
// // // //               }}
// // // //             >
// // // //               <HomeRounded fontSize="large" />
// // // //             </Button>
// // // //           </ListItem>

// // // //           <ListItem disablePadding sx={{ width: "auto" }}>
// // // //             <Button
// // // //               component={Link}
// // // //               to="/Home"
// // // //               sx={{
// // // //                 whiteSpace: "nowrap",
// // // //                 fontWeight: "bold",
// // // //                 color: "#5e4429",
// // // //                 ":hover": { color: "#8c6e52" },
// // // //                 paddingX: 2,
// // // //               }}
// // // //             >
// // // //               דף הבית
// // // //             </Button>
// // // //            </ListItem>
// // // //             <Divider orientation="vertical" flexItem />
// // // //            <ListItem disablePadding sx={{ width: "auto" }}>
// // // //             <Button
// // // //               component={Link}
// // // //               to="/RecipeList"
// // // //               sx={{
// // // //                 whiteSpace: "nowrap",
// // // //                 fontWeight: "bold",
// // // //                 color: "#5e4429",
// // // //                 ":hover": { color: "#8c6e52" },
// // // //                 paddingX: 2,
// // // //               }}
// // // //             >
// // // //               רשימת מתכונים
// // // //             </Button>
// // // //             </ListItem>
// // // //             <Divider orientation="vertical" flexItem />
// // // //             <ListItem disablePadding sx={{ width: "auto" }}>
// // // //             <Button
// // // //               component={Link}
// // // //               to="/AddRecipe"
// // // //               sx={{
// // // //                 whiteSpace: "nowrap",
// // // //                 fontWeight: "bold",
// // // //                 color: "#5e4429",
// // // //                 ":hover": { color: "#8c6e52" },
// // // //                 paddingX: 2,
// // // //               }}
// // // //             >
// // // //               הוספת מתכון
// // // //             </Button>
// // // //             </ListItem>
// // // //             <Divider orientation="vertical" flexItem />
// // // //             <ListItem disablePadding sx={{ width: "auto" }}>
// // // //             <Button
// // // //               component={Link}
// // // //               to="/Login"
// // // //               sx={{
// // // //                 whiteSpace: "nowrap",
// // // //                 fontWeight: "bold",
// // // //                 color: "#5e4429",
// // // //                 ":hover": { color: "#8c6e52" },
// // // //                 paddingX: 2,
// // // //               }}
// // // //             >
// // // //               התחברות
// // // //             </Button>
// // // //           </ListItem>
// // // //         </List>

// // // //         <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
// // // //           <TextField
// // // //             label="חפש מתכון"
// // // //             value={recipe2}
// // // //             onChange={(e) => {
// // // //               setRecipe2(e.target.value);
// // // //               setFlag(false); 
// // // //             }}
// // // //             size="small"
// // // //             sx={{
// // // //               width: "250px",
// // // //               borderRadius: 3,
// // // //               border: "1px solid #ccc",
// // // //               background: "white",
// // // //               boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
// // // //             }}
// // // //             InputProps={{
// // // //               sx: {
// // // //                 pl: 2,
// // // //                 color: "#5e4429",
// // // //                 fontSize: "0.9rem",
// // // //                 fontWeight: "500",
// // // //               },
// // // //             }}
// // // //           />
// // // //           <Button
// // // //             variant="contained"
// // // //             onClick={Search}
// // // //             sx={{
// // // //               background: "linear-gradient(90deg, #8c6e52, #5e4429)",
// // // //               ":hover": { background: "linear-gradient(90deg, #5e4429, #8c6e52)" },
// // // //               color: "white",
// // // //               fontWeight: "bold",
// // // //               px: 3,
// // // //               borderRadius: 3,
// // // //               ml:3
// // // //             }}
// // // //           >
// // // //             חפש
// // // //           </Button>
// // // //         </Box>
// // // //       </Paper>

  
// // // //       {flag && (
// // // //         <Box
// // // //           sx={{
// // // //             mt: 2,
// // // //             p: 2,
// // // //             background: "rgba(255, 255, 255, 0.9)",
// // // //             borderRadius: 2,
// // // //             boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
// // // //             textAlign: "center",
// // // //           }}
// // // //         >
// // // //           {recipe ? (
// // // //             <>
// // // //               <Typography variant="h6" sx={{ fontWeight: "bold", color: "#5e4429" }}>
// // // //                 פרטי המתכון:
// // // //               </Typography>
// // // //               <Typography sx={{ color: "#5e4429" }}>שם: {recipe.name}</Typography>
// // // //               <Typography sx={{ color: "#5e4429" }}>זמן הכנה: {recipe.time} דקות</Typography>
// // // //               <Typography sx={{ color: "#5e4429" }}>
// // // //                 מצרכים: {recipe.ingredients.join(", ")}
// // // //             </Typography>
// // // //              <Typography sx={{ color: "#5e4429" }}>קטגוריה: {recipe.category}</Typography>
// // // //              <Typography sx={{ color: "#5e4429" }}>
// // // //                   מועדף: {recipe.isFavorite ? "כן" : "לא"}
// // // //               </Typography>
// // // //             </>
// // // //            ) : (
// // // //               <Typography sx={{ fontWeight: "bold", color: "#8c6e52" }}>
// // // //               מתכון לא נמצא!
// // // //             </Typography>
// // // //           )}
// // // //         </Box>
// // // //       )}
// // // //     </Box>
    
// // // //    );
// // // // };

// // // // export default AppBar;
// // // import { Link, useLocation } from "react-router-dom";
// // // import { useState, useEffect } from "react";

// // // import { useSelector } from "react-redux";
// // // import Box from "@mui/material/Box";
// // // import Button from "@mui/material/Button";
// // // import Paper from "@mui/material/Paper";
// // // import List from "@mui/material/List";
// // // import ListItem from "@mui/material/ListItem";
// // // import Divider from "@mui/material/Divider";
// // // import HomeRounded from "@mui/icons-material/HomeRounded";
// // // import TextField from "@mui/material/TextField";
// // // import Typography from "@mui/material/Typography";

// // // const AppBar = () => {
// // //   const posts = useSelector((state) => state.posts.items); // שימוש ברדאקס לפוסטים
// // //   const [post, setPost] = useState(null);
// // //   const [searchTerm, setSearchTerm] = useState("");
// // //   const [flag, setFlag] = useState(false);
// // //   const location = useLocation();

// // //   const Search = () => {
// // //     setFlag(true);
// // //     if (!searchTerm.trim()) {
// // //       setPost(null);
// // //       return;
// // //     }
// // //     const foundPost = posts.find((item) => item.content.includes(searchTerm));
// // //     setPost(foundPost || null);
// // //   };

// // //   useEffect(() => {
// // //     setPost(null);
// // //     setSearchTerm("");
// // //     setFlag(false);
// // //   }, [location]);

// // //   return (
// // //     <Box
// // //       sx={{
// // //         position: "sticky",
// // //         top: 0,
// // //         left: 0,
// // //         zIndex: 10,
// // //         background: "rgba(255, 255, 255, 0.95)",
// // //         boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
// // //         direction: "rtl",
// // //       }}
// // //     >
// // //       <Paper
// // //         elevation={0}
// // //         sx={{
// // //           width: "100%",
// // //           maxWidth: "none",
// // //           p: 2,
// // //           borderRadius: 0,
// // //           display: "flex",
// // //           justifyContent: "space-between",
// // //           alignItems: "center",
// // //         }}
// // //       >
// // //         <List
// // //           sx={{
// // //             display: "flex",
// // //             justifyContent: "flex-start",
// // //             alignItems: "center",
// // //             gap: 2,
// // //             padding: 0,
// // //           }}
// // //         >
// // //           <ListItem disablePadding sx={{ width: "auto" }}>
// // //             <Button
// // //               component={Link}
// // //               to="/home"
// // //               sx={{
// // //                 color: "#5e4429",
// // //                 ":hover": { color: "#8c6e52" },
// // //                 minWidth: 0,
// // //                 padding: 1,
// // //               }}
// // //             >
// // //               <HomeRounded fontSize="large" />
// // //             </Button>
// // //           </ListItem>

// // //           <ListItem disablePadding sx={{ width: "auto" }}>
// // //             <Button
// // //               component={Link}
// // //               to="/feed"
// // //               sx={{
// // //                 whiteSpace: "nowrap",
// // //                 fontWeight: "bold",
// // //                 color: "#5e4429",
// // //                 ":hover": { color: "#8c6e52" },
// // //                 paddingX: 2,
// // //               }}
// // //             >
// // //               פיד פוסטים
// // //             </Button>
// // //           </ListItem>
// // //           <Divider orientation="vertical" flexItem />

// // //           <ListItem disablePadding sx={{ width: "auto" }}>
// // //             <Button
// // //               component={Link}
// // //               to="/create-post"
// // //               sx={{
// // //                 whiteSpace: "nowrap",
// // //                 fontWeight: "bold",
// // //                 color: "#5e4429",
// // //                 ":hover": { color: "#8c6e52" },
// // //                 paddingX: 2,
// // //               }}
// // //             >
// // //               יצירת פוסט
// // //             </Button>
// // //           </ListItem>
// // //           <Divider orientation="vertical" flexItem />

// // //           <ListItem disablePadding sx={{ width: "auto" }}>
// // //             <Button
// // //               component={Link}
// // //               to="/login"
// // //               sx={{
// // //                 whiteSpace: "nowrap",
// // //                 fontWeight: "bold",
// // //                 color: "#5e4429",
// // //                 ":hover": { color: "#8c6e52" },
// // //                 paddingX: 2,
// // //               }}
// // //             >
// // //               התחברות
// // //             </Button>
// // //           </ListItem>
// // //         </List>
// // // <ListItem disablePadding sx={{ width: "auto" }}>
// // //   <Button
// // //     component={Link}
// // //     to="/register"
// // //     sx={{
// // //       whiteSpace: "nowrap",
// // //       fontWeight: "bold",
// // //       color: "#5e4429",
// // //       ":hover": { color: "#8c6e52" },
// // //       paddingX: 2,
// // //     }}
// // //   >
// // //     הרשמה
// // //   </Button>
// // // </ListItem>

// // //         <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
// // //           <TextField
// // //             label="חפש פוסט"
// // //             value={searchTerm}
// // //             onChange={(e) => {
// // //               setSearchTerm(e.target.value);
// // //               setFlag(false);
// // //             }}
// // //             size="small"
// // //             sx={{ width: "250px", background: "white" }}
// // //           />
// // //           <Button variant="contained" onClick={Search}>
// // //             חפש
// // //           </Button>
// // //         </Box>
// // //       </Paper>

// // //       {flag && (
// // //         <Box
// // //           sx={{
// // //             mt: 2,
// // //             p: 2,
// // //             background: "rgba(255, 255, 255, 0.9)",
// // //             borderRadius: 2,
// // //             textAlign: "center",
// // //           }}
// // //         >
// // //           {post ? (
// // //             <>
// // //               <Typography variant="h6">
// // //                 פוסט נמצא:
// // //               </Typography>
// // //               <Typography>תוכן: {post.content}</Typography>
// // //               <Typography>שם משתמש: {post.author?.UserName || 'אנונימי'}</Typography>
// // //               <Typography>תאריך: {new Date(post.createdAt).toLocaleString()}</Typography>
// // //             </>
// // //           ) : (
// // //             <Typography>פוסט לא נמצא!</Typography>
// // //           )}
// // //         </Box>
// // //       )}
// // //     </Box>
// // //   );
// // // };

// // // export default AppBar;
// // import { Link, useLocation } from "react-router-dom";
// // import { useState, useEffect } from "react";
// // import { useSelector } from "react-redux";
// // import {
// //   Box,
// //   Button,
// //   Paper,
// //   List,
// //   ListItem,
// //   Divider,
// //   TextField,
// //   Typography,
// // } from "@mui/material";
// // import HomeRounded from "@mui/icons-material/HomeRounded";

// // const AppBar = () => {
// //   const posts = useSelector((state) => state.posts.items);
// //   const [post, setPost] = useState(null);
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [flag, setFlag] = useState(false);
// //   const location = useLocation();

// //   const Search = () => {
// //     setFlag(true);
// //     if (!searchTerm.trim()) {
// //       setPost(null);
// //       return;
// //     }
// //     const foundPost = posts.find((item) =>
// //       item.title.includes(searchTerm)
// //     );
// //     setPost(foundPost || null);
// //   };

// //   useEffect(() => {
// //     setPost(null);
// //     setSearchTerm("");
// //     setFlag(false);
// //   }, [location]);

// //   return (
// //     <Box
// //       sx={{
// //         position: "sticky",
// //         top: 0,
// //         left: 0,
// //         zIndex: 10,
// //         background: "rgba(255, 255, 255, 0.95)",
// //         boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
// //         direction: "rtl",
// //       }}
// //     >
// //       <Paper
// //         elevation={0}
// //         sx={{
// //           width: "100%",
// //           maxWidth: "none",
// //           p: 2,
// //           borderRadius: 0,
// //           display: "flex",
// //           justifyContent: "space-between",
// //           alignItems: "center",
// //         }}
// //       >
// //         <List
// //           sx={{
// //             display: "flex",
// //             justifyContent: "flex-start",
// //             alignItems: "center",
// //             gap: 2,
// //             padding: 0,
// //           }}
// //         >
// //           <ListItem disablePadding sx={{ width: "auto" }}>
// //             <Button component={Link} to="/home" sx={{ color: "#5e4429", ":hover": { color: "#8c6e52" }, minWidth: 0, padding: 1 }}>
// //               <HomeRounded fontSize="large" />
// //             </Button>
// //           </ListItem>
// //           <ListItem disablePadding sx={{ width: "auto" }}>
// //             <Button component={Link} to="/feed" sx={{ whiteSpace: "nowrap", fontWeight: "bold", color: "#5e4429", ":hover": { color: "#8c6e52" }, paddingX: 2 }}>
// //               פיד פוסטים
// //             </Button>
// //           </ListItem>
// //           <Divider orientation="vertical" flexItem />
// //           <ListItem disablePadding sx={{ width: "auto" }}>
// //             <Button component={Link} to="/create-post" sx={{ whiteSpace: "nowrap", fontWeight: "bold", color: "#5e4429", ":hover": { color: "#8c6e52" }, paddingX: 2 }}>
// //               יצירת פוסט
// //             </Button>
// //           </ListItem>
// //           <Divider orientation="vertical" flexItem />
// //           <ListItem disablePadding sx={{ width: "auto" }}>
// //             <Button component={Link} to="/login" sx={{ whiteSpace: "nowrap", fontWeight: "bold", color: "#5e4429", ":hover": { color: "#8c6e52" }, paddingX: 2 }}>
// //               התחברות
// //             </Button>
// //           </ListItem>
// //           <ListItem disablePadding sx={{ width: "auto" }}>
// //             <Button component={Link} to="/register" sx={{ whiteSpace: "nowrap", fontWeight: "bold", color: "#5e4429", ":hover": { color: "#8c6e52" }, paddingX: 2 }}>
// //               הרשמה
// //             </Button>
// //           </ListItem>
// //         </List>

// //         <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
// //           <TextField
// //             label="חפש לפי כותרת"
// //             value={searchTerm}
// //             onChange={(e) => {
// //               setSearchTerm(e.target.value);
// //               setFlag(false);
// //             }}
// //             size="small"
// //             sx={{ width: "250px", background: "white" }}
// //           />
// //           <Button variant="contained" onClick={Search}>
// //             חפש
// //           </Button>
// //         </Box>
// //       </Paper>

// //       {flag && (
// //         <Box
// //           sx={{
// //             mt: 2,
// //             p: 2,
// //             background: "rgba(255, 255, 255, 0.9)",
// //             borderRadius: 2,
// //             textAlign: "center",
// //           }}
// //         >
// //           {post ? (
// //             <>
// //               <Typography variant="h6">פוסט נמצא:</Typography>
// //               <Typography>כותרת: {post.title}</Typography>
// //               <Typography>שם כותב: {post.writerName}</Typography>
// //               <Typography>תאריך: {new Date(post.createdAt).toLocaleString()}</Typography>
// //             </>
// //           ) : (
// //             <Typography>לא נמצא פוסט עם כותרת זו.</Typography>
// //           )}
// //         </Box>
// //       )}
// //     </Box>
// //   );
// // };

// // export default AppBar;
// import { Link, useLocation } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
// import {
//   Box,
//   Button,
//   Paper,
//   List,
//   ListItem,
//   Divider,
//   TextField,
//   Typography,
// } from "@mui/material";
// import HomeRounded from "@mui/icons-material/HomeRounded";

// const AppBar = () => {
//   const posts = useSelector((state) => state.posts.items);
//   const [post, setPost] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [flag, setFlag] = useState(false);
//   const location = useLocation();

//   const Search = () => {
//     setFlag(true);
//     if (!searchTerm.trim()) {
//       setPost(null);
//       return;
//     }
//     const foundPost = posts.find((item) =>
//       item.title.includes(searchTerm)
//     );
//     setPost(foundPost || null);
//   };

//   useEffect(() => {
//     setPost(null);
//     setSearchTerm("");
//     setFlag(false);
//   }, [location]);

//   return (
//     <Box
//       sx={{
//         position: "sticky",
//         top: 0,
//         left: 0,
//         zIndex: 10,
//         background: "rgba(255, 255, 255, 0.95)",
//         boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
//         direction: "rtl",
//       }}
//     >
//       <Paper
//         elevation={0}
//         sx={{
//           width: "93vw",
//           maxWidth: "none",
//           p: 2,
//           borderRadius: 0,
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//         }}
//       >
//         <List
//           sx={{
//             display: "flex",
//             justifyContent: "flex-start",
//             alignItems: "center",
//             gap: 2,
//             padding: 0,
//           }}
//         >
//           <ListItem disablePadding sx={{ width: "auto" }}>
//             <Button component={Link} to="/" sx={{ color: "#5e4429", ":hover": { color: "#8c6e52" }, minWidth: 0, padding: 1 }}>
//               <HomeRounded fontSize="large" />
//             </Button>
//           </ListItem>
//           <ListItem disablePadding sx={{ width: "auto" }}>
//             <Button component={Link} to="/feed" sx={{ whiteSpace: "nowrap", fontWeight: "bold", color: "#5e4429", ":hover": { color: "#8c6e52" }, paddingX: 2 }}>
//               פיד פוסטים
//             </Button>
//           </ListItem>
//           <Divider orientation="vertical" flexItem />
//           <ListItem disablePadding sx={{ width: "auto" }}>
//             <Button component={Link} to="/create-post" sx={{ whiteSpace: "nowrap", fontWeight: "bold", color: "#5e4429", ":hover": { color: "#8c6e52" }, paddingX: 2 }}>
//               יצירת פוסט
//             </Button>
//           </ListItem>
//           <Divider orientation="vertical" flexItem />
//           <ListItem disablePadding sx={{ width: "auto" }}>
//             <Button component={Link} to="/login" sx={{ whiteSpace: "nowrap", fontWeight: "bold", color: "#5e4429", ":hover": { color: "#8c6e52" }, paddingX: 2 }}>
//               התחברות
//             </Button>
//           </ListItem>
//           <ListItem disablePadding sx={{ width: "auto" }}>
//             <Button component={Link} to="/register" sx={{ whiteSpace: "nowrap", fontWeight: "bold", color: "#5e4429", ":hover": { color: "#8c6e52" }, paddingX: 2 }}>
//               הרשמה
//             </Button>
//           </ListItem>
//         </List>

//         <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
//           <TextField
//             label="חפש לפי כותרת"
//             value={searchTerm}
//             onChange={(e) => {
//               setSearchTerm(e.target.value);
//               setFlag(false);
//             }}
//             size="small"
//             sx={{ width: "250px", background: "white" }}
//           />
//           <Button variant="contained" onClick={Search}>
//             חפש
//           </Button>
//         </Box>
//       </Paper>

//       {flag && (
//         <Box
//           sx={{
//             mt: 2,
//             p: 2,
//             background: "rgba(255, 255, 255, 0.9)",
//             borderRadius: 2,
//             textAlign: "center",
//           }}
//         >
//           {post ? (
//             <>
//               <Typography variant="h6">פוסט נמצא:</Typography>
//               <Typography>כותרת: {post.title}</Typography>
//               <Typography>שם כותב: {post.writerName}</Typography>
//               <Typography>תאריך: {new Date(post.createdAt).toLocaleString()}</Typography>
//               <Button
//                 component={Link}
//                 to={`/posts/${post._id}`}
//                 variant="contained"
//                 sx={{ mt: 2 }}
//               >
//                 לצפייה בפוסט
//               </Button>
//             </>
//           ) : (
//             <Typography>לא נמצא פוסט עם כותרת זו.</Typography>
//           )}
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default AppBar;
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
        background: "#e8f5e9",
        borderBottom: "1px solid #c8e6c9",
        boxShadow: "0 4px 12px rgba(0, 128, 0, 0.1)",
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
                  color: "#2e7d32",
                  minWidth: item.icon ? 0 : undefined,
                  px: item.icon ? 1 : 2,
                  ":hover": { color: "#1b5e20", background: "#f1f8e9" },
                }}
              >
                {item.icon || item.label}
              </Button>
              {idx < 4 && <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />}
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
            }}
          />
          <Button
            variant="contained"
            onClick={Search}
            sx={{
              background: "#66bb6a",
              ":hover": { background: "#4caf50" },
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
            borderTop: "1px solid #c8e6c9",
            textAlign: "center",
            borderRadius: 0,
          }}
        >
          {post ? (
            <>
              <Typography variant="h6" sx={{ color: "#388e3c" }}>פוסט נמצא:</Typography>
              <Typography>כותרת: {post.title}</Typography>
              <Typography>שם כותב: {post.writerName}</Typography>
              <Typography>
                תאריך: {new Date(post.createdAt).toLocaleString()}
              </Typography>
              <Button
                component={Link}
                to={`/posts/${post._id}`}
                variant="contained"
                sx={{ mt: 2, background: "#81c784", ":hover": { background: "#66bb6a" } }}
              >
                לצפייה בפוסט
              </Button>
            </>
          ) : (
            <Typography sx={{ color: "gray" }}>לא נמצא פוסט עם כותרת זו.</Typography>
          )}
        </Box>
      )}
    </Box>
  );
};

export default AppBar;
