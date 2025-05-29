
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axiosInstance from '../api/axiosConfig'; // ודא שזה הנתיב לקובץ axios שלך
import { Box, Typography, CircularProgress, Card, CardContent } from '@mui/material';

const SinglePost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
 

  useEffect(() => {
     console.log("ID from URL:", id); // ✅ הדפס את ה-ID
    const fetchPost = async () => {
      try {
        const res = await axiosInstance.get(`/post/${id}`); // שימי לב לכתובת הנכונה לפי ה־Route שלך
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
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
      <Card sx={{ width: '90%', maxWidth: 600, padding: 3 }}>
        <CardContent>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            {post.writerName || 'אנונימי'}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            {post.subject}
          </Typography>
          <Typography variant="caption" color="textSecondary">
            {new Date(post.createdAt).toLocaleString('he-IL')}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SinglePost;
