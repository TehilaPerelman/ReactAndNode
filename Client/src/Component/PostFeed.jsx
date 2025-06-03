
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, deletePost } from '../Store/postsSlice';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CircularProgress,
  Button,
  Stack,
  Grid,
} from '@mui/material';
import { Link } from 'react-router-dom';
import EditPost from './EditPost';

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
        <CircularProgress color="info" />
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
    <Box
      sx={{
        minHeight: '100vh',
        width: '93vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: '#f5f5f5',
        padding: { xs: 2, md: 4 },
      }}
    >
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 4, color: '#0d47a1' }}>
        פוסטים אחרונים
      </Typography>

      {editingPost && <EditPost post={editingPost} onCancel={cancelEdit} />}

      <Grid container spacing={4} sx={{ maxWidth: '800px', mx: 'auto' }}>
        {items.length === 0 ? (
          <Typography variant="body1">אין פוסטים להצגה כרגע.</Typography>
        ) : (
          items.map((post) => (
            <Grid item xs={12} md={6} key={post._id}>
              <Card
                sx={{
                  height: '100%',
                  borderRadius: 4,
                  background: '#ffffff',
                  border: '1px solid #ccc',
                  boxShadow: '0 2px 12px rgba(0, 0, 0, 0.05)',
                  transition: '0.3s',
                  ':hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 6px 24px rgba(0, 188, 212, 0.3)',
                  },
                }}
              >
                <CardContent>
                  <Typography variant="h6" sx={{ color: '#0d47a1' }}>
                    {post.title}
                  </Typography>
                  <Typography variant="subtitle2" sx={{ color: '#424242', mt: 0.5 }}>
                    נכתב על ידי: {post.writerName}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: '#757575', display: 'block', mt: 0.5 }}
                  >
                    {new Date(post.createdAt).toLocaleString('he-IL')}
                  </Typography>

                  {post.imageUrl && (
                    <Box
                      component="img"
                      src={`http://localhost:3000${post.imageUrl}`}
                      alt="תמונה"
                      sx={{
                        width: '100%',
                        maxHeight: '200px',
                        objectFit: 'cover',
                        borderRadius: 2,
                        mt: 2,
                        border: '2px solid #00bcd4',
                      }}
                    />
                  )}

                  <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                    <Button
                      variant="outlined"
                      size="small"
                      component={Link}
                      to={`/posts/${post._id}`}
                      sx={{
                        borderColor: '#00bcd4',
                        color: '#0d47a1',
                        ':hover': {
                          backgroundColor: '#e0f7fa',
                        },
                      }}
                    >
                      צפייה
                    </Button>
                    <Button
                      variant="contained"
                      size="small"
                      onClick={() => startEdit(post)}
                      sx={{
                        backgroundColor: '#00acc1',
                        ':hover': { backgroundColor: '#0097a7' },
                      }}
                    >
                      עריכה
                    </Button>
                    <Button
                      variant="outlined"
                      size="small"
                      color="error"
                      onClick={() => handleDelete(post._id)}
                    >
                      מחיקה
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  );
};

export default PostFeed;
