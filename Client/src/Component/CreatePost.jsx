// // // // import { useDispatch } from "react-redux";
// // // // import { useState } from "react";
// // // // import { AddRecipeMain } from "../Store/RecipeListSlice";
// // // // import { useForm } from "react-hook-form"; 
// // // // import {Box, TextField, Button,Typography,List,ListItem,ListItemText, IconButton,Paper,Divider} from "@mui/material";
// // // // import DeleteIcon from "@mui/icons-material/Delete";
// // // // import { Link } from "react-router-dom";  
// // // // import axios from "axios";
// // // // const AddRecipe = () => {
// // // //   const dispatch = useDispatch();

// // // //   const {
// // // //     register,
// // // //     handleSubmit,
// // // //     formState: { errors },
// // // //   } = useForm();

// // // //   const [ingredients, setIngredients] = useState([]);
// // // //   const [temp, setTemp] = useState("");

// // // //   const Add = () => {
// // // //     if (temp.trim() !== "") {
// // // //       setIngredients((prev) => [...prev, temp]);
// // // //       setTemp("");
// // // //     }
// // // //   };

// // // //   const Remove = (index) => {
// // // //     setIngredients((prev) => prev.filter((_, i) => i !== index));
// // // //   };

// // // //   const saveRecipe = (data) => {
// // // //     const newRecipe = {
// // // //       name: data.name,
// // // //       time: parseInt(data.time),
// // // //       ingredients,
// // // //       category: data.category,
// // // //       isFavorite: false,
// // // //     };
// // // //      dispatch(AddRecipeMain(newRecipe));

// // // //      setIngredients([]);
// // // //      setTemp(""); 
// // // //   };

// // // //   return (
// // // //     <Box
// // // //       sx={{
// // // //         minHeight: "100vh",
// // // //         width: "100vw",
// // // //         display: "flex",
// // // //         flexDirection: "column",
// // // //         alignItems: "center",
// // // //         justifyContent: "flex-start",
// // // //         background: "#f9f4ef",
// // // //         overflowX: "hidden",
// // // //       }}
// // // //     >
// // // //       <Paper
// // // //         elevation={3}
// // // //         sx={{
// // // //           width: "90%",
// // // //           maxWidth: "800px",
// // // //           mt: 3,
// // // //           borderRadius: 4,
// // // //           p: 4,
// // // //           background: "#ffffff",
// // // //           boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
// // // //         }}
// // // //       >
// // // //         <Typography
// // // //           variant="h5"
// // // //           gutterBottom
// // // //           sx={{
// // // //             color: "#8b6a4a",
// // // //             fontWeight: "bold",
// // // //             textAlign: "center",
// // // //             mb: 3,
// // // //           }}
// // // //         >
// // // //           המתכון הפרטי
// // // //         </Typography>
// // // //         <form onSubmit={handleSubmit(saveRecipe)}>
// // // //           <Box
// // // //             sx={{
// // // //               display: "flex",
// // // //               flexDirection: "column",
// // // //               alignItems: "center",
// // // //               gap: 2,
// // // //             }}
// // // //           >
// // // //             <TextField
// // // //               fullWidth
// // // //               label="שם המתכון"
// // // //               variant="outlined"
// // // //               {...register("name", { required: "שם המתכון חובה" })}
// // // //               sx={{
// // // //                 mb: 2,
// // // //                 background: "#f9f9f9",
// // // //                 borderRadius: 2,
// // // //                 fontSize: "0.9rem",
// // // //                 maxWidth: "400px",
// // // //                 textAlign: "right",
// // // //               }}
// // // //               InputProps={{ sx: { height: 40 } }} error={!!errors.name}
             
// // // //             />
// // // //               {errors.name && <span style={{ color: 'red' }}>{errors.name.message}</span>}
            
// // // //             <TextField
// // // //               fullWidth
// // // //               type="number"
// // // //               label="זמן הכנה (בדקות)"
// // // //               variant="outlined"
// // // //               {...register("time", { required: "זמן הכנה חובה" })}
// // // //               sx={{
// // // //                 mb: 2,
// // // //                 background: "#f9f9f9",
// // // //                 borderRadius: 2,
// // // //                 fontSize: "0.9rem",
// // // //                 maxWidth: "400px",
// // // //                 textAlign: "right",
// // // //               }}
// // // //               InputProps={{ sx: { height: 40 } }}
// // // //               error={!!errors.time}
// // // //             />
// // // //                {errors.time && <span style={{ color: 'red' }}>{errors.time.message}</span>}
            
// // // //             <TextField
// // // //               fullWidth
// // // //               label="קטגוריה"
// // // //               variant="outlined"
// // // //               {...register("category", { required: "קטגוריה חובה" })}
// // // //               sx={{
// // // //                 mb: 3,
// // // //                 background: "#f9f9f9",
// // // //                 borderRadius: 2,
// // // //                 fontSize: "0.9rem",
// // // //                 maxWidth: "400px",
// // // //                 textAlign: "right",
// // // //               }}
// // // //               InputProps={{ sx: { height: 40 } }}
// // // //               error={!!errors.category}
// // // //             />
// // // //             {errors.category && <span style={{ color: 'red' }}>{errors.category.message}</span>}
// // // //           </Box>
// // // //           <Divider sx={{ my: 3, background: "#d3b88c" }} />
// // // //           <Typography
// // // //             variant="h5"
// // // //             gutterBottom
// // // //             sx={{
// // // //               color: "#8b6a4a",
// // // //               fontWeight: "bold",
// // // //               textAlign: "center",
// // // //             }}
// // // //           >
// // // //             רכיבים
// // // //           </Typography>
// // // //           <Box
// // // //             sx={{
// // // //               display: "flex",
// // // //               flexDirection: "column",
// // // //               alignItems: "center",
// // // //               gap: 2,
// // // //             }}
// // // //           >
// // // //             <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
// // // //               <TextField  fullWidth  
// // // //                 label="רכיב חדש"
// // // //                 variant="outlined"
// // // //                 value={temp}
// // // //                 onChange={(e) => setTemp(e.target.value)}
// // // //                 sx={{
// // // //                   background: "#f9f4ef",
// // // //                   borderRadius: 2,
// // // //                   fontSize: "0.9rem",
// // // //                   maxWidth: "400px",
// // // //                   textAlign: "right",
// // // //                 }}
// // // //                  InputProps={{ sx: { height: 40 } }}
// // // //               />
// // // //               <Button
// // // //                 variant="contained"
// // // //                  sx={{
// // // //                   background: "#d3b88c",
// // // //                   ":hover": { background: "#b89e78" },
// // // //                   fontWeight: "bold",
// // // //                   px: 3,
// // // //                 }}
// // // //                 onClick={Add}
// // // //               >
// // // //                 הוסף
// // // //               </Button>
// // // //             </Box>
// // // //             <List sx={{ background: "#f9f4ef", borderRadius: 2, p: 2 }}>
// // // //                  {ingredients.map((ingredient, index) => (
// // // //                  <ListItem
// // // //                   key={index}
// // // //                   sx={{
// // // //                     mb: 1,
// // // //                     background: "#ffffff",
// // // //                     borderRadius: 2,
// // // //                     boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
// // // //                   }}
// // // //                 >
// // // //                   <ListItemText
// // // //                     primary={ingredient}
// // // //                     sx={{
// // // //                       textAlign: "right",
// // // //                       color: "#000",
// // // //                       fontFamily: "'Segoe UI', 'Arial', sans-serif",
// // // //                       fontSize: "1rem",
// // // //                       fontWeight: "bold",
// // // //                     }}
// // // //                   />
// // // //                   <IconButton
// // // //                      edge="end"
// // // //                      onClick={() => Remove(index)}
// // // //                     sx={{
// // // //                       color: "#d3b88c",
// // // //                       ":hover": { color: "#b89e78" },
// // // //                     }}
// // // //                   >
// // // //                     <DeleteIcon />
// // // //                   </IconButton>
// // // //                 </ListItem>
// // // //               ))}
// // // //             </List>
// // // //           </Box>
// // // //           <Box
// // // //             sx={{
// // // //               width: "90%",
// // // //               maxWidth: "800px",
// // // //               mt: 3,
// // // //               display: "flex",
// // // //               justifyContent: "center",
// // // //             }}
// // // //           >
// // // //             <Button
// // // //               variant="contained"
// // // //               sx={{
// // // //                  background: "#b89e78",
// // // //                  color: "#fff",
// // // //                  fontWeight: "bold",
// // // //                  fontSize: "1rem",
// // // //                  borderRadius: 4,
// // // //                  py: 1,
// // // //                  px: 4,
// // // //                  ":hover": { background: "#8b6a4a" },
// // // //                  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
// // // //               }}
// // // //               type="submit"
// // // //             >
// // // //               <Link to="/"  style={{ color: 'white', textDecoration: 'none' }}>
// // // //                    שמור מתכון
// // // //               </Link>
// // // //             </Button>
// // // //           </Box>
// // // //         </form>
// // // //        </Paper>
// // // //     </Box>
// // // //   );
// // // // };

// // // // export default AddRecipe;


// // // import { useDispatch } from "react-redux"; 
// // // import { useState } from "react";
// // //  import { AddRecipeMain } from "../Store/RecipeListSlice";
// // //  import { useForm } from "react-hook-form"; 
// // //  import axios from "axios";
// // //  import { Box, TextField, Button, Typography, List, ListItem, ListItemText, IconButton, Paper, Divider, } from "@mui/material"; import DeleteIcon from "@mui/icons-material/Delete"; import { Link } from "react-router-dom";

// // // const AddRecipe = () => { const dispatch = useDispatch();
// // //  const { register, handleSubmit, formState: { errors }, } = useForm();

// // // const [ingredients, setIngredients] = useState([]);
// // //  const [temp, setTemp] = useState("");

// // // const Add = () => { if (temp.trim() !== "") { setIngredients((prev) => [...prev, temp]); setTemp(""); } };

// // // const Remove = (index) => { setIngredients((prev) => prev.filter((_, i) => i !== index)); };

// // // const saveRecipe = async (data) => { const newRecipe = { name: data.name, time: parseInt(data.time), ingredients, category: data.category, isFavorite: false, };


// // // try {
// // //   const res = await axios.post("http://localhost:8080/recipes", newRecipe);
// // //   console.log("המתכון נשמר בשרת:", res.data);

// // //   // הוספה ל-Redux
// // //   dispatch(AddRecipeMain(res.data));

// // //   setIngredients([]);
// // //   setTemp("");
// // // } catch (err) {
// // //   console.error("שגיאה בשמירת המתכון:", err);
// // // }
// // // };

// // // return ( <Box sx={{ minHeight: "100vh", width: "100vw", display: "flex", flexDirection: "column", alignItems: "center", background: "#f9f4ef", }} > <Paper elevation={3} sx={{ width: "90%", maxWidth: "800px", mt: 3, borderRadius: 4, p: 4, background: "#ffffff", }} > <Typography variant="h5" gutterBottom sx={{ color: "#8b6a4a", fontWeight: "bold", textAlign: "center", mb: 3 }} > המתכון הפרטי </Typography>


// // //     <form onSubmit={handleSubmit(saveRecipe)}>
// // //       <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
// // //         <TextField
// // //           fullWidth
// // //           label="שם המתכון"
// // //           variant="outlined"
// // //           {...register("name", { required: "שם המתכון חובה" })}
// // //           error={!!errors.name}
// // //           sx={{ mb: 2, maxWidth: "400px", background: "#f9f9f9", borderRadius: 2 }}
// // //         />
// // //         {errors.name && <span style={{ color: "red" }}>{errors.name.message}</span>}

// // //         <TextField
// // //           fullWidth
// // //           label="זמן הכנה (בדקות)"
// // //           type="number"
// // //           variant="outlined"
// // //           {...register("time", { required: "זמן הכנה חובה" })}
// // //           error={!!errors.time}
// // //           sx={{ mb: 2, maxWidth: "400px", background: "#f9f9f9", borderRadius: 2 }}
// // //         />
// // //         {errors.time && <span style={{ color: "red" }}>{errors.time.message}</span>}

// // //         <TextField
// // //           fullWidth
// // //           label="קטגוריה"
// // //           variant="outlined"
// // //           {...register("category", { required: "קטגוריה חובה" })}
// // //           error={!!errors.category}
// // //           sx={{ mb: 2, maxWidth: "400px", background: "#f9f9f9", borderRadius: 2 }}
// // //         />
// // //         {errors.category && <span style={{ color: "red" }}>{errors.category.message}</span>}
// // //       </Box>

// // //       <Divider sx={{ my: 3 }} />

// // //       <Typography variant="h6" sx={{ color: "#8b6a4a", textAlign: "center", mb: 2 }}>
// // //         רכיבים
// // //       </Typography>

// // //       <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
// // //         <TextField
// // //           fullWidth
// // //           label="רכיב חדש"
// // //           value={temp}
// // //           onChange={(e) => setTemp(e.target.value)}
// // //           sx={{ maxWidth: "400px", background: "#f9f4ef", borderRadius: 2 }}
// // //         />
// // //         <Button variant="contained" onClick={Add} sx={{ background: "#d3b88c" }}>
// // //           הוסף
// // //         </Button>
// // //       </Box>

// // //       <List sx={{ mt: 2 }}>
// // //         {ingredients.map((ingredient, index) => (
// // //           <ListItem
// // //             key={index}
// // //             sx={{
// // //               background: "#ffffff",
// // //               mb: 1,
// // //               borderRadius: 2,
// // //               boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
// // //             }}
// // //           >
// // //             <ListItemText primary={ingredient} sx={{ textAlign: "right" }} />
// // //             <IconButton onClick={() => Remove(index)} sx={{ color: "#d3b88c" }}>
// // //               <DeleteIcon />
// // //             </IconButton>
// // //           </ListItem>
// // //         ))}
// // //       </List>

// // //       <Box sx={{ mt: 3, display: "flex", justifyContent: "center" }}>
// // //         <Button
// // //           type="submit"
// // //           variant="contained"
// // //           sx={{ background: "#b89e78", color: "#fff", fontWeight: "bold" }}
// // //         >
// // //           <Link to="/" style={{ color: "white", textDecoration: "none" }}>
// // //             שמור מתכון
// // //           </Link>
// // //         </Button>
// // //       </Box>
// // //     </form>
// // //   </Paper>
// // // </Box>
// // // ); };

// // // export default AddRecipe

// // import React, { useState } from 'react';
// // import { useDispatch } from 'react-redux';
// // import { useForm } from 'react-hook-form';
// // import axios from 'axios';
// // import { Box, TextField, Button, Typography } from '@mui/material';
// // import { useNavigate } from 'react-router-dom';

// // const AddRecipe = () => {
// //   // Form handling
// //   const { register, handleSubmit, formState: { errors } } = useForm();
// //   const [errorMessage, setErrorMessage] = useState('');
// //   const navigate = useNavigate();

// //   // Dispatch actions if needed
// //   const dispatch = useDispatch();

// //   // Function to handle form submission
// //   const onSubmit = async (data) => {
// //     try {
// //       // Make POST request to create a new recipe
// //       const response = await axios.post('http://localhost:5000/recipes/createRecipe', data, {
// //         headers: {
// //           'Authorization': `Bearer ${localStorage.getItem('token')}`, // JWT token for authentication
// //         }
// //       });

// //       // If successful, redirect to the recipe list page
// //       if (response.status === 200) {
// //         navigate('/recipeList');
// //       }
// //     } catch (error) {
// //       setErrorMessage('Failed to add recipe. Please try again.');
// //       console.error(error);
// //     }
// //   };

// //   return (
// //     <Box sx={{ maxWidth: 500, margin: 'auto', padding: 2 }}>
// //       <Typography variant="h5" gutterBottom>Add New Recipe</Typography>
// //       <form onSubmit={handleSubmit(onSubmit)}>
// //         <TextField
// //           label="Recipe Name"
// //           variant="outlined"
// //           fullWidth
// //           margin="normal"
// //           {...register('name', { required: 'Recipe name is required' })}
// //           error={!!errors.name}
// //           helperText={errors.name?.message}
// //         />
// //         <TextField
// //           label="Ingredients"
// //           variant="outlined"
// //           fullWidth
// //           margin="normal"
// //           {...register('ingredients', { required: 'Ingredients are required' })}
// //           error={!!errors.ingredients}
// //           helperText={errors.ingredients?.message}
// //         />
// //         <TextField
// //           label="Instructions"
// //           variant="outlined"
// //           fullWidth
// //           margin="normal"
// //           multiline
// //           rows={4}
// //           {...register('instructions', { required: 'Instructions are required' })}
// //           error={!!errors.instructions}
// //           helperText={errors.instructions?.message}
// //         />
// //         <Button type="submit" variant="contained" color="primary" fullWidth>
// //           Add Recipe
// //         </Button>
// //       </form>

// //       {errorMessage && (
// //         <Typography color="error" sx={{ marginTop: 2 }}>
// //           {errorMessage}
// //         </Typography>
// //       )}
// //     </Box>
// //   );
// // };

// // export default AddRecipe;


// import { useState } from 'react';
// import axiosInstance from '../api/axiosConfig';

// const AddRecipe = () => {
//   const [title, setTitle] = useState('');
//   const [instructions, setInstructions] = useState('');
//   const [createdId, setCreatedId] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axiosInstance.post('/recipes', { title, instructions });
//       alert('Recipe created successfully!');
//       setCreatedId(res.data._id); // שמור את ה-ID של המתכון החדש
//       setTitle('');
//       setInstructions('');
//     } catch (error) {
//       console.error('Error creating recipe:', error);
//       alert('Failed to create recipe.');
//     }
//   };

//   const handleDelete = async () => {
//     if (!createdId) return;
//     try {
//       await axiosInstance.delete(`/recipes/${createdId}`);
//       alert('Recipe deleted successfully!');
//       setCreatedId(null);
//     } catch (error) {
//       console.error('Error deleting recipe:', error);
//       alert('Failed to delete recipe.');
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <h2>Create Recipe</h2>
//         <input
//           type="text"
//           placeholder="Recipe Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <br />
//         <textarea
//           placeholder="Instructions"
//           value={instructions}
//           onChange={(e) => setInstructions(e.target.value)}
//         />
//         <br />
//         <button type="submit">Add Recipe</button>
//       </form>

//       {createdId && (
//         <button
//           onClick={handleDelete}
//           style={{ marginTop: '10px', color: 'white', backgroundColor: 'red', padding: '8px', border: 'none', cursor: 'pointer' }}
//         >
//           Delete This Recipe
//         </button>
//       )}
//     </div>
//   );
// };

// export default AddRecipe;



// import { useState } from 'react';
// import axiosInstance from '../api/axiosConfig';

// const AddRecipe = () => {
//   const [title, setTitle] = useState('');
//   const [instructions, setInstructions] = useState('');
//   const [createdId, setCreatedId] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axiosInstance.post('/recipe/createRecipe', {
//         title,
//         instructions,
//       });
//       alert('Recipe created successfully!');
//       setCreatedId(res.data._id); // שמור את ה-ID של המתכון החדש
//       setTitle('');
//       setInstructions('');
//     } catch (error) {
//       console.error('Error creating recipe:', error);
//       alert('Failed to create recipe.');
//     }
//   };

//   const handleDelete = async () => {
//     if (!createdId) return;
//     try {
//       await axiosInstance.delete(`/recipe/deleteRecipe/${createdId}`);
//       alert('Recipe deleted successfully!');
//       setCreatedId(null);
//     } catch (error) {
//       console.error('Error deleting recipe:', error);
//       alert('Failed to delete recipe.');
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <h2>Create Recipe</h2>
//         <input
//           type="text"
//           placeholder="Recipe Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <br />
//         <textarea
//           placeholder="Instructions"
//           value={instructions}
//           onChange={(e) => setInstructions(e.target.value)}
//         />
//         <br />
//         <button type="submit">Add Recipe</button>
//       </form>

//       {createdId && (
//         <button
//           onClick={handleDelete}
//           style={{
//             marginTop: '10px',
//             color: 'white',
//             backgroundColor: 'red',
//             padding: '8px',
//             border: 'none',
//             cursor: 'pointer',
//           }}
//         >
//           Delete This Recipe
//         </button>
//       )}
//     </div>
//   );
// };

// export default AddRecipe;
// ______________________________________
// import { useState } from 'react';
// import axiosInstance from '../api/axiosConfig';

// const CreatePost = () => {
//   const [content, setContent] = useState('');
//   const [postId, setPostId] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axiosInstance.post('/post/create', { content });
//       alert('Post created successfully!');
//       setPostId(res.data._id);
//       setContent('');
//     } catch (error) {
//       console.error('Error creating post:', error);
//       alert('Failed to create post.');
//     }
//   };

//   const handleDelete = async () => {
//     if (!postId) return;
//     try {
//       await axiosInstance.delete(`/post/${postId}`);
//       alert('Post deleted successfully!');
//       setPostId(null);
// //     } catch (error) {
// //       console.error('Error deleting post:', error);
// //       alert('Failed to delete post.');
// //     }
// //   };

// //   return (
// //     <div>
// //       <form onSubmit={handleSubmit}>
// //         <h2>Create New Post</h2>
// //         <textarea
// //           placeholder="What's on your mind?"
// //           value={content}
// //           onChange={(e) => setContent(e.target.value)}
// //           rows={4}
// //           style={{ width: '100%' }}
// //         />
// //         <br />
// //         <button type="submit">Post</button>
// //       </form>

// //       {postId && (
// //         <button
// //           onClick={handleDelete}
// //           style={{
// //             marginTop: '10px',
// //             color: 'white',
// //             backgroundColor: 'red',
// //             padding: '8px',
// //             border: 'none',
// //             cursor: 'pointer',
// //           }}
// //         >
// //           Delete This Post
// //         </button>
// //       )}
// //     </div>
// //   );
// // };

// // // export default CreatePost;

// // import { useState } from 'react';
// // import { useDispatch } from 'react-redux';
// // import { addPost } from '../Store/postsSlice';
// // import { Box, TextField, Button, Typography } from '@mui/material';

// // const CreatePost = () => {
// //   const dispatch = useDispatch();
// //   const [content, setContent] = useState('');

// //   const handlePost = () => {
// //     if (content.trim()) {
// //       dispatch(addPost({ content }));
// //       setContent('');
// //     }
// //   };

// //   return (
// //     <Box sx={{ maxWidth: 500, margin: '20px auto', textAlign: 'center' }}>
// //       <Typography variant="h5" gutterBottom>צור פוסט חדש</Typography>
// //       <TextField
// //         fullWidth
// //         variant="outlined"
// //         label="תוכן הפוסט"
// //         multiline
// //         rows={4}
// //         value={content}
// //         onChange={(e) => setContent(e.target.value)}
// //         sx={{ marginBottom: 2 }}
// //       />
// //       <Button variant="contained" onClick={handlePost} disabled={!content.trim()}>
// //         פרסם פוסט
// //       </Button>
// //     </Box>
// //   );
// // };

// // export default CreatePost;
// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addPost } from '../Store/postsSlice';
// import { Box, TextField, Button, Typography } from '@mui/material';

// const CreatePost = () => {
//   const dispatch = useDispatch();
//   // נניח שהמידע של המשתמש שמור ב-state.auth.user
//   const user = useSelector(state => state.auth.user);
//   const [content, setContent] = useState('');

//   const handlePost = () => {
//     if (content.trim()) {
//       // שולחים גם את פרטי המשתמש (כגון UserName או _id) יחד עם תוכן הפוסט
//       dispatch(addPost({ 
//         content, 
//         author: { 
//           UserName: user?.UserName || 'אנונימי',
//           _id: user?._id || null
//         }
//       }));
//       setContent('');
//     }
//   };

//   return (
//     <Box sx={{ maxWidth: 500, margin: '20px auto', textAlign: 'center' }}>
//       <Typography variant="h5" gutterBottom>צור פוסט חדש</Typography>
//       <TextField
//         fullWidth
//         variant="outlined"
//         label="תוכן הפוסט"
//         multiline
//         rows={4}
//         value={content}
//         onChange={(e) => setContent(e.target.value)}
//         sx={{ marginBottom: 2 }}
//       />
//       <Button variant="contained" onClick={handlePost} disabled={!content.trim()}>
//         פרסם פוסט
//       </Button>
//     </Box>
//   );
// };

// export default CreatePost;
// // // 

// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addPost } from '../Store/postsSlice';
// import { Box, TextField, Button, Typography } from '@mui/material';

// const CreatePost = () => {
//   const dispatch = useDispatch();
//   const user = useSelector(state => state.auth?.user ?? { UserName: 'אנונימי', _id: null });
//   const [content, setContent] = useState('');

//   const handlePost = () => {
//     if (content.trim()) {
//       dispatch(addPost({ 
//         content, 
//         author: { 
//           UserName: user.UserName || 'אנונימי',
//           _id: user._id || null
//         }
//       }));
//       setContent('');
//     }
//   };

//   return (
//     <Box sx={{ maxWidth: 500, margin: '20px auto', textAlign: 'center' }}>
//       <Typography variant="h5" gutterBottom>צור פוסט חדש</Typography>
//       <TextField
//         fullWidth
//         variant="outlined"
//         label="תוכן הפוסט"
//         multiline
//         rows={4}
//         value={content}
//         onChange={(e) => setContent(e.target.value)}
//         sx={{ marginBottom: 2 }}
//       />
//       <Button variant="contained" onClick={handlePost} disabled={!content.trim()}>
//         פרסם פוסט
//       </Button>
//     </Box>
//   );
// };

// export default CreatePost;



// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addPost } from '../Store/postsSlice';
// import { Box, TextField, Button, Typography } from '@mui/material';

// const CreatePost = () => {
//   const dispatch = useDispatch();
//   const user = useSelector(state => state.auth?.user ?? { UserName: 'אנונימי', _id: null });

//   const [title, setTitle] = useState('');
//   const [subject, setSubject] = useState('');
//   const [writerName, setWriterName] = useState(user.UserName || 'אנונימי');

//   const handlePost = () => {
//     if (title.trim() && subject.trim() && writerName.trim()) {
//       dispatch(addPost({
//         title,
//         subject,
//         writerName,
//       }));
//       setTitle('');
//       setSubject('');
//     }
//   };

//   return (
//     <Box sx={{ maxWidth: 500, margin: '20px auto', textAlign: 'center' }}>
//       <Typography variant="h5" gutterBottom>צור פוסט חדש</Typography>

//       <TextField
//         fullWidth
//         variant="outlined"
//         label="כותרת"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         sx={{ marginBottom: 2 }}
//       />

//       <TextField
//         fullWidth
//         variant="outlined"
//         label="נושא"
//         value={subject}
//         onChange={(e) => setSubject(e.target.value)}
//         sx={{ marginBottom: 2 }}
//       />

//       <TextField
//         fullWidth
//         variant="outlined"
//         label="שם הכותב"
//         value={writerName}
//         onChange={(e) => setWriterName(e.target.value)}
//         sx={{ marginBottom: 2 }}
//       />

//       <Button 
//         variant="contained" 
//         onClick={handlePost} 
//         disabled={!title.trim() || !subject.trim() || !writerName.trim()}
//       >
//         פרסם פוסט
//       </Button>
//     </Box>
//   );
// };

// export default CreatePost;



import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../Store/postsSlice';
import { Box, TextField, Button, Typography } from '@mui/material';

const CreatePost = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth?.user ?? { UserName: 'אנונימי', _id: null });

  const [title, setTitle] = useState('');
  const [subject, setSubject] = useState('');
  const [writerName, setWriterName] = useState(user.UserName || 'אנונימי');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePost = async () => {
    if (!title.trim() || !subject.trim() || !writerName.trim()) return;

    setLoading(true);
    setError(null);

    try {
      // הנחה ש־addPost היא thunk async שמחזירה Promise
      await dispatch(addPost({ title, subject, writerName })).unwrap();

      setTitle('');
      setSubject('');
      // השארת writerName כפי שהוא — כנראה שם המשתמש המחובר

    } catch (err) {
      setError('שגיאה בפרסום הפוסט. נסה שנית.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ maxWidth: 500, margin: '20px auto', textAlign: 'center' }}>
      <Typography variant="h5" gutterBottom>צור פוסט חדש</Typography>

      <TextField
        fullWidth
        variant="outlined"
        label="כותרת"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        sx={{ marginBottom: 2 }}
      />

      <TextField
        fullWidth
        variant="outlined"
        label="נושא"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        sx={{ marginBottom: 2 }}
      />

      <TextField
        fullWidth
        variant="outlined"
        label="שם הכותב"
        value={writerName}
        // במידה וזה שם מחובר שאסור לשנות - ננעל את השדה
        disabled
        sx={{ marginBottom: 2 }}
      />

      {error && (
        <Typography color="error" sx={{ marginBottom: 2 }}>
          {error}
        </Typography>
      )}

      <Button 
        variant="contained" 
        onClick={handlePost} 
        disabled={!title.trim() || !subject.trim() || !writerName.trim() || loading}
      >
        {loading ? 'טוען...' : 'פרסם פוסט'}
      </Button>
    </Box>
  );
};

export default CreatePost;
