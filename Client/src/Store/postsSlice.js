
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axiosInstance from '../api/axiosConfig';

// // שליפת פוסטים מהשרת (MongoDB)
// export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (_, { rejectWithValue }) => {
//   try {
//     // נתיב getAllPosts
//     const res = await axiosInstance.get('/post/getAllPosts');
//     return res.data;
//   } catch (err) {
//     return rejectWithValue(err.response?.data?.message || "שגיאה בשליפת פוסטים");
//   }
// });

// // הוספת פוסט חדש
// export const addPost = createAsyncThunk('posts/addPost', async (newPost, { rejectWithValue }) => {
//   try {
//     // נתיב createPost
//     const res = await axiosInstance.post('/post/createPost', newPost);
//     return res.data.post; // לפי הקוד בשרת מחזיר אובייקט עם {message, post}
//   } catch (err) {
//     return rejectWithValue(err.response?.data?.message || "שגיאה בהוספת פוסט");
//   }
// });

// // עדכון פוסט קיים - אם יש לך בשרת (כדי להתאים תצטרכי להוסיף בשרת)
// export const updatePost = createAsyncThunk('posts/updatePost', async (updatedPost, { rejectWithValue }) => {
//   try {
//     const res = await axiosInstance.put(`/post/updatePost/${updatedPost._id}`, updatedPost);
//     return res.data;
//   } catch (err) {
//     return rejectWithValue(err.response?.data?.message || "שגיאה בעדכון הפוסט");
//   }
// });


// // מחיקת פוסט
// export const deletePost = createAsyncThunk('posts/deletePost', async (postId, { rejectWithValue }) => {
//   try {
//     await axiosInstance.delete(`/post/deletePost/${postId}`);
//     return postId;
//   } catch (err) {
//     return rejectWithValue(err.response?.data?.message || "שגיאה במחיקת הפוסט");
//   }
// });

// const postsSlice = createSlice({
//   name: 'posts',
//   initialState: {
//     items: [],
//     status: 'idle',
//     error: null,
//     selectedPost: null,
//   },
//   reducers: {
//     clearPosts(state) {
//       state.items = [];
//     },
//     selectPostById(state, action) {
//       state.selectedPost = state.items.find(p => p._id === action.payload);
//     }
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchPosts.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchPosts.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.items = action.payload;
//       })
//       .addCase(fetchPosts.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.payload;
//       })

//       .addCase(addPost.fulfilled, (state, action) => {
//         state.items.unshift(action.payload);
//       })
//       .addCase(addPost.rejected, (state, action) => {
//         state.error = action.payload;
//       })

//       .addCase(updatePost.fulfilled, (state, action) => {
//         const index = state.items.findIndex(post => post._id === action.payload._id);
//         if (index !== -1) {
//           state.items[index] = action.payload;
//         }
//       })
//       .addCase(updatePost.rejected, (state, action) => {
//         state.error = action.payload;
//       })

//       .addCase(deletePost.fulfilled, (state, action) => {
//         state.items = state.items.filter(post => post._id !== action.payload);
//       })
//       .addCase(deletePost.rejected, (state, action) => {
//         state.error = action.payload;
//       })
//   },
// });

// export const { clearPosts, selectPostById } = postsSlice.actions;
// export default postsSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../api/axiosConfig';

// שליפת פוסטים מהשרת (MongoDB)
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (_, { rejectWithValue }) => {
  try {
    // נתיב getAllPosts
    const res = await axiosInstance.get('/post/getAllPosts');
    return res.data;
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || "שגיאה בשליפת פוסטים");
  }
});

// הוספת פוסט חדש
export const addPost = createAsyncThunk('posts/addPost', async (newPost, { rejectWithValue }) => {
  try {
    // נתיב createPost
    const res = await axiosInstance.post('/post/createPost', newPost);
    return res.data.post; // לפי הקוד בשרת מחזיר אובייקט עם {message, post}
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || "שגיאה בהוספת פוסט");
  }
});

// עדכון פוסט קיים - אם יש לך בשרת (כדי להתאים תצטרכי להוסיף בשרת)
export const updatePost = createAsyncThunk('posts/updatePost', async (updatedPost, { rejectWithValue }) => {
  try {
    const res = await axiosInstance.put(`/post/updatePost/${updatedPost._id}`, updatedPost);
    return res.data;
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || "שגיאה בעדכון הפוסט");
  }
});

// מחיקת פוסט
export const deletePost = createAsyncThunk('posts/deletePost', async (postId, { rejectWithValue }) => {
  try {
    await axiosInstance.delete(`/post/deletePost/${postId}`);
    return postId;
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || "שגיאה במחיקת הפוסט");
  }
});

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
    selectedPost: null,
  },
  reducers: {
    clearPosts(state) {
      state.items = [];
    },
    selectPostById(state, action) {
      state.selectedPost = state.items.find(p => p._id === action.payload);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })

      .addCase(addPost.fulfilled, (state, action) => {
        state.items.unshift(action.payload);
      })
      .addCase(addPost.rejected, (state, action) => {
        state.error = action.payload;
      })

      .addCase(updatePost.fulfilled, (state, action) => {
        const index = state.items.findIndex(post => post._id === action.payload._id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(updatePost.rejected, (state, action) => {
        state.error = action.payload;
      })

      .addCase(deletePost.fulfilled, (state, action) => {
        state.items = state.items.filter(post => post._id !== action.payload);
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.error = action.payload;
      })
  },
});

export const { clearPosts, selectPostById } = postsSlice.actions;
export default postsSlice.reducer;
