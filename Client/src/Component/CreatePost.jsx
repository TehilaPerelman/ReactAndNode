
// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addPost } from '../Store/postsSlice';
// import { Box, TextField, Button, Typography } from '@mui/material';
// import { useNavigate } from 'react-router-dom'; // ✅

// const CreatePost = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate(); // ✅

//   const [title, setTitle] = useState('');
//   const [subject, setSubject] = useState('');
//   const [writerName, setWriterName] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handlePost = async () => {
//     if (!title.trim() || !subject.trim() || !writerName.trim()) return;

//     setLoading(true);
//     setError(null);

//     try {
//       await dispatch(addPost({ title, subject, writerName })).unwrap();

//       // איפוס שדות
//       setTitle('');
//       setSubject('');
//       setWriterName('');

//       // ✅ מעבר לעמוד הפוסטים
//       navigate('/feed');
      
//     } catch (err) {
//       setError('שגיאה בפרסום הפוסט. נסה שנית.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Box sx={{ maxWidth: 600, margin: '20px auto', textAlign: 'center' }}>
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
//         label="תוכן הפוסט"
//         value={subject}
//         multiline
//         rows={6}
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

//       {error && (
//         <Typography color="error" sx={{ marginBottom: 2 }}>
//           {error}
//         </Typography>
//       )}

//       <Button 
//         variant="contained" 
//         onClick={handlePost} 
//         disabled={!title.trim() || !subject.trim() || !writerName.trim() || loading}
//       >
//         {loading ? 'טוען...' : 'פרסם פוסט'}
//       </Button>
//     </Box>
//   );
// };

// export default CreatePost;
// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addPost } from '../Store/postsSlice';
// import { Box, TextField, Button, Typography } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

// const CreatePost = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [title, setTitle] = useState('');
//   const [subject, setSubject] = useState('');
//   const [writerName, setWriterName] = useState('');
//   const [image, setImage] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

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

//       await dispatch(addPost(formData)).unwrap();

//       setTitle('');
//       setSubject('');
//       setWriterName('');
//       setImage(null);
//       navigate('/feed');
//     } catch (err) {
//       setError('שגיאה בפרסום הפוסט. נסה שנית.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Box sx={{ maxWidth: 600, margin: '20px auto', textAlign: 'center' }}>
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
//         label="תוכן הפוסט"
//         value={subject}
//         multiline
//         rows={6}
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

//       <input type="file" onChange={handleImageChange} accept="image/*" />

//       {error && (
//         <Typography color="error" sx={{ marginBottom: 2 }}>
//           {error}
//         </Typography>
//       )}

//       <Button 
//         variant="contained" 
//         onClick={handlePost} 
//         disabled={!title.trim() || !subject.trim() || !writerName.trim() || loading}
//       >
//         {loading ? 'טוען...' : 'פרסם פוסט'}
//       </Button>
//     </Box>
//   );
// };

// export default CreatePost;
import { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
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

      // איפוס שדות
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
    <Box sx={{ maxWidth: 600, margin: '20px auto', textAlign: 'center' }}>
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

      <input type="file" onChange={handleImageChange} accept="image/*" />

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
