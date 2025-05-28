
// // // // import { useSelector } from "react-redux";
// // // // import { Link } from "react-router-dom";
// // // // import {
// // // //   Box,
// // // //   Typography,
// // // //   Paper,
// // // //   Card,
// // // //   CardContent,
// // // //   CardMedia,
// // // // } from "@mui/material";

// // // // const RecipeList = () => {
// // // //   const arr = useSelector((state) => state.RecipeList.arr);

// // // //   return (
// // // //     <Box
// // // //       sx={{
// // // //         minHeight: "100vh",
// // // //         width: "100vw",
// // // //         display: "flex",
// // // //         flexDirection: "column",
// // // //         alignItems: "center",
// // // //         background: "#f9f4ef",
// // // //         overflowX: "hidden",
// // // //         paddingTop: 2,
// // // //       }}
// // // //     >
     

// // // //       <Paper
// // // //         elevation={3}
// // // //         sx={{
// // // //           width: "90%",
// // // //           maxWidth: "1200px",
// // // //           mt: 3,
// // // //           mb: 3,
// // // //           borderRadius: 4,
// // // //           p: 4,
// // // //           background: "#f9f4ef",
// // // //           boxShadow: "none",
// // // //         }}
// // // //       >
// // // //         <Box
// // // //           sx={{
// // // //             display: "grid",
// // // //             gridTemplateColumns: "repeat(3, 1fr)", 
// // // //             gap: 4,
// // // //           }}
// // // //         >
// // // //           {arr.map((item) => (
// // // //             <Card
// // // //               key={item.id}
// // // //               component={Link}
// // // //               to={`/RecipeList/${item.id}`}
// // // //               sx={{
// // // //                 textDecoration: "none",
// // // //                 borderRadius: 2,
// // // //                 boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
// // // //                 overflow: "hidden",
// // // //                 transition: "transform 0.3s ease",
// // // //                 ":hover": {
// // // //                   transform: "scale(1.05)",
// // // //                   boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
// // // //                 },
// // // //                 height: "350px", 
// // // //               }}
// // // //             >
// // // //               <CardMedia
// // // //                 component="img"
// // // //                 height="200" 
// // // //                 image={item.image}
// // // //                 alt={`תמונה של ${item.name}`}
// // // //               />
// // // //               <CardContent sx={{ backgroundColor: "#f9f4ef" }}>
// // // //                 <Typography
// // // //                   variant="h6"
// // // //                   fontWeight="bold"
// // // //                   sx={{ color: "#8B4513", textAlign: "right" }}
// // // //                 >
// // // //                   שם העוגה: {item.name}
// // // //                 </Typography>
// // // //                 <Typography
// // // //                   sx={{ color: "#8B4513", textAlign: "right" }}
// // // //                 >
// // // //                   <span>זמן הכנה:</span> {item.time} דקות
// // // //                 </Typography>
// // // //                 <Typography
// // // //                   sx={{ color: "#8B4513", textAlign: "right" }}
// // // //                 >
// // // //                   <span>קטגוריה:</span> {item.category}ז
// // // //                 </Typography>
// // // //               </CardContent>
// // // //             </Card>
// // // //           ))}
// // // //         </Box>
// // // //       </Paper>
// // // //     </Box>
// // // //   );
// // // // };

// // // // export default RecipeList;
// // // import React, { useEffect, useState } from 'react';
// // // import axiosInstance from '../api/axiosConfig';  // שימו לב לחיבור ב-axiosConfig
 
// // // const RecipeList = () => {
// // //   const [recipes, setRecipes] = useState([]);

// // //   useEffect(() => {
// // //     axiosInstance.get('/getAllRecipes')  // שליפת נתונים מה-API
// // //       .then(response => {
// // //         setRecipes(response.data);
// // //       })
// // //       .catch(error => {
// // //         console.error("There was an error fetching the recipes:", error);
// // //       });
// // //   }, []);

// // //   return (
// // //     <div>
// // //       {recipes.map(recipe => (
// // //         <div key={recipe.id}>
// // //           <h3>{recipe.name}</h3>
// // //           <p>{recipe.description}</p>
// // //         </div>
// // //       ))}
// // //     </div>
// // //   );
// // // };

// // // export default RecipeList;
// // // ___________________________________________________________________________________________

// // // import { useEffect, useState } from 'react';
// // // import axiosInstance from '../api/axiosConfig';

// // // const RecipeList = () => {
// // //   const [recipes, setRecipes] = useState([]);

// // //   useEffect(() => {
// // //     const fetchRecipes = async () => {
// // //       try {
// // //         const res = await axiosInstance.get('/recipes');
// // //         setRecipes(res.data);
// // //       } catch (error) {
// // //         console.error('Error fetching recipes:', error);
// // //       }
// // //     };

// // //     fetchRecipes();
// // //   }, []);

// // //   return (
// // //     <div>
// // //       <h2>Recipe List</h2>
// // //       {recipes.map((recipe) => (
// // //         <div key={recipe._id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
// // //           <h3>{recipe.title}</h3>
// // //           <p>{recipe.instructions}</p>
// // //         </div>
// // //       ))}
// // //     </div>
// // //   );
// // // };

// // // export default RecipeList;

// // import { useEffect } from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { fetchPosts } from '../features/posts/postsSlice';

// // const PostFeed = () => {
// //   const dispatch = useDispatch();
// //   const { items, status, error } = useSelector((state) => state.posts);

// //   useEffect(() => {
// //     dispatch(fetchPosts());
// //   }, [dispatch]);

// //   if (status === 'loading') return <p>Loading...</p>;
// //   if (status === 'failed') return <p>Error: {error}</p>;

// //   return (
// //     <div>
// //       <h2>Latest Posts</h2>
// //       {items.map((post) => (
// //         <div key={post._id} style={{ border: '1px solid #ccc', margin: 10, padding: 10 }}>
// //           <h4>{post.author?.UserName || 'Anonymous'}</h4>
// //           <p>{post.content}</p>
// //           <small>{new Date(post.createdAt).toLocaleString()}</small>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default PostFeed;
// // import { useEffect } from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// // // import { fetchPosts } from '../features/posts/postsSlice';
// // import { fetchPosts } from '../Store/postsSlice';


// // import axiosInstance from '../api/axiosConfig';
// // import { Box, Typography, Card, CardContent } from '@mui/material';

// // const PostFeed = () => {
// //   const dispatch = useDispatch();
// //   const { items, status, error } = useSelector((state) => state.posts);

// //   useEffect(() => {
// //     // קריאת פוסטים דרך axios
// //     const getPosts = async () => {
// //       try {
// //         const response = await axiosInstance.get('/post/all');
// //         console.log("Fetched posts:", response.data);
// //       } catch (err) {
// //         console.error("Error fetching posts:", err);
// //       }
// //     };
// //     getPosts();
// //     dispatch(fetchPosts());
// //   }, [dispatch]);

// //   if (status === 'loading') return <p>Loading...</p>;
// //   if (status === 'failed') return <p>Error: {error}</p>;

// //   return (
// //     <Box
// //       sx={{
// //         minHeight: '100vh',
// //         width: '100vw',
// //         display: 'flex',
// //         flexDirection: 'column',
// //         alignItems: 'center',
// //         background: '#f9f4ef',
// //         overflowX: 'hidden',
// //         paddingTop: 2,
// //       }}
// //     >
// //       <Typography variant="h4" gutterBottom>Latest Posts</Typography>
// //       <Box
// //         sx={{
// //           display: 'grid',
// //           gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
// //           gap: 3,
// //           width: '90%',
// //           maxWidth: '1200px',
// //         }}
// //       >
// //         {items.map((post) => (
// //           <Card
// //             key={post._id}
// //             sx={{
// //               borderRadius: 2,
// //               boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
// //               transition: 'transform 0.3s ease',
// //               ':hover': {
// //                 transform: 'scale(1.05)',
// //                 boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
// //               },
// //             }}
// //           >
// //             <CardContent>
// //               <Typography variant="h6" fontWeight="bold">
// //                 {post.author?.UserName || 'Anonymous'}
// //               </Typography>
// //               <Typography variant="body1" sx={{ marginY: 1 }}>
// //                 {post.content}
// //               </Typography>
// //               <Typography variant="caption" color="textSecondary">
// //                 {new Date(post.createdAt).toLocaleString()}
// //               </Typography>
// //             </CardContent>
// //           </Card>
// //         ))}
// //       </Box>
// //     </Box>
// //   );
// // };

// // // export default PostFeed;
// // import { useEffect } from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { fetchPosts } from '../Store/postsSlice'; // נתיב נכון לפי מבנה הפרויקט
// // import axiosInstance from '../api/axiosConfig';
// // import { Box, Typography, Card, CardContent } from '@mui/material';

// // const PostFeed = () => {
// //   const dispatch = useDispatch();
// //   const { items, status, error } = useSelector((state) => state.posts);

// //   useEffect(() => {
  

// //     // קריאת פוסטים דרך Redux thunk
// //     dispatch(fetchPosts());
// //   }, [dispatch]);

// //   if (status === 'loading') return <p>Loading...</p>;
// //   if (status === 'failed') return <p>Error: {error}</p>;

// //   return (
// //     <Box
// //       sx={{
// //         minHeight: '100vh',
// //         width: '100vw',
// //         display: 'flex',
// //         flexDirection: 'column',
// //         alignItems: 'center',
// //         background: '#f9f4ef',
// //         overflowX: 'hidden',
// //         paddingTop: 2,
// //       }}
// //     >
// //       <Typography variant="h4" gutterBottom>Latest Posts</Typography>
// //       <Box
// //         sx={{
// //           display: 'grid',
// //           gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
// //           gap: 3,
// //           width: '90%',
// //           maxWidth: '1200px',
// //         }}
// //       >
// //         {items.map((post) => (
// //           <Card
// //             key={post._id}
// //             sx={{
// //               borderRadius: 2,
// //               boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
// //               transition: 'transform 0.3s ease',
// //               ':hover': {
// //                 transform: 'scale(1.05)',
// //                 boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
// //               },
// //             }}
// //           >
// //             <CardContent>
// //               <Typography variant="h6" fontWeight="bold">
// //                 {post.author?.UserName || 'Anonymous'}
// //               </Typography>
// //               <Typography variant="body1" sx={{ marginY: 1 }}>
// //                 {post.content}
// //               </Typography>
// //               <Typography variant="caption" color="textSecondary">
// //                 {new Date(post.createdAt).toLocaleString()}
// //               </Typography>
// //             </CardContent>
// //           </Card>
// //         ))}
// //       </Box>
// //     </Box>
// //   );
// // };

// // // export default PostFeed;
// // import { useEffect } from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { fetchPosts } from '../Store/postsSlice'; // ודא שזה הנתיב הנכון
// // import { Box, Typography, Card, CardContent } from '@mui/material';

// // const PostFeed = () => {
// //   const dispatch = useDispatch();
// //   const { items, status, error } = useSelector((state) => state.posts);

// //   useEffect(() => {
// //     // נטען רק אם לא נטען כבר
// //     if (status === 'idle') {
// //       dispatch(fetchPosts());
// //     }
// //   }, [dispatch, status]);

// //   if (status === 'loading') return <p>Loading...</p>;
// //   if (status === 'failed') return <p>Error: {error}</p>;

// //   return (
// //     <Box
// //       sx={{
// //         minHeight: '100vh',
// //         width: '100vw',
// //         display: 'flex',
// //         flexDirection: 'column',
// //         alignItems: 'center',
// //         background: '#f9f4ef',
// //         overflowX: 'hidden',
// //         paddingTop: 2,
// //       }}
// //     >
// //       <Typography variant="h4" gutterBottom>Latest Posts</Typography>
// //       <Box
// //         sx={{
// //           display: 'grid',
// //           gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
// //           gap: 3,
// //           width: '90%',
// //           maxWidth: '1200px',
// //         }}
// //       >
// //         {items.map((post) => (
// //           <Card
// //             key={post._id}
// //             sx={{
// //               borderRadius: 2,
// //               boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
// //               transition: 'transform 0.3s ease',
// //               ':hover': {
// //                 transform: 'scale(1.05)',
// //                 boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
// //               },
// //             }}
// //           >
// //             <CardContent>
// //               <Typography variant="h6" fontWeight="bold">
// //                 {post.author?.UserName || 'Anonymous'}
// //               </Typography>
// //               <Typography variant="body1" sx={{ marginY: 1 }}>
// //                 {post.content}
// //               </Typography>
// //               <Typography variant="caption" color="textSecondary">
// //                 {new Date(post.createdAt).toLocaleString()}
// //               </Typography>
// //             </CardContent>
// //           </Card>
// //         ))}
// //       </Box>
// //     </Box>
// //   );
// // };

// // export default PostFeed;






// // import { useEffect } from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { fetchPosts } from '../Store/postsSlice'; // ודאי שהנתיב תואם לתיקיה שלך
// // import { Box, Typography, Card, CardContent, CircularProgress } from '@mui/material';


// // const PostFeed = () => {
// //   const dispatch = useDispatch();
// //   const { items, status, error } = useSelector((state) => state.posts);

// //   useEffect(() => {
// //     if (status === 'idle') {
// //       dispatch(fetchPosts());
// //     }
// //   }, [dispatch, status]);

// //   if (status === 'loading') {
// //     return (
// //       <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
// //         <CircularProgress />
// //       </Box>
// //     );
// //   }

// //   if (status === 'failed') {
// //     return (
// //       <Typography color="error" sx={{ textAlign: 'center', mt: 5 }}>
// //         שגיאה בטעינת הפוסטים: {error}
// //       </Typography>
// //     );
// //   }

// //   return (
// //     <Box
// //       sx={{
// //         minHeight: '100vh',
// //         width: '100vw',
// //         display: 'flex',
// //         flexDirection: 'column',
// //         alignItems: 'center',
// //         background: '#f9f4ef',
// //         overflowX: 'hidden',
// //         paddingTop: 2,
// //       }}
// //     >
// //       <Typography variant="h4" gutterBottom>פוסטים אחרונים</Typography>
// //       <Box
// //         sx={{
// //           display: 'grid',
// //           gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
// //           gap: 3,
// //           width: '90%',
// //           maxWidth: '1200px',
// //         }}
// //       >
// //         {items.length === 0 ? (
// //           <Typography variant="body1">אין פוסטים להצגה כרגע.</Typography>
// //         ) : (
// //           items.map((post) => (
// //             <Card
// //               key={post._id}
// //               sx={{
// //                 borderRadius: 2,
// //                 boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
// //                 transition: 'transform 0.3s ease',
// //                 ':hover': {
// //                   transform: 'scale(1.05)',
// //                   boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
// //                 },
// //               }}
// //             >
// //               <CardContent>
// //                 <Typography variant="h6" fontWeight="bold">
// //                   {post.author?.UserName || 'אנונימי'}
// //                 </Typography>
// //                 <Typography variant="body1" sx={{ marginY: 1 }}>
// //                   {post.content}
// //                 </Typography>
// //                 <Typography variant="caption" color="textSecondary">
// //                   {new Date(post.createdAt).toLocaleString('he-IL')}
// //                 </Typography>
// //               </CardContent>
// //             </Card>
// //           ))
// //         )}
// //       </Box>
// //     </Box>
// //   );
// // // };

// // // export default PostFeed;
// // import { useEffect, useState } from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { fetchPosts, deletePost } from '../Store/postsSlice';
// // import { Box, Typography, Card, CardContent, CircularProgress, Button } from '@mui/material';
// // import EditPost from './EditPost'; // נתיב בהתאם

// // const PostFeed = () => {
// //   const dispatch = useDispatch();
// //   const { items, status, error } = useSelector((state) => state.posts);
// //   const [editingPost, setEditingPost] = useState(null);

// //   useEffect(() => {
// //     if (status === 'idle') {
// //       dispatch(fetchPosts());
// //     }
// //   }, [dispatch, status]);

// //   const handleDelete = (postId) => {
// //     if (window.confirm('האם אתה בטוח שברצונך למחוק את הפוסט?')) {
// //       dispatch(deletePost(postId));
// //     }
// //   };

// //   const startEdit = (post) => setEditingPost(post);
// //   const cancelEdit = () => setEditingPost(null);

// //   if (status === 'loading') {
// //     return (
// //       <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
// //         <CircularProgress />
// //       </Box>
// //     );
// //   }

// //   if (status === 'failed') {
// //     return (
// //       <Typography color="error" sx={{ textAlign: 'center', mt: 5 }}>
// //         שגיאה בטעינת הפוסטים: {error}
// //       </Typography>
// //     );
// //   }

// //   return (
// //     <Box sx={{ minHeight: '100vh', width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center', background: '#f9f4ef', overflowX: 'hidden', paddingTop: 2 }}>
// //       <Typography variant="h4" gutterBottom>פוסטים אחרונים</Typography>

// //       {editingPost && (
// //         <EditPost post={editingPost} onCancel={cancelEdit} />
// //       )}

// //       <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 3, width: '90%', maxWidth: '1200px' }}>
// //         {items.length === 0 ? (
// //           <Typography variant="body1">אין פוסטים להצגה כרגע.</Typography>
// //         ) : (
// //           items.map((post) => (
// //             <Card
// //               key={post._id}
// //               sx={{
// //                 borderRadius: 2,
// //                 boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
// //                 transition: 'transform 0.3s ease',
// //                 ':hover': {
// //                   transform: 'scale(1.05)',
// //                   boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
// //                 },
// //               }}
// //             >
// //               <CardContent>
// //                 <Typography variant="h6" fontWeight="bold">
// //                   {post.author?.UserName || 'אנונימי'}
// //                 </Typography>
// //                 <Typography variant="body1" sx={{ marginY: 1 }}>
// //                   {post.content}
// //                 </Typography>
// //                 <Typography variant="caption" color="textSecondary">
// //                   {new Date(post.createdAt).toLocaleString('he-IL')}
// //                 </Typography>
// //                 <Button variant="outlined" color="primary" onClick={() => startEdit(post)} sx={{ mt: 2, mr: 1 }}>
// //                   ערוך
// //                 </Button>
// //                 <Button variant="outlined" color="error" onClick={() => handleDelete(post._id)} sx={{ mt: 2 }}>
// //                   מחק
// //                 </Button>
// //               </CardContent>
// //             </Card>
// //           ))
// //         )}
// //       </Box>
// //     </Box>
// //   );
// // };

// // export default PostFeed;


// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchPosts, deletePost } from '../Store/postsSlice';
// import { Box, Typography, Card, CardContent, CircularProgress, Button } from '@mui/material';
// import EditPost from './EditPost'; // ודא נתיב נכון

// const PostFeed = () => {
//   const dispatch = useDispatch();
//   const { items, status, error } = useSelector((state) => state.posts);
//   const [editingPost, setEditingPost] = useState(null);

//   useEffect(() => {
//     // נטען פוסטים רק אם המצב idle ויש צורך בטעינה
//     if (status === 'idle') {
//       dispatch(fetchPosts());
//     }
//   }, [dispatch, status]);

//   const handleDelete = (postId) => {
//     if (window.confirm('האם אתה בטוח שברצונך למחוק את הפוסט?')) {
//       dispatch(deletePost(postId));
//     }
//   };

//   const startEdit = (post) => setEditingPost(post);
//   const cancelEdit = () => setEditingPost(null);

//   if (status === 'loading') {
//     return (
//       <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
//         <CircularProgress />
//       </Box>
//     );
//   }

//   if (status === 'failed') {
//     return (
//       <Typography color="error" sx={{ textAlign: 'center', mt: 5 }}>
//         שגיאה בטעינת הפוסטים: {error}
//       </Typography>
//     );
//   }

//   return (
//     <Box
//       sx={{
//         minHeight: '100vh',
//         width: '100vw',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         background: '#f9f4ef',
//         overflowX: 'hidden',
//         paddingTop: 2,
//       }}
//     >
//       <Typography variant="h4" gutterBottom>
//         פוסטים אחרונים
//       </Typography>

//       {editingPost && <EditPost post={editingPost} onCancel={cancelEdit} />}

//       <Box
//         sx={{
//           display: 'grid',
//           gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
//           gap: 3,
//           width: '90%',
//           maxWidth: '1200px',
//         }}
//       >
//         {items.length === 0 ? (
//           <Typography variant="body1">אין פוסטים להצגה כרגע.</Typography>
//         ) : (
//           items.map((post) => (
//             <Card
//               key={post._id}
//               sx={{
//                 borderRadius: 2,
//                 boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
//                 transition: 'transform 0.3s ease',
//                 ':hover': {
//                   transform: 'scale(1.05)',
//                   boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
//                 },
//               }}
//             >
//               <CardContent>
//                 <Typography variant="h6" fontWeight="bold">
//                   {post.author?.UserName || 'אנונימי'}
//                 </Typography>
//                 <Typography variant="body1" sx={{ marginY: 1 }}>
//                   {post.content}
//                 </Typography>
//                 <Typography variant="caption" color="textSecondary">
//                   {new Date(post.createdAt).toLocaleString('he-IL')}
//                 </Typography>
//                 <Button
//                   variant="outlined"
//                   color="primary"
//                   onClick={() => startEdit(post)}
//                   sx={{ mt: 2, mr: 1 }}
//                 >
//                   ערוך
//                 </Button>
//                 <Button
//                   variant="outlined"
//                   color="error"
//                   onClick={() => handleDelete(post._id)}
//                   sx={{ mt: 2 }}
//                 >
//                   מחק
//                 </Button>
//               </CardContent>
//             </Card>
//           ))
//         )}
//       </Box>
//     </Box>
//   );
// };

// export default PostFeed;


// import { Link } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchPosts, deletePost } from '../Store/postsSlice'; // וודא שהנתיב נכון
// import { Box, Typography, Card, CardContent, CircularProgress, Button } from '@mui/material';
// import EditPost from '../Component/EditPost'; // וודא שהנתיב נכון

// const PostFeed = () => {
//   const dispatch = useDispatch();
//   const { items, status, error } = useSelector((state) => state.posts);
//   const [editingPost, setEditingPost] = useState(null);

//   useEffect(() => {
//     if (status === 'idle') {
//       dispatch(fetchPosts());
//     }
//   }, [dispatch, status]);

//   const handleDelete = (postId) => {
//     if (window.confirm('האם אתה בטוח שברצונך למחוק את הפוסט?')) {
//       dispatch(deletePost(postId));
//     }
//   };

//   const startEdit = (post) => setEditingPost(post);
//   const cancelEdit = () => setEditingPost(null);

//   if (status === 'loading') {
//     return (
//       <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
//         <CircularProgress />
//       </Box>
//     );
//   }

//   if (status === 'failed') {
//     return (
//       <Typography color="error" sx={{ textAlign: 'center', mt: 5 }}>
//         שגיאה בטעינת הפוסטים: {error}
//       </Typography>
//     );
//   }

//   return (
//     <Box
//       sx={{
//         minHeight: '100vh',
//         width: '100vw',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         background: '#f9f4ef',
//         overflowX: 'hidden',
//         paddingTop: 2,
//       }}
//     >
//       <Typography variant="h4" gutterBottom>
//         פוסטים אחרונים
//       </Typography>

//       {editingPost && <EditPost post={editingPost} onCancel={cancelEdit} />}

//       <Box
//         sx={{
//           display: 'grid',
//           gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
//           gap: 3,
//           width: '90%',
//           maxWidth: '1200px',
//         }}
//       >
//         {items.length === 0 ? (
//           <Typography variant="body1">אין פוסטים להצגה כרגע.</Typography>
//         ) : (
//           items.map((post) => (
//             <Card
//               key={post._id}
//               sx={{
//                 borderRadius: 2,
//                 boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
//                 transition: 'transform 0.3s ease',
//                 ':hover': {
//                   transform: 'scale(1.05)',
//                   boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
//                 },
//               }}
//             >
//               <CardContent>
//                 <Typography variant="h6" fontWeight="bold">
//                   {post.author?.UserName || 'אנונימי'}
//                 </Typography>
//                 <Typography variant="body1" sx={{ marginY: 1 }}>
//                   {post.content}
//                 </Typography>
//                 <Typography variant="caption" color="textSecondary">
//                   {new Date(post.createdAt).toLocaleString('he-IL')}
//                 </Typography>
//                 <Button
//                   variant="outlined"
//                   color="primary"
//                   onClick={() => startEdit(post)}
//                   sx={{ mt: 2, mr: 1 }}
//                 >
//                   ערוך
//                 </Button>
//                 <Button
//                   variant="outlined"
//                   color="error"
//                   onClick={() => handleDelete(post._id)}
//                   sx={{ mt: 2 }}
//                 >
//                   מחק
//                 </Button>
//               </CardContent>
//             </Card>
//           ))
//         )}
//       </Box>
//     </Box>
//   );
// };

// export default PostFeed;
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, deletePost } from '../Store/postsSlice';
import { Box, Typography, Card, CardContent, CircularProgress, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import EditPost from '../Component/EditPost';

const PostFeed = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.posts);
  const [editingPost, setEditingPost] = useState(null);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPosts());
    }
  }, [dispatch, status]);

  const handleDelete = (postId) => {
    if (window.confirm('האם אתה בטוח שברצונך למחוק את הפוסט?')) {
      dispatch(deletePost(postId));
    }
  };

  const startEdit = (post) => setEditingPost(post);
  const cancelEdit = () => setEditingPost(null);

  if (status === 'loading') {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (status === 'failed') {
    return (
      <Typography color="error" sx={{ textAlign: 'center', mt: 5 }}>
        שגיאה בטעינת הפוסטים: {error}
      </Typography>
    );
  }

  return (
    <Box sx={{ minHeight: '100vh', width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center', background: '#f9f4ef', overflowX: 'hidden', paddingTop: 2 }}>
      <Typography variant="h4" gutterBottom>
        פוסטים אחרונים
      </Typography>

      {editingPost && <EditPost post={editingPost} onCancel={cancelEdit} />}

      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 3, width: '90%', maxWidth: '1200px' }}>
        {items.length === 0 ? (
          <Typography variant="body1">אין פוסטים להצגה כרגע.</Typography>
        ) : (
          items.map((post) => (
            <Link
              to={`/posts/${post._id}`}
              key={post._id}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <Card sx={{ borderRadius: 2, boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', transition: 'transform 0.3s ease', ':hover': { transform: 'scale(1.05)', boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)' } }}>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    {post.author?.UserName || 'אנונימי'}
                  </Typography>
                  <Typography variant="body1" sx={{ marginY: 1 }}>
                    {post.content}
                  </Typography>
                  <Typography variant="caption" color="textSecondary">
                    {new Date(post.createdAt).toLocaleString('he-IL')}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          ))
        )}
      </Box>
    </Box>
  );
};

export default PostFeed;
