
// // // import { useParams } from "react-router-dom";
// // // import { useSelector } from "react-redux";
// // // import { useEffect, useState } from "react";
// // // import { useDispatch } from "react-redux";
// // // import { favorit } from "../Store/RecipeListSlice";
// // // import { Link } from "react-router-dom";
// // // import Box from "@mui/material/Box";
// // // import Typography from "@mui/material/Typography";
// // // import Button from "@mui/material/Button";
// // // import Paper from "@mui/material/Paper";
// // // import List from "@mui/material/List";
// // // import ListItem from "@mui/material/ListItem";
// // // import Divider from "@mui/material/Divider";

// // // const RecipeDetails = () => {
// // //   const { id } = useParams(); 
// // //   const [recipe, setRecipe] = useState(null); 
// // //   const dispatch = useDispatch();
// // //   const arr = useSelector((state) => state.RecipeList.arr); 
// // //   const Ceack = recipe?.isFavorite;

// // //   useEffect(() => {
// // //     const foundRecipe = arr.find((item) => item.id === Number(id));
// // //     setRecipe(foundRecipe || null);
// // //   }, [id, arr]);

// // //   if (!recipe) {
// // //     return (
// // //       <Typography
// // //         variant="h5"
// // //         color="error"
// // //         align="center"
// // //         sx={{ mt: 4 }}
// // //       >
// // //         מתכון לא נמצא!
// // //       </Typography>
// // //     );
// // //   }

// // //   return (
// // //     <Box
// // //       sx={{
// // //         minHeight: "100vh",
// // //         display: "flex",
// // //         flexDirection: "column",
// // //         alignItems: "center",
// // //         justifyContent: "flex-start",
// // //         py: 3,
// // //         px: 2,
// // //         backgroundColor: "#f9f4ef",
// // //         direction: "rtl", 
// // //       }}
// // //     >
// // //       <Paper
// // //         elevation={3}
// // //         sx={{
// // //           maxWidth: "600px",
// // //           width: "100%",
// // //           p: 3,
// // //           borderRadius: 4,
// // //           background: "rgba(255, 255, 255, 0.9)",
// // //           boxShadow: "0 6px 20px rgba(0, 0, 0, 0.2)",
// // //         }}
// // //       >
   
// // //         {recipe.image && (
// // //           <Box
// // //             component="img"
// // //             src={recipe.image}
// // //             alt={recipe.name}
// // //             sx={{
// // //               width: "100%",
// // //               height: "auto",
// // //               borderRadius: 4,
// // //               mb: 3,
// // //             }}
// // //           />
// // //         )}

// // //         <Typography
// // //           variant="h6"
// // //           sx={{
// // //             fontSize: "1rem", 
// // //             fontWeight: "bold",
// // //             color: "#8c6e52", 
// // //             mb: 1,
// // //           }}
// // //         >
// // //           שם:{" "}
// // //           <Typography
// // //             component="span"
// // //             sx={{
// // //               fontSize: "0.95rem", 
// // //               fontWeight: "normal",
// // //               color: "#5e4429",
// // //             }}
// // //           >
// // //             {recipe.name}
// // //           </Typography>
// // //         </Typography>

// // //         <Typography
// // //           variant="h6"
// // //           sx={{
// // //             fontSize: "1rem",
// // //             fontWeight: "bold",
// // //             color: "#8c6e52",
// // //             mb: 1,
// // //           }}
// // //         >
// // //           קטגוריה:{" "}
// // //           <Typography
// // //             component="span"
// // //             sx={{
// // //               fontSize: "0.95rem",
// // //               fontWeight: "normal",
// // //               color: "#5e4429",
// // //             }}
// // //           >
// // //             {recipe.category}
// // //           </Typography>
// // //         </Typography>

// // //         <Typography
// // //           variant="h6"
// // //           sx={{
// // //             fontSize: "1rem",
// // //             fontWeight: "bold",
// // //             color: "#8c6e52",
// // //             mb: 2,
// // //           }}
// // //         >
// // //           זמן הכנה:{" "}
// // //           <Typography
// // //             component="span"
// // //             sx={{
// // //               fontSize: "0.95rem",
// // //               fontWeight: "normal",
// // //               color: "#5e4429",
// // //             }}
// // //           >
// // //             {recipe.time} דקות
// // //           </Typography>
// // //         </Typography>

// // //         <Typography
// // //           variant="h6"
// // //           sx={{
// // //             fontSize: "1rem",
// // //             fontWeight: "bold",
// // //             color: "#8c6e52",
// // //             mb: 2,
// // //           }}
// // //         >
// // //           רכיבים:
// // //         </Typography>
// // //         <List>
// // //           {recipe.ingredients.map((ingredient, index) => (
// // //             <ListItem
// // //               key={index}
// // //               sx={{
// // //                 p: 0,
// // //                 fontSize: "0.95rem",
// // //                 color: "#5e4429", 
// // //               }}
// // //             >
// // //               <Divider sx={{ my: 1 }} />
// // //               {ingredient}
// // //             </ListItem>
// // //           ))}
// // //         </List>

// // //         <Button
// // //           variant="contained"
// // //           onClick={() => dispatch(favorit(recipe.id))}
// // //           sx={{
// // //             mt: 2,
// // //             width: "100%",
// // //             background: Ceack ? "#8c6e52" : "#d9c2a8",
// // //             ":hover": {
// // //               background: Ceack ? "#5e4429" : "#b89e78",
// // //             },
// // //             color: "#fff",
// // //             fontSize: "0.95rem", 
// // //           }}
// // //         >
// // //           {Ceack ? "הסר ממועדפים" : "הוסף למועדפים"}
// // //         </Button>

// // //         <Button
// // //           component={Link}
// // //           to={`/RecipeList`}
// // //           variant="outlined"
// // //           sx={{
// // //             mt: 2,
// // //             width: "100%",
// // //             fontSize: "0.95rem",
// // //             color: "#8c6e52",
// // //             borderColor: "#8c6e52",
// // //             ":hover": {
// // //               borderColor: "#5e4429",
// // //               color: "#5e4429",
// // //             },
// // //           }}
// // //         >
// // //           חזרה לדף המתכונים
// // //         </Button>
// // //       </Paper>
// // //     </Box>
// // //   );
// // // };

// // // export default RecipeDetails;


// // import { useEffect, useState } from 'react';
// // import { useParams } from 'react-router-dom';
// // import axiosInstance from '../api/axiosConfig';

// // const RecipeDetails = () => {
// //   const { id } = useParams();
// //   const [recipe, setRecipe] = useState({ title: '', instructions: '' });

// //   useEffect(() => {
// //     const fetchRecipe = async () => {
// //       try {
// //         const res = await axiosInstance.get(`/recipes/${id}`);
// //         setRecipe(res.data);
// //       } catch (error) {
// //         console.error('Error fetching recipe:', error);
// //       }
// //     };
// //     fetchRecipe();
// //   }, [id]);

// //   const handleChange = (e) => {
// //     setRecipe({ ...recipe, [e.target.name]: e.target.value });
// //   };

// //   const handleUpdate = async () => {
// //     try {
// //       await axiosInstance.put(`/recipes/${id}`, recipe);
// //       alert('Recipe updated successfully!');
// //     } catch (error) {
// //       console.error('Error updating recipe:', error);
// //     }
// //   };

// //   return (
// //     <div>
// //       <h2>Edit Recipe</h2>
// //       <input
// //         type="text"
// //         name="title"
// //         value={recipe.title}
// //         onChange={handleChange}
// //         placeholder="Title"
// //       />
// //       <br />
// //       <textarea
// //         name="instructions"
// //         value={recipe.instructions}
// //         onChange={handleChange}
// //         placeholder="Instructions"
// //       />
// //       <br />
// //       <button onClick={handleUpdate}>Update Recipe</button>
// //     </div>
// //   );
// // };

// // export default RecipeDetails;








// // import { useEffect, useState } from 'react';
// // import { useParams } from 'react-router-dom';

// // import axiosInstance from '../api/axiosConfig';
// // import { Box, Typography, Avatar, Button } from '@mui/material';

// // const UserProfile = () => {
// //   const { id } = useParams();
// //   const [user, setUser] = useState({ UserName: '', bio: '', profilePicture: '' });

// //   useEffect(() => {
// //     const fetchUser = async () => {
// //       try {
// //         const res = await axiosInstance.get(`/users/${id}`);
// //         setUser(res.data);
// //       } catch (error) {
// //         console.error('Error fetching user profile:', error);
// //       }
// //     };
// //     fetchUser();
// //   }, [id]);

// //   return (
// //     <Box sx={{ textAlign: 'center', padding: 3 }}>
// //       <Avatar src={user.profilePicture} sx={{ width: 100, height: 100, margin: 'auto' }} />
// //       <Typography variant="h4">{user.UserName}</Typography>
// //       <Typography variant="body1" sx={{ marginY: 2 }}>{user.bio}</Typography>
// //       <Button variant="contained">ערוך פרופיל</Button>
// //     </Box>
// //   );
// // };

// // export default UserProfile;



// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axiosInstance from "../api/axiosConfig";
// import {
//   Box,
//   Typography,
//   Avatar,
//   Button,
//   CircularProgress,
//   Alert,
//   Paper,
// } from "@mui/material";

// const UserProfile = () => {
//   const { id } = useParams();
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const res = await axiosInstance.get(`/users/${id}`);
//         setUser(res.data);
//         setError(null);
//       } catch (err) {
//         console.error("שגיאה בטעינת פרופיל המשתמש:", err);
//         setError("לא ניתן לטעון את פרופיל המשתמש.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchUser();
//   }, [id]);

//   if (loading) {
//     return (
//       <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
//         <CircularProgress />
//       </Box>
//     );
//   }

//   if (error) {
//     return (
//       <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
//         <Alert severity="error">{error}</Alert>
//       </Box>
//     );
//   }

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         justifyContent: "center",
//         mt: 5,
//         px: 2,
//       }}
//     >
//       <Paper sx={{ p: 4, width: "100%", maxWidth: 500, textAlign: "center" }}>
//         <Avatar
//           src={user.profilePicture}
//           alt={user.UserName}
//           sx={{ width: 100, height: 100, margin: "auto", mb: 2 }}
//         />
//         <Typography variant="h4" gutterBottom>
//           {user.UserName}
//         </Typography>
//         <Typography variant="body1" sx={{ mb: 3 }}>
//           {user.bio || "אין ביוגרפיה זמינה."}
//         </Typography>
//         <Button variant="contained" color="primary">
//           ערוך פרופיל
//         </Button>
//       </Paper>
//     </Box>
//   );
// };

// export default UserProfile;


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
    let isMounted = true; // למניעת עדכון סטייט לאחר unmount
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
          src={user.profilePicture || undefined} // במקרה של null/empty, לא להציג src
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
