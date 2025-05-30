// // import { useState, useEffect } from 'react';
// // import { useDispatch } from 'react-redux';
// // import { updatePost } from '../Store/postsSlice';
// // import { Box, TextField, Button, Typography, Stack } from '@mui/material';

// // const EditPost = ({ post, onCancel }) => {
// //   const dispatch = useDispatch();
// //   const [content, setContent] = useState('');
// //   const [isSubmitting, setIsSubmitting] = useState(false);
// //   const [error, setError] = useState('');

// //   useEffect(() => {
// //     if (post) {
// //       setContent(post.content || '');
// //     }
// //   }, [post]);

// //   const handleUpdate = async () => {
// //     if (!content.trim()) {
// //       setError('תוכן הפוסט לא יכול להיות ריק.');
// //       return;
// //     }

// //     try {
// //       setIsSubmitting(true);
// //       await dispatch(updatePost({ ...post, content })).unwrap();
// //       onCancel(); // סוגר את המסך
// //     } catch (err) {
// //       setError('שגיאה בעדכון הפוסט. נסי שוב.');
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
// //           label="תוכן הפוסט"
// //           multiline
// //           rows={4}
// //           value={content}
// //           onChange={(e) => {
// //             setContent(e.target.value);
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
// //             disabled={isSubmitting || !content.trim()}
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
// import { Box, TextField, Button, Typography, Stack } from '@mui/material';

// const EditPost = ({ post, onCancel }) => {
//   const dispatch = useDispatch();
//   const [subject, setSubject] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     if (post) {
//       setSubject(post.subject || '');
//     }
//   }, [post]);

//   const handleUpdate = async () => {
//     if (!subject.trim()) {
//       setError('תוכן הפוסט לא יכול להיות ריק.');
//       return;
//     }

//     try {
//       setIsSubmitting(true);
//       await dispatch(updatePost({ ...post, subject })).unwrap();
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
//           label="תוכן הפוסט"
//           multiline
//           rows={4}
//           value={subject}
//           onChange={(e) => {
//             setSubject(e.target.value);
//             if (error) setError('');
//           }}
//         />

//         {error && (
//           <Typography color="error" variant="body2">
//             {error}
//           </Typography>
//         )}

//         <Stack direction="row" spacing={2} justifyContent="center">
//           <Button
//             variant="contained"
//             onClick={handleUpdate}
//             disabled={isSubmitting || !subject.trim()}
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
import { Box, TextField, Button, Typography, Stack } from '@mui/material';

const EditPost = ({ post, onCancel }) => {
  const dispatch = useDispatch();
  const [subject, setSubject] = useState('');
  const [title, setTitle] = useState('');
  const [writerName, setWriterName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (post) {
      setSubject(post.subject || '');
      setTitle(post.title || '');
      setWriterName(post.writerName || '');
    }
  }, [post]);

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
    <Box sx={{ maxWidth: 500, mx: 'auto', my: 4, p: 2 }}>
      <Typography variant="h5" gutterBottom>
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
