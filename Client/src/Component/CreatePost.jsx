
// // // // // // import { useState } from 'react';
// // // // // // import { useDispatch } from 'react-redux';
// // // // // // import { addPost } from '../Store/postsSlice';
// // // // // // import { Box, TextField, Button, Typography } from '@mui/material';
// // // // // // import { useNavigate } from 'react-router-dom'; // ✅

// // // // // // const CreatePost = () => {
// // // // // //   const dispatch = useDispatch();
// // // // // //   const navigate = useNavigate(); // ✅

// // // // // //   const [title, setTitle] = useState('');
// // // // // //   const [subject, setSubject] = useState('');
// // // // // //   const [writerName, setWriterName] = useState('');
// // // // // //   const [loading, setLoading] = useState(false);
// // // // // //   const [error, setError] = useState(null);

// // // // // //   const handlePost = async () => {
// // // // // //     if (!title.trim() || !subject.trim() || !writerName.trim()) return;

// // // // // //     setLoading(true);
// // // // // //     setError(null);

// // // // // //     try {
// // // // // //       await dispatch(addPost({ title, subject, writerName })).unwrap();

// // // // // //       // איפוס שדות
// // // // // //       setTitle('');
// // // // // //       setSubject('');
// // // // // //       setWriterName('');

// // // // // //       // ✅ מעבר לעמוד הפוסטים
// // // // // //       navigate('/feed');
      
// // // // // //     } catch (err) {
// // // // // //       setError('שגיאה בפרסום הפוסט. נסה שנית.');
// // // // // //     } finally {
// // // // // //       setLoading(false);
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <Box sx={{ maxWidth: 600, margin: '20px auto', textAlign: 'center' }}>
// // // // // //       <Typography variant="h5" gutterBottom>צור פוסט חדש</Typography>

// // // // // //       <TextField
// // // // // //         fullWidth
// // // // // //         variant="outlined"
// // // // // //         label="כותרת"
// // // // // //         value={title}
// // // // // //         onChange={(e) => setTitle(e.target.value)}
// // // // // //         sx={{ marginBottom: 2 }}
// // // // // //       />

// // // // // //       <TextField
// // // // // //         fullWidth
// // // // // //         variant="outlined"
// // // // // //         label="תוכן הפוסט"
// // // // // //         value={subject}
// // // // // //         multiline
// // // // // //         rows={6}
// // // // // //         onChange={(e) => setSubject(e.target.value)}
// // // // // //         sx={{ marginBottom: 2 }}
// // // // // //       />

// // // // // //       <TextField
// // // // // //         fullWidth
// // // // // //         variant="outlined"
// // // // // //         label="שם הכותב"
// // // // // //         value={writerName}
// // // // // //         onChange={(e) => setWriterName(e.target.value)}
// // // // // //         sx={{ marginBottom: 2 }}
// // // // // //       />

// // // // // //       {error && (
// // // // // //         <Typography color="error" sx={{ marginBottom: 2 }}>
// // // // // //           {error}
// // // // // //         </Typography>
// // // // // //       )}

// // // // // //       <Button 
// // // // // //         variant="contained" 
// // // // // //         onClick={handlePost} 
// // // // // //         disabled={!title.trim() || !subject.trim() || !writerName.trim() || loading}
// // // // // //       >
// // // // // //         {loading ? 'טוען...' : 'פרסם פוסט'}
// // // // // //       </Button>
// // // // // //     </Box>
// // // // // //   );
// // // // // // };

// // // // // // export default CreatePost;
// // // // // // import { useState } from 'react';
// // // // // // import { useDispatch } from 'react-redux';
// // // // // // import { addPost } from '../Store/postsSlice';
// // // // // // import { Box, TextField, Button, Typography } from '@mui/material';
// // // // // // import { useNavigate } from 'react-router-dom';

// // // // // // const CreatePost = () => {
// // // // // //   const dispatch = useDispatch();
// // // // // //   const navigate = useNavigate();

// // // // // //   const [title, setTitle] = useState('');
// // // // // //   const [subject, setSubject] = useState('');
// // // // // //   const [writerName, setWriterName] = useState('');
// // // // // //   const [image, setImage] = useState(null);
// // // // // //   const [loading, setLoading] = useState(false);
// // // // // //   const [error, setError] = useState(null);

// // // // // //   const handleImageChange = (e) => {
// // // // // //     setImage(e.target.files[0]);
// // // // // //   };

// // // // // //   const handlePost = async () => {
// // // // // //     if (!title.trim() || !subject.trim() || !writerName.trim()) return;

// // // // // //     setLoading(true);
// // // // // //     setError(null);

// // // // // //     try {
// // // // // //       const formData = new FormData();
// // // // // //       formData.append('title', title);
// // // // // //       formData.append('subject', subject);
// // // // // //       formData.append('writerName', writerName);
// // // // // //       if (image) formData.append('image', image);

// // // // // //       await dispatch(addPost(formData)).unwrap();

// // // // // //       setTitle('');
// // // // // //       setSubject('');
// // // // // //       setWriterName('');
// // // // // //       setImage(null);
// // // // // //       navigate('/feed');
// // // // // //     } catch (err) {
// // // // // //       setError('שגיאה בפרסום הפוסט. נסה שנית.');
// // // // // //     } finally {
// // // // // //       setLoading(false);
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <Box sx={{ maxWidth: 600, margin: '20px auto', textAlign: 'center' }}>
// // // // // //       <Typography variant="h5" gutterBottom>צור פוסט חדש</Typography>

// // // // // //       <TextField
// // // // // //         fullWidth
// // // // // //         variant="outlined"
// // // // // //         label="כותרת"
// // // // // //         value={title}
// // // // // //         onChange={(e) => setTitle(e.target.value)}
// // // // // //         sx={{ marginBottom: 2 }}
// // // // // //       />

// // // // // //       <TextField
// // // // // //         fullWidth
// // // // // //         variant="outlined"
// // // // // //         label="תוכן הפוסט"
// // // // // //         value={subject}
// // // // // //         multiline
// // // // // //         rows={6}
// // // // // //         onChange={(e) => setSubject(e.target.value)}
// // // // // //         sx={{ marginBottom: 2 }}
// // // // // //       />

// // // // // //       <TextField
// // // // // //         fullWidth
// // // // // //         variant="outlined"
// // // // // //         label="שם הכותב"
// // // // // //         value={writerName}
// // // // // //         onChange={(e) => setWriterName(e.target.value)}
// // // // // //         sx={{ marginBottom: 2 }}
// // // // // //       />

// // // // // //       <input type="file" onChange={handleImageChange} accept="image/*" />

// // // // // //       {error && (
// // // // // //         <Typography color="error" sx={{ marginBottom: 2 }}>
// // // // // //           {error}
// // // // // //         </Typography>
// // // // // //       )}

// // // // // //       <Button 
// // // // // //         variant="contained" 
// // // // // //         onClick={handlePost} 
// // // // // //         disabled={!title.trim() || !subject.trim() || !writerName.trim() || loading}
// // // // // //       >
// // // // // //         {loading ? 'טוען...' : 'פרסם פוסט'}
// // // // // //       </Button>
// // // // // //     </Box>
// // // // // //   );
// // // // // // };

// // // // // // export default CreatePost;
// // // // // import { useState } from 'react';
// // // // // import { Box, TextField, Button, Typography } from '@mui/material';
// // // // // import { useNavigate } from 'react-router-dom';
// // // // // import axiosInstance from '../api/axiosConfig';

// // // // // const CreatePost = () => {
// // // // //   const navigate = useNavigate();

// // // // //   const [title, setTitle] = useState('');
// // // // //   const [subject, setSubject] = useState('');
// // // // //   const [writerName, setWriterName] = useState('');
// // // // //   const [image, setImage] = useState(null);
// // // // //   const [loading, setLoading] = useState(false);
// // // // //   const [error, setError] = useState(null);

// // // // //   const handleImageChange = (e) => {
// // // // //     setImage(e.target.files[0]);
// // // // //   };

// // // // //   const handlePost = async () => {
// // // // //     if (!title.trim() || !subject.trim() || !writerName.trim()) return;

// // // // //     setLoading(true);
// // // // //     setError(null);

// // // // //     try {
// // // // //       const formData = new FormData();
// // // // //       formData.append('title', title);
// // // // //       formData.append('subject', subject);
// // // // //       formData.append('writerName', writerName);
// // // // //       if (image) formData.append('image', image);

// // // // //       await axiosInstance.post('/post/createPost', formData, {
// // // // //         headers: {
// // // // //           'Content-Type': 'multipart/form-data',
// // // // //         },
// // // // //       });

// // // // //       // איפוס שדות
// // // // //       setTitle('');
// // // // //       setSubject('');
// // // // //       setWriterName('');
// // // // //       setImage(null);
// // // // //       navigate('/feed');
// // // // //     } catch (err) {
// // // // //       setError('שגיאה בפרסום הפוסט. נסה שנית.');
// // // // //       console.error(err);
// // // // //     } finally {
// // // // //       setLoading(false);
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <Box sx={{ maxWidth: 600, margin: '20px auto', textAlign: 'center' }}>
// // // // //       <Typography variant="h5" gutterBottom>צור פוסט חדש</Typography>

// // // // //       <TextField
// // // // //         fullWidth
// // // // //         variant="outlined"
// // // // //         label="כותרת"
// // // // //         value={title}
// // // // //         onChange={(e) => setTitle(e.target.value)}
// // // // //         sx={{ marginBottom: 2 }}
// // // // //       />

// // // // //       <TextField
// // // // //         fullWidth
// // // // //         variant="outlined"
// // // // //         label="תוכן הפוסט"
// // // // //         value={subject}
// // // // //         multiline
// // // // //         rows={6}
// // // // //         onChange={(e) => setSubject(e.target.value)}
// // // // //         sx={{ marginBottom: 2 }}
// // // // //       />

// // // // //       <TextField
// // // // //         fullWidth
// // // // //         variant="outlined"
// // // // //         label="שם הכותב"
// // // // //         value={writerName}
// // // // //         onChange={(e) => setWriterName(e.target.value)}
// // // // //         sx={{ marginBottom: 2 }}
// // // // //       />

// // // // //       <input type="file" onChange={handleImageChange} accept="image/*" />

// // // // //       {error && (
// // // // //         <Typography color="error" sx={{ marginBottom: 2 }}>
// // // // //           {error}
// // // // //         </Typography>
// // // // //       )}

// // // // //       <Button 
// // // // //         variant="contained" 
// // // // //         onClick={handlePost} 
// // // // //         disabled={!title.trim() || !subject.trim() || !writerName.trim() || loading}
// // // // //       >
// // // // //         {loading ? 'טוען...' : 'פרסם פוסט'}
// // // // //       </Button>
// // // // //     </Box>
// // // // //   );
// // // // // };

// // // // // export default CreatePost;
// // // // import { useState } from 'react';
// // // // import { Box, TextField, Button, Typography } from '@mui/material';
// // // // import { useNavigate } from 'react-router-dom';
// // // // import axiosInstance from '../api/axiosConfig';

// // // // const CreatePost = () => {
// // // //   const navigate = useNavigate();

// // // //   const [title, setTitle] = useState('');
// // // //   const [subject, setSubject] = useState('');
// // // //   const [writerName, setWriterName] = useState('');
// // // //   const [image, setImage] = useState(null);
// // // //   const [loading, setLoading] = useState(false);
// // // //   const [error, setError] = useState(null);

// // // //   const handleImageChange = (e) => {
// // // //     setImage(e.target.files[0]);
// // // //   };

// // // //   const handlePost = async () => {
// // // //     if (!title.trim() || !subject.trim() || !writerName.trim()) return;

// // // //     setLoading(true);
// // // //     setError(null);

// // // //     try {
// // // //       const formData = new FormData();
// // // //       formData.append('title', title);
// // // //       formData.append('subject', subject);
// // // //       formData.append('writerName', writerName);
// // // //       if (image) formData.append('image', image);

// // // //       await axiosInstance.post('/post/createPost', formData, {
// // // //         headers: {
// // // //           'Content-Type': 'multipart/form-data',
// // // //         },
// // // //       });

// // // //       setTitle('');
// // // //       setSubject('');
// // // //       setWriterName('');
// // // //       setImage(null);
// // // //       navigate('/feed');
// // // //     } catch (err) {
// // // //       setError('שגיאה בפרסום הפוסט. נסה שנית.');
// // // //       console.error(err);
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <Box
// // // //       sx={{
// // // //         maxWidth: 600,
// // // //         margin: '40px auto',
// // // //         textAlign: 'center',
// // // //         background: '#ffffff',
// // // //         padding: 4,
// // // //         borderRadius: 3,
// // // //         boxShadow: '0 2px 12px rgba(0, 0, 0, 0.05)',
// // // //         border: '1px solid #ccc',
// // // //       }}
// // // //     >
// // // //       <Typography variant="h5" gutterBottom sx={{ color: '#0d47a1', mb: 3 }}>
// // // //         צור פוסט חדש
// // // //       </Typography>

// // // //       <TextField
// // // //         fullWidth
// // // //         variant="outlined"
// // // //         label="כותרת"
// // // //         value={title}
// // // //         onChange={(e) => setTitle(e.target.value)}
// // // //         sx={{ marginBottom: 2 }}
// // // //       />

// // // //       <TextField
// // // //         fullWidth
// // // //         variant="outlined"
// // // //         label="תוכן הפוסט"
// // // //         value={subject}
// // // //         multiline
// // // //         rows={6}
// // // //         onChange={(e) => setSubject(e.target.value)}
// // // //         sx={{ marginBottom: 2 }}
// // // //       />

// // // //       <TextField
// // // //         fullWidth
// // // //         variant="outlined"
// // // //         label="שם הכותב"
// // // //         value={writerName}
// // // //         onChange={(e) => setWriterName(e.target.value)}
// // // //         sx={{ marginBottom: 2 }}
// // // //       />

// // // //       <Box sx={{ mb: 2 }}>
// // // //         <input type="file" onChange={handleImageChange} accept="image/*" />
// // // //       </Box>

// // // //       {error && (
// // // //         <Typography color="error" sx={{ marginBottom: 2 }}>
// // // //           {error}
// // // //         </Typography>
// // // //       )}

// // // //       <Button
// // // //         variant="contained"
// // // //         onClick={handlePost}
// // // //         disabled={!title.trim() || !subject.trim() || !writerName.trim() || loading}
// // // //         sx={{
// // // //           backgroundColor: '#00bcd4',
// // // //           color: '#fff',
// // // //           ':hover': { backgroundColor: '#008ba3' },
// // // //         }}
// // // //       >
// // // //         {loading ? 'טוען...' : 'פרסם פוסט'}
// // // //       </Button>
// // // //     </Box>
// // // //   );
// // // // };

// // // // export default CreatePost;
// // // import { useState } from 'react';
// // // import { Box, TextField, Button, Typography } from '@mui/material';
// // // import { useNavigate } from 'react-router-dom';
// // // import axiosInstance from '../api/axiosConfig';

// // // const CreatePost = () => {
// // //   const navigate = useNavigate();

// // //   const [title, setTitle] = useState('');
// // //   const [subject, setSubject] = useState('');
// // //   const [writerName, setWriterName] = useState('');
// // //   const [image, setImage] = useState(null);
// // //   const [loading, setLoading] = useState(false);
// // //   const [error, setError] = useState(null);

// // //   const handleImageChange = (e) => {
// // //     setImage(e.target.files[0]);
// // //   };

// // //   const handlePost = async () => {
// // //     if (!title.trim() || !subject.trim() || !writerName.trim()) return;

// // //     setLoading(true);
// // //     setError(null);

// // //     try {
// // //       const formData = new FormData();
// // //       formData.append('title', title);
// // //       formData.append('subject', subject);
// // //       formData.append('writerName', writerName);
// // //       if (image) formData.append('image', image);

// // //       await axiosInstance.post('/post/createPost', formData, {
// // //         headers: {
// // //           'Content-Type': 'multipart/form-data',
// // //         },
// // //       });

// // //       setTitle('');
// // //       setSubject('');
// // //       setWriterName('');
// // //       setImage(null);
// // //       navigate('/feed');
// // //     } catch (err) {
// // //       setError('שגיאה בפרסום הפוסט. נסה שנית.');
// // //       console.error(err);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   return (
// // //     <Box
// // //       sx={{
// // //         maxWidth: 600,
// // //         margin: '40px auto',
// // //         textAlign: 'center',
// // //         background: '#ffffff',
    
// // //         padding: 4,
// // //         borderRadius: 3,
// // //         boxShadow: '0 2px 12px rgba(0, 0, 0, 0.05)',
// // //         border: '1px solid #ccc',
// // //         direction: 'rtl',
// // //       }}
// // //     >
// // //       <Typography variant="h5" gutterBottom sx={{ color: '#0d47a1', mb: 3 }}>
// // //         צור פוסט חדש
// // //       </Typography>

// // //       <TextField
// // //         fullWidth
// // //         variant="outlined"
// // //         label="כותרת"
// // //         value={title}
// // //         onChange={(e) => setTitle(e.target.value)}
// // //         sx={{ marginBottom: 2 }}
// // //       />

// // //       <TextField
// // //         fullWidth
// // //         variant="outlined"
// // //         label="תוכן הפוסט"
// // //         value={subject}
// // //         multiline
// // //         rows={6}
// // //         onChange={(e) => setSubject(e.target.value)}
// // //         sx={{ marginBottom: 2 }}
// // //       />

// // //       <TextField
// // //         fullWidth
// // //         variant="outlined"
// // //         label="שם הכותב"
// // //         value={writerName}
// // //         onChange={(e) => setWriterName(e.target.value)}
// // //         sx={{ marginBottom: 2 }}
// // //       />

// // //       <Box
// // //         sx={{
// // //           mb: 3,
// // //           display: 'flex',
// // //           flexDirection: 'column',
// // //           alignItems: 'start',
// // //           gap: 1,
// // //           textAlign: 'right',
// // //         }}
// // //       >
// // //         <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#0d47a1' }}>
// // //           העלאת תמונה:
// // //         </Typography>
// // //         <Button variant="outlined" component="label" sx={{ alignSelf: 'stretch' }}>
// // //           בחר קובץ תמונה
// // //           <input type="file" hidden accept="image/*" onChange={handleImageChange} />
// // //         </Button>
// // //         {image && (
// // //           <Typography variant="caption" color="textSecondary">
// // //             קובץ נבחר: {image.name}
// // //           </Typography>
// // //         )}
// // //       </Box>

// // //       {error && (
// // //         <Typography color="error" sx={{ marginBottom: 2 }}>
// // //           {error}
// // //         </Typography>
// // //       )}

// // //       <Button
// // //         variant="contained"
// // //         onClick={handlePost}
// // //         disabled={!title.trim() || !subject.trim() || !writerName.trim() || loading}
// // //         sx={{
// // //           backgroundColor: '#00bcd4',
// // //           color: '#fff',
// // //           ':hover': { backgroundColor: '#008ba3' },
// // //         }}
// // //       >
// // //         {loading ? 'טוען...' : 'פרסם פוסט'}
// // //       </Button>
// // //     </Box>
// // //   );
// // // };

// // // export default CreatePost;
// // import { useState } from 'react';
// // import { Box, TextField, Button, Typography } from '@mui/material';
// // import { useNavigate } from 'react-router-dom';
// // import axiosInstance from '../api/axiosConfig';

// // const CreatePost = () => {
// //   const navigate = useNavigate();

// //   const [title, setTitle] = useState('');
// //   const [subject, setSubject] = useState('');
// //   const [writerName, setWriterName] = useState('');
// //   const [image, setImage] = useState(null);
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState(null);

// //   const handleImageChange = (e) => {
// //     setImage(e.target.files[0]);
// //   };

// //   const handlePost = async () => {
// //     if (!title.trim() || !subject.trim() || !writerName.trim()) return;

// //     setLoading(true);
// //     setError(null);

// //     try {
// //       const formData = new FormData();
// //       formData.append('title', title);
// //       formData.append('subject', subject);
// //       formData.append('writerName', writerName);
// //       if (image) formData.append('image', image);

// //       await axiosInstance.post('/post/createPost', formData, {
// //         headers: {
// //           'Content-Type': 'multipart/form-data',
// //         },
// //       });

// //       setTitle('');
// //       setSubject('');
// //       setWriterName('');
// //       setImage(null);
// //       navigate('/feed');
// //     } catch (err) {
// //       setError('שגיאה בפרסום הפוסט. נסה שנית.');
// //       console.error(err);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <Box
// //       sx={{
// //         minHeight: '100vh',
// //         backgroundColor: '#f5f5f5',
// //         display: 'flex',
// //         justifyContent: 'center',
// //         alignItems: 'center',
// //         padding: 4,
// //       }}
// //     >
// //       <Box
// //         sx={{
// //           maxWidth: 600,
// //           width: '100%',
// //           textAlign: 'center',
// //           background: '#ffffff',
// //           padding: 4,
// //           borderRadius: 3,
// //           boxShadow: '0 2px 12px rgba(0, 0, 0, 0.05)',
// //           border: '1px solid #ccc',
// //           direction: 'rtl',
// //         }}
// //       >
// //         <Typography variant="h5" gutterBottom sx={{ color: '#0d47a1', mb: 3 }}>
// //           צור פוסט חדש
// //         </Typography>

// //         <TextField
// //           fullWidth
// //           variant="outlined"
// //           label="כותרת"
// //           value={title}
// //           onChange={(e) => setTitle(e.target.value)}
// //           sx={{ marginBottom: 2 }}
// //         />

// //         <TextField
// //           fullWidth
// //           variant="outlined"
// //           label="תוכן הפוסט"
// //           value={subject}
// //           multiline
// //           rows={6}
// //           onChange={(e) => setSubject(e.target.value)}
// //           sx={{ marginBottom: 2 }}
// //         />

// //         <TextField
// //           fullWidth
// //           variant="outlined"
// //           label="שם הכותב"
// //           value={writerName}
// //           onChange={(e) => setWriterName(e.target.value)}
// //           sx={{ marginBottom: 2 }}
// //         />

// //         <Box
// //           sx={{
// //             mb: 3,
// //             display: 'flex',
// //             flexDirection: 'column',
// //             alignItems: 'start',
// //             gap: 1,
// //             textAlign: 'right',
// //           }}
// //         >
// //           <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#0d47a1' }}>
// //             העלאת תמונה:
// //           </Typography>
// //           <Button variant="outlined" component="label" sx={{ alignSelf: 'stretch' }}>
// //             בחר קובץ תמונה
// //             <input type="file" hidden accept="image/*" onChange={handleImageChange} />
// //           </Button>
// //           {image && (
// //             <Typography variant="caption" color="textSecondary">
// //               קובץ נבחר: {image.name}
// //             </Typography>
// //           )}
// //         </Box>

// //         {error && (
// //           <Typography color="error" sx={{ marginBottom: 2 }}>
// //             {error}
// //           </Typography>
// //         )}

// //         <Button
// //           variant="contained"
// //           onClick={handlePost}
// //           disabled={!title.trim() || !subject.trim() || !writerName.trim() || loading}
// //           sx={{
// //             backgroundColor: '#00bcd4',
// //             color: '#fff',
// //             ':hover': { backgroundColor: '#008ba3' },
// //           }}
// //         >
// //           {loading ? 'טוען...' : 'פרסם פוסט'}
// //         </Button>
// //       </Box>
// //     </Box>
// //   );
// // };

// // export default CreatePost;
// import { useState, useEffect } from "react";
// import { Box, TextField, Button, Typography, Dialog, DialogTitle, DialogContent, DialogActions, IconButton } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";
// import { useNavigate } from 'react-router-dom';
// import axiosInstance from '../api/axiosConfig';

// const CreatePost = () => {
//   const navigate = useNavigate();

//   const [title, setTitle] = useState('');
//   const [subject, setSubject] = useState('');
//   const [writerName, setWriterName] = useState('');
//   const [image, setImage] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [openFeedback, setOpenFeedback] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setOpenFeedback(true);
//     }, 2000);
//     return () => clearTimeout(timer);
//   }, []);

//   const handleImageChange = (e) => {
//     setImage(e.target.files[0]);
//   };

//   const handlePost = async () => {
//     if (!title.trim() || !subject.trim() || !writerName.trim()) return;

//     setLoading(true);
//     setError(null);

//     try {
//       const formData = new FormData();
//       formData.append('title', title);
//       formData.append('subject', subject);
//       formData.append('writerName', writerName);
//       if (image) formData.append('image', image);

//       await axiosInstance.post('/post/createPost', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       setTitle('');
//       setSubject('');
//       setWriterName('');
//       setImage(null);
//       navigate('/feed');
//     } catch (err) {
//       setError('שגיאה בפרסום הפוסט. נסה שנית.');
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Box
//       sx={{
//         minHeight: '100vh',
//         backgroundColor: '#f5f5f5',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         padding: 4,
//       }}
//     >
//       <Box
//         sx={{
//           maxWidth: '80%',
//           width: '40vw',
//           textAlign: 'center',
//           background: '#ffffff',
//           padding: 4,
//           borderRadius: 3,
//           boxShadow: '0 2px 12px rgba(0, 0, 0, 0.05)',
//           border: '1px solid #ccc',
//           direction: 'rtl',
//         }}
//       >
//         <Typography variant="h5" gutterBottom sx={{ color: '#0d47a1', mb: 3 }}>
//           צור פוסט חדש
//         </Typography>

//         <TextField
//           fullWidth
//           variant="outlined"
//           label="כותרת"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           sx={{ marginBottom: 2 }}
//         />

//         <TextField
//           fullWidth
//           variant="outlined"
//           label="תוכן הפוסט"
//           value={subject}
//           multiline
//           rows={6}
//           onChange={(e) => setSubject(e.target.value)}
//           sx={{ marginBottom: 2 }}
//         />

//         <TextField
//           fullWidth
//           variant="outlined"
//           label="שם הכותב"
//           value={writerName}
//           onChange={(e) => setWriterName(e.target.value)}
//           sx={{ marginBottom: 2 }}
//         />

//         <Box
//           sx={{
//             mb: 3,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'start',
//             gap: 1,
//             textAlign: 'right',
//           }}
//         >
//           <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#0d47a1' }}>
//             העלאת תמונה:
//           </Typography>
//           <Button variant="outlined" component="label" sx={{ alignSelf: 'stretch' }}>
//             בחר קובץ תמונה
//             <input type="file" hidden accept="image/*" onChange={handleImageChange} />
//           </Button>
//           {image && (
//             <Typography variant="caption" color="textSecondary">
//               קובץ נבחר: {image.name}
//             </Typography>
//           )}
//         </Box>

//         {error && (
//           <Typography color="error" sx={{ marginBottom: 2 }}>
//             {error}
//           </Typography>
//         )}

//         <Button
//           variant="contained"
//           onClick={handlePost}
//           disabled={!title.trim() || !subject.trim() || !writerName.trim() || loading}
//           sx={{
//             backgroundColor: '#00bcd4',
//             color: '#fff',
//             ':hover': { backgroundColor: '#008ba3' },
//           }}
//         >
//           {loading ? 'טוען...' : 'פרסם פוסט'}
//         </Button>
//       </Box>

//       <Dialog open={openFeedback} onClose={() => setOpenFeedback(false)}>
//         <DialogTitle>
//           משוב על האתר
//           <IconButton
//             aria-label="close"
//             onClick={() => setOpenFeedback(false)}
//             sx={{ position: 'absolute', right: 8, top: 8 }}
//           >
//             <CloseIcon />
//           </IconButton>
//         </DialogTitle>
//         <DialogContent>
//           <Typography>   רוצה להירשם לניוזלטר שלנו  ?</Typography>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={() => setOpenFeedback(false)} color="primary">
//             תשמרו אותי  😊
//           </Button>
//           <Button onClick={() => setOpenFeedback(false)} color="secondary">
//             לא עכשיו 😞
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Box>
//   );
// };

// export default CreatePost;
import { useState, useEffect } from "react";
import { Box, TextField, Button, Typography, Dialog, DialogTitle, DialogContent, DialogActions, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../api/axiosConfig';

const CreatePost = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [subject, setSubject] = useState('');
  const [writerName, setWriterName] = useState('');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [openFeedback, setOpenFeedback] = useState(false);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("seenFeedbackPopup");

    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setOpenFeedback(true);
        localStorage.setItem("seenFeedbackPopup", "true");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handlePost = async () => {
    if (!title.trim() || !subject.trim() || !writerName.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('subject', subject);
      formData.append('writerName', writerName);
      if (image) formData.append('image', image);

      await axiosInstance.post('/post/createPost', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setTitle('');
      setSubject('');
      setWriterName('');
      setImage(null);
      navigate('/feed');
    } catch (err) {
      setError('שגיאה בפרסום הפוסט. נסה שנית.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 4,
      }}
    >
      <Box
        sx={{
          maxWidth: '80%',
          width: '40vw',
          textAlign: 'center',
          background: '#ffffff',
          padding: 4,
          borderRadius: 3,
          boxShadow: '0 2px 12px rgba(0, 0, 0, 0.05)',
          border: '1px solid #ccc',
          direction: 'rtl',
        }}
      >
        <Typography variant="h5" gutterBottom sx={{ color: '#0d47a1', mb: 3 }}>
          צור פוסט חדש
        </Typography>

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
          label="תוכן הפוסט"
          value={subject}
          multiline
          rows={6}
          onChange={(e) => setSubject(e.target.value)}
          sx={{ marginBottom: 2 }}
        />

        <TextField
          fullWidth
          variant="outlined"
          label="שם הכותב"
          value={writerName}
          onChange={(e) => setWriterName(e.target.value)}
          sx={{ marginBottom: 2 }}
        />

        <Box
          sx={{
            mb: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            gap: 1,
            textAlign: 'right',
          }}
        >
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#0d47a1' }}>
            העלאת תמונה:
          </Typography>
          <Button variant="outlined" component="label" sx={{ alignSelf: 'stretch' }}>
            בחר קובץ תמונה
            <input type="file" hidden accept="image/*" onChange={handleImageChange} />
          </Button>
          {image && (
            <Typography variant="caption" color="textSecondary">
              קובץ נבחר: {image.name}
            </Typography>
          )}
        </Box>

        {error && (
          <Typography color="error" sx={{ marginBottom: 2 }}>
            {error}
          </Typography>
        )}

        <Button
          variant="contained"
          onClick={handlePost}
          disabled={!title.trim() || !subject.trim() || !writerName.trim() || loading}
          sx={{
            backgroundColor: '#00bcd4',
            color: '#fff',
            ':hover': { backgroundColor: '#008ba3' },
          }}
        >
          {loading ? 'טוען...' : 'פרסם פוסט'}
        </Button>
      </Box>

      <Dialog open={openFeedback} onClose={() => setOpenFeedback(false)}>
        <DialogTitle>
          משוב על האתר
          <IconButton
            aria-label="close"
            onClick={() => setOpenFeedback(false)}
            sx={{ position: 'absolute', right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Typography>רוצה להירשם לניוזלטר שלנו?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenFeedback(false)} color="primary">
            תשמרו אותי 😊
          </Button>
          <Button onClick={() => setOpenFeedback(false)} color="secondary">
            לא עכשיו 😞
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default CreatePost;
