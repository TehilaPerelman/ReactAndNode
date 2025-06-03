
// // import { useEffect, useState } from 'react';
// // import { useDispatch } from 'react-redux';
// // import { updatePost } from '../Store/postsSlice';
// // import { Box, TextField, Button, Typography, Stack } from '@mui/material';

// // const EditPost = ({ post, onCancel }) => {
// //   const dispatch = useDispatch();
// //   const [subject, setSubject] = useState('');
// //   const [title, setTitle] = useState('');
// //   const [writerName, setWriterName] = useState('');
// //   const [isSubmitting, setIsSubmitting] = useState(false);
// //   const [error, setError] = useState('');

// //   useEffect(() => {
// //     if (post) {
// //       setSubject(post.subject || '');
// //       setTitle(post.title || '');
// //       setWriterName(post.writerName || '');
// //     }
// //   }, [post]);

// //   const handleUpdate = async () => {
// //     if (!subject.trim() || !title.trim() || !writerName.trim()) {
// //       setError('יש למלא את כל השדות.');
// //       return;
// //     }

// //     try {
// //       setIsSubmitting(true);
// //       await dispatch(updatePost({
// //         _id: post._id,
// //         subject,
// //         title,
// //         writerName,
// //       })).unwrap();
// //       onCancel();
// //     } catch (err) {
// //       setError('שגיאה בעדכון הפוסט. נסה שוב.');
// //     } finally {
// //       setIsSubmitting(false);
// //     }
// //   };

// //   return (
// //     <Box sx={{ maxWidth: 500, mx: 'auto', my: 4, p: 2 }}>
// //       <Typography variant="h5" gutterBottom>
// //         עריכת פוסט
// //       </Typography>

// //       <Stack spacing={2}>
// //         <TextField
// //           fullWidth
// //           variant="outlined"
// //           label="כותרת"
// //           value={title}
// //           onChange={(e) => {
// //             setTitle(e.target.value);
// //             if (error) setError('');
// //           }}
// //         />

// //         <TextField
// //           fullWidth
// //           variant="outlined"
// //           label="תוכן הפוסט"
// //           multiline
// //           rows={4}
// //           value={subject}
// //           onChange={(e) => {
// //             setSubject(e.target.value);
// //             if (error) setError('');
// //           }}
// //         />

// //         <TextField
// //           fullWidth
// //           variant="outlined"
// //           label="שם הכותב"
// //           value={writerName}
// //           onChange={(e) => {
// //             setWriterName(e.target.value);
// //             if (error) setError('');
// //           }}
// //         />

// //         {error && (
// //           <Typography color="error" variant="body2">
// //             {error}
// //           </Typography>
// //         )}

// //         <Stack direction="row" spacing={2} justifyContent="center">
// //           <Button
// //             variant="contained"
// //             onClick={handleUpdate}
// //             disabled={isSubmitting || !subject.trim() || !title.trim() || !writerName.trim()}
// //           >
// //             עדכון
// //           </Button>
// //           <Button variant="text" onClick={onCancel}>
// //             ביטול
// //           </Button>
// //         </Stack>
// //       </Stack>
// //     </Box>
// //   );
// // };

// // export default EditPost;
// import { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { updatePost } from '../Store/postsSlice';
// import {
//   Box,
//   TextField,
//   Button,
//   Typography,
//   Stack,
// } from '@mui/material';

// const EditPost = ({ post, onCancel }) => {
//   const dispatch = useDispatch();
//   const [subject, setSubject] = useState('');
//   const [title, setTitle] = useState('');
//   const [writerName, setWriterName] = useState('');
//   const [image, setImage] = useState(null); // קובץ חדש
//   const [preview, setPreview] = useState(null); // תצוגה מקדימה
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     if (post) {
//       setSubject(post.subject || '');
//       setTitle(post.title || '');
//       setWriterName(post.writerName || '');
//       setPreview(post.imageUrl ? `http://localhost:3000${post.imageUrl}` : null);
//     }
//   }, [post]);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setImage(file);
//     if (file) {
//       setPreview(URL.createObjectURL(file));
//     }
//   };

//   const handleUpdate = async () => {
//     if (!subject.trim() || !title.trim() || !writerName.trim()) {
//       setError('יש למלא את כל השדות.');
//       return;
//     }

//     try {
//       setIsSubmitting(true);
//       await dispatch(updatePost({
//         _id: post._id,
//         subject,
//         title,
//         writerName,
//         // אם בעתיד תטפל בהעלאת קבצים, תוכל לצרף גם image כאן
//       })).unwrap();
//       onCancel();
//     } catch (err) {
//       setError('שגיאה בעדכון הפוסט. נסה שוב.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <Box sx={{ maxWidth: 500, mx: 'auto', my: 4, p: 2 }}>
//       <Typography variant="h5" gutterBottom>
//         עריכת פוסט
//       </Typography>

//       <Stack spacing={2}>
//         <TextField
//           fullWidth
//           variant="outlined"
//           label="כותרת"
//           value={title}
//           onChange={(e) => {
//             setTitle(e.target.value);
//             if (error) setError('');
//           }}
//         />

//         <TextField
//           fullWidth
//           variant="outlined"
//           label="תוכן הפוסט"
//           multiline
//           rows={4}
//           value={subject}
//           onChange={(e) => {
//             setSubject(e.target.value);
//             if (error) setError('');
//           }}
//         />

//         <TextField
//           fullWidth
//           variant="outlined"
//           label="שם הכותב"
//           value={writerName}
//           onChange={(e) => {
//             setWriterName(e.target.value);
//             if (error) setError('');
//           }}
//         />

//         {/* קלט קובץ תמונה */}
//         <Button variant="outlined" component="label">
//           בחר תמונה
//           <input type="file" hidden accept="image/*" onChange={handleImageChange} />
//         </Button>

//         {/* תצוגת תמונה אם קיימת */}
//         {preview && (
//           <Box
//             component="img"
//             src={preview}
//             alt="תצוגת תמונה"
//             sx={{ width: '100%', maxHeight: 200, objectFit: 'cover', borderRadius: 2 }}
//           />
//         )}

//         {error && (
//           <Typography color="error" variant="body2">
//             {error}
//           </Typography>
//         )}

//         <Stack direction="row" spacing={2} justifyContent="center">
//           <Button
//             variant="contained"
//             onClick={handleUpdate}
//             disabled={isSubmitting || !subject.trim() || !title.trim() || !writerName.trim()}
//           >
//             עדכון
//           </Button>
//           <Button variant="text" onClick={onCancel}>
//             ביטול
//           </Button>
//         </Stack>
//       </Stack>
//     </Box>
//   );
// };

// export default EditPost;
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updatePost } from '../Store/postsSlice';
import {
  Box,
  TextField,
  Button,
  Typography,
  Stack,
  Paper,
} from '@mui/material';

const EditPost = ({ post, onCancel }) => {
  const dispatch = useDispatch();
  const [subject, setSubject] = useState('');
  const [title, setTitle] = useState('');
  const [writerName, setWriterName] = useState('');
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (post) {
      setSubject(post.subject || '');
      setTitle(post.title || '');
      setWriterName(post.writerName || '');
      setPreview(post.imageUrl ? `http://localhost:3000${post.imageUrl}` : null);
    }
  }, [post]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleUpdate = async () => {
    if (!subject.trim() || !title.trim() || !writerName.trim()) {
      setError('יש למלא את כל השדות.');
      return;
    }

    try {
      setIsSubmitting(true);
      await dispatch(updatePost({
        _id: post._id,
        subject,
        title,
        writerName,
      })).unwrap();
      onCancel();
    } catch (err) {
      setError('שגיאה בעדכון הפוסט. נסה שוב.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 600,
        mx: 'auto',
        my: 4,
        p: 3,
        backgroundColor: '#ffffff',
        border: '1px solid #ccc',
        borderRadius: 3,
        boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
      }}
    >
      <Typography variant="h5" gutterBottom sx={{ color: '#0d47a1' }}>
        עריכת פוסט
      </Typography>

      <Stack spacing={2}>
        <TextField
          fullWidth
          variant="outlined"
          label="כותרת"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            if (error) setError('');
          }}
        />

        <TextField
          fullWidth
          variant="outlined"
          label="תוכן הפוסט"
          multiline
          rows={4}
          value={subject}
          onChange={(e) => {
            setSubject(e.target.value);
            if (error) setError('');
          }}
        />

        <TextField
          fullWidth
          variant="outlined"
          label="שם הכותב"
          value={writerName}
          onChange={(e) => {
            setWriterName(e.target.value);
            if (error) setError('');
          }}
        />

        <Button variant="outlined" component="label">
          בחר תמונה
          <input type="file" hidden accept="image/*" onChange={handleImageChange} />
        </Button>

        {preview && (
          <Box
            component="img"
            src={preview}
            alt="תצוגת תמונה"
            sx={{ width: '100%', maxHeight: 200, objectFit: 'cover', borderRadius: 2, border: '2px solid #00bcd4' }}
          />
        )}

        {error && (
          <Typography color="error" variant="body2">
            {error}
          </Typography>
        )}

        <Stack direction="row" spacing={2} justifyContent="center">
          <Button
            variant="contained"
            onClick={handleUpdate}
            disabled={isSubmitting || !subject.trim() || !title.trim() || !writerName.trim()}
            sx={{ backgroundColor: '#00bcd4', ':hover': { backgroundColor: '#0097a7' }, color: '#fff' }}
          >
            עדכון
          </Button>
          <Button variant="text" onClick={onCancel}>
            ביטול
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default EditPost;