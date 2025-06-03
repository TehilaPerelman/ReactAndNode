
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axiosInstance from '../api/axiosConfig';
import {
  Box,
  Typography,
  CircularProgress,
  Card,
  CardContent,
} from '@mui/material';

const SinglePost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axiosInstance.get(`/post/${id}`);
        setPost(res.data);
      } catch (err) {
        console.error(err);
        setError('לא נמצא פוסט עם מזהה זה.');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) return <Box sx={{ textAlign: 'center', mt: 5 }}><CircularProgress /></Box>;

  if (error) return (
    <Typography sx={{ textAlign: 'center', mt: 5 }} color="error">
      {error}
    </Typography>
  );

  if (!post) return (
    <Typography sx={{ textAlign: 'center', mt: 5 }}>
      הפוסט לא נמצא.
    </Typography>
  );

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5, direction: 'rtl' }}>
      <Card
        sx={{
          width: '90%',
          maxWidth: 600,
          padding: 3,
          backgroundColor: '#ffffff',
          border: '1px solid #ccc',
          borderRadius: 3,
          boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
        }}
      >
        <CardContent>
          <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ color: '#0d47a1' }}>
            {post.writerName || 'אנונימי'}
          </Typography>

          <Typography variant="body1" sx={{ mb: 2, color: '#424242' }}>
            {post.subject}
          </Typography>

          {post.imageUrl && (
            <Box
              component="img"
              src={`http://localhost:3000${post.imageUrl}`}
              alt="תמונה"
              sx={{
                width: '100%',
                maxHeight: '300px',
                objectFit: 'cover',
                borderRadius: 2,
                mb: 2,
                border: '2px solid #00bcd4',
              }}
            />
          )}

          <Typography variant="caption" color="textSecondary">
            {new Date(post.createdAt).toLocaleString('he-IL')}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SinglePost;
