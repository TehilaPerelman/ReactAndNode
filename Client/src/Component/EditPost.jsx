// import { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { updatePost } from '../Store/postsSlice';
// import { Box, TextField, Button, Typography, Stack } from '@mui/material';

// const EditPost = ({ post, onCancel }) => {
//   const dispatch = useDispatch();
//   const [content, setContent] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     if (post) {
//       setContent(post.content || '');
//     }
//   }, [post]);

//   const handleUpdate = async () => {
//     if (!content.trim()) {
//       setError('תוכן הפוסט לא יכול להיות ריק.');
//       return;
//     }

//     try {
//       setIsSubmitting(true);
//       await dispatch(updatePost({ ...post, content })).unwrap();
//       onCancel(); // סוגר את המסך
//     } catch (err) {
//       setError('שגיאה בעדכון הפוסט. נסי שוב.');
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
//           value={content}
//           onChange={(e) => {
//             setContent(e.target.value);
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
//             disabled={isSubmitting || !content.trim()}
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
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updatePost } from '../Store/postsSlice';
import { Box, TextField, Button, Typography, Stack } from '@mui/material';

const EditPost = ({ post, onCancel }) => {
  const dispatch = useDispatch();
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (post) {
      setContent(post.content || '');
    }
  }, [post]);

  const handleUpdate = async () => {
    if (!post || !post._id) {
      setError('שגיאה: מזהה הפוסט אינו תקין.');
      return;
    }
    
    if (!content.trim()) {
      
      setError('תוכן הפוסט לא יכול להיות ריק.');
      return;
    }

    try {
      setIsSubmitting(true);

      // כאן שולחים את כל השדות הקיימים לעדכון בפוסט
      await dispatch(updatePost({
        _id: post._id,
        title: post.title,
        subject: post.subject,
        writerName: post.writerName,
        content: content, // השדה שמשתנה
      })).unwrap();

      onCancel(); // סוגר את המסך אחרי עדכון מוצלח
    } catch (err) {
      console.error('Error updating post:', err);
      setError('שגיאה בעדכון הפוסט. נסי שוב.');
      
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
          label="תוכן הפוסט"
          multiline
          rows={4}
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
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
            disabled={isSubmitting || !content.trim()}
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
