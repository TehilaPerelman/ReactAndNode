import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updatePost } from '../Store/postsSlice';
import { Box, TextField, Button, Typography, Stack } from '@mui/material';

const EditPost = ({ post, onCancel }) => {
  const dispatch = useDispatch();
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (post) {
      setContent(post.content || '');
    }
  }, [post]);

  const handleUpdate = async () => {
    if (!content.trim()) {
      setError('תוכן הפוסט לא יכול להיות ריק.');
      return;
    }

    try {
      setIsSubmitting(true);
      await dispatch(updatePost({ ...post, content })).unwrap();
      onCancel(); // סוגר את המסך
    } catch (err) {
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
