
// // import { createSlice } from "@reduxjs/toolkit";

// // const initvalue = {
// //   arr: [
// //     {
// //       id: 1,
// //       name: "עוגת שוקולד",
// //       time: 60,
// //       ingredients: ["קמח", "שוקולד", "סוכר", "ביצים", "חמאה"],
// //       category: "חלבי",
// //       isFavorite: false,
// //       image: '/1.jpg',
// //     },
// //     {
// //       id: 2,
// //       name: "עוגת גבינה",
// //       time: 90,
// //       ingredients: ["גבינה לבנה", "ביסקוויטים", "שמנת מתוקה", "סוכר", "וניל"],
// //       category: "חלבי",
// //       isFavorite: false,
// //       image: '/2.jpg',
// //     },

// //     {
// //       id: 3,
// //       name: "עוגת טורט",
// //       time: 80,
// //       ingredients: ["קמח", "תפוחים", "סוכר", "קינמון", "ביצים"],
// //       category: "חלבי",
// //       isFavorite: false,
// //       image: '/3.jpg',
// //     },
// //     {
// //       id: 4,
// //       name: "טארט פירות יער",
// //       time: 120,
// //       ingredients: ["קמח", "חמאה", "פירות יער", "סוכר", "שמנת מתוקה"],
// //       category: "חלבי",
// //       isFavorite: false,
// //       image: '/4.jpg',
// //     }, {
// //       id: 5,
// //       name: "עוגת קרמבו",
// //       time: 90,
// //       ingredients: ["ביסקוויטים", "שמנת מתוקה", "שוקולד", "קצפת"],
// //       category: "חלבי",
// //       isFavorite: false,
// //       image: '/5.jpg',
// //     }, {
// //       id: 6,
// //       name: "עוגת שקדים",
// //       time: 45,
// //       ingredients: ["שוקולד מריר", "חמאה", "קמח", "סוכר", "ביצים"],
// //       category: "חלבי",
// //       isFavorite: false,
// //       image: '/6.jpg',
// //     },
// //     {
// //       id: 7,
// //       name: " עוגת גזר  ",
// //       time: 75,
// //       ingredients: ["קמח", "גזר", "שמן", "סוכר", "אגוזים"],
// //       category: "חלבי",
// //       isFavorite: false,
// //       image: '/7.jpg',
// //     },
// //     {
// //       id: 8,
// //       name: "עוגת שוקולד לבן",
// //       time: 70,
// //       ingredients: ["שוקולד לבן", "קמח", "חמאה", "סוכר", "ביצים"],
// //       category: "חלבי",
// //       isFavorite: false,
// //       image: '/8.jpg',
// //     }, {
// //       id: 9,
// //       name: "עוגת וניל",
// //       time: 50,
// //       ingredients: ["קמח", "וניל", "סוכר", "שמן", "ביצים"],
// //       category: "חלבי",
// //       isFavorite: false,
// //       image: '/9.jpg',
// //     },

// //     {
// //       id: 10,
// //       name: "פאי תפוחים",
// //       time: 90,
// //       ingredients: ["קמח", "חמאה", "תפוחים", "קינמון", "סוכר"],
// //       category: "חלבי",
// //       isFavorite: false,
// //       image: '/10.jpg',
// //     },
// //     {
// //       id: 11,
// //       name: "עוגת קוקוס",
// //       time: 65,
// //       ingredients: ["קמח", "קוקוס", "סוכר", "חלב", "שמן"],
// //       category: "חלבי",
// //       isFavorite: false,
// //       image: '/11.jpg',
// //     },

// //     {
// //       id: 12,
// //       name: "עוגיות חמאה",
// //       time: 50,
// //       ingredients: ["קמח", "חמאה", "סוכר", "וניל"],
// //       category: "חלבי",
// //       isFavorite: false,
// //       image: '/12.jpg',
// //     },
// //     {
// //       id: 13,
// //       name: "עוגת לימון",
// //       time: 60,
// //       ingredients: ["קמח", "לימון", "סוכר", "שמן", "ביצים"],
// //       category: "חלבי",
// //       isFavorite: false,
// //       image: '/13.jpg',
// //     },

// //     {
// //       id: 14,
// //       name: "מוס שוקולד",
// //       time: 40,
// //       ingredients: ["שוקולד מריר", "שמנת מתוקה", "סוכר", "ביצים"],
// //       category: "חלבי",
// //       isFavorite: false,
// //       image: '/14.jpg',
// //     },


// //     {
// //       id: 15,
// //       name: "עוגת אגוזים",
// //       time: 70,
// //       ingredients: ["קמח", "ביצים", "שמנת מתוקה", " אגוזים  "],
// //       category: "חלבי",
// //       isFavorite: false,
// //       image: '/15.jpg',
// //     },
// //     {
// //       id: 16,
// //       name: "עוגה בחושה ",
// //       time: 60,
// //       ingredients: ["קמח", "פרג", "סוכר", "שמן", "ביצים"],
// //       category: "חלבי",
// //       isFavorite: false,
// //       image: '/16.jpg',
// //     },
// //     {
// //       id: 17,
// //       name: "עוגת אגוזים",
// //       time: 45,
// //       ingredients: ["קמח", "חמאה", "סוכר", "שוקולד צ'יפס", "ביצים"],
// //       category: "חלבי",
// //       isFavorite: false,
// //       image: '/17.jpg',
// //     },
// //     {
// //       id: 18,
// //       name: "עוגת בננות",
// //       time: 70,
// //       ingredients: ["קמח", "בננות", "סוכר", "שמן", "ביצים"],
// //       category: "חלבי",
// //       isFavorite: false,
// //       image: '/18.jpg',
// //     },
// //   ],

// //   lastId: 18,
// // };

// // const RecipeListSlice = createSlice({
// //   name: "RecipeList",
// //   initialState: initvalue,
// //   reducers: {
// //     AddRecipeMain(state, action) {
// //       const newRecipe = { ...action.payload, id: state.lastId + 1 };
// //       state.arr.push(newRecipe);
// //       state.lastId += 1;
// //     },
// //     favorit: (state, actions) => {
// //       const recipe = state.arr.find((item) => item.id === actions.payload);
// //       if (recipe) {
// //         recipe.isFavorite = !recipe.isFavorite;
// //       }
// //     },
// //   },
// // });

// // export const { AddRecipeMain, favorit } = RecipeListSlice.actions;
// // export default RecipeListSlice.reducer;
// // import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// // import axiosInstance from '../api/axiosConfig';

// // export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
// //   const res = await axiosInstance.get('/post/all');
// //   return res.data;
// // });

// // const postsSlice = createSlice({
// //   name: 'posts',
// //   initialState: {
// //     items: [],
// //     status: 'idle',
// //     error: null,
// //   },
// //   reducers: {},
// //   extraReducers: (builder) => {
// //     builder
// //       .addCase(fetchPosts.pending, (state) => {
// //         state.status = 'loading';
// //       })
// //       .addCase(fetchPosts.fulfilled, (state, action) => {
// //         state.status = 'succeeded';
// //         state.items = action.payload;
// //       })
// //       .addCase(fetchPosts.rejected, (state, action) => {
// //         state.status = 'failed';
// //         state.error = action.error.message;
// //       });
// //   },
// // });

// // export default postsSlice.reducer;







// // import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// // import axiosInstance from '../api/axiosConfig';


// // // פעולת שליפה
// // export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
// //   const res = await axiosInstance.get('/product/getAllProduct');
// //   return res.data;
// // });

// // // פעולת הוספה
// // export const addPost = createAsyncThunk('posts/addPost', async (newPost) => {
// //   const res = await axiosInstance.post('/product/createProduct', newPost);
// //   return res.data;
// // });

// // const postsSlice = createSlice({
// //   name: 'posts',
// //   initialState: {
// //     items: [],
// //     status: 'idle',
// //     error: null,
// //   },
// //   reducers: {},
// //   extraReducers: (builder) => {
// //     builder
// //       .addCase(fetchPosts.pending, (state) => {
// //         state.status = 'loading';
// //       })
// //       .addCase(fetchPosts.fulfilled, (state, action) => {
// //         state.status = 'succeeded';
// //         state.items = action.payload;
// //       })
// //       .addCase(fetchPosts.rejected, (state, action) => {
// //         state.status = 'failed';
// //         state.error = action.error.message;
// //       })
// //       // הוספה לרשימה המקומית
// //       .addCase(addPost.fulfilled, (state, action) => {
// //         state.items.unshift(action.payload);
// //       });
// //   },
// // });

// // export default postsSlice.reducer;


// // src/store/postsSlice.jsimport { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axiosInstance from '../api/axiosConfig';
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// // שליפת פוסטים מהשרת (MongoDB)
// export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (_, { rejectWithValue }) => {
//   try {
//     const res = await axiosInstance.get('/product/getAllProduct');
//     return res.data;
//   } catch (err) {
//     return rejectWithValue(err.response?.data?.message || "שגיאה בשליפת פוסטים");
//   }
// });

// // הוספת פוסט חדש
// export const addPost = createAsyncThunk('posts/addPost', async (newPost, { rejectWithValue }) => {
//   try {
//     const res = await axiosInstance.post('/product/createProduct', newPost);
//     return res.data;
//   } catch (err) {
//     return rejectWithValue(err.response?.data?.message || "שגיאה בהוספת פוסט");
//   }
// });

// // עדכון פוסט קיים
// export const updatePost = createAsyncThunk('posts/updatePost', async (updatedPost, { rejectWithValue }) => {
//   try {
//     const res = await axiosInstance.put(`/product/updateProduct/${updatedPost._id}`, updatedPost);
//     return res.data;
//   } catch (err) {
//     return rejectWithValue(err.response?.data?.message || "שגיאה בעדכון הפוסט");
//   }
// });

// // מחיקת פוסט
// export const deletePost = createAsyncThunk('posts/deletePost', async (postId, { rejectWithValue }) => {
//   try {
//     await axiosInstance.delete(`/product/deleteProduct/${postId}`);
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
// export const addPost = createAsyncThunk('posts/addPost', async (newPost, { rejectWithValue }) => {
//   try {
//     // נתיב createPost
//     const res = await axiosInstance.post('/post/createPost', newPost);
//     return res.data.post; // לפי הקוד בשרת מחזיר אובייקט עם {message, post}
//   } catch (err) {
//     return rejectWithValue(err.response?.data?.message || "שגיאה בהוספת פוסט");
//   }
// });

export const addPost = createAsyncThunk('posts/addPost', async (newPost, { rejectWithValue }) => {
  try {
    const res = await axiosInstance.post('/post/createPost', newPost);
    return res.data.post;
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || "שגיאה בהוספת פוסט");
  }
});


// // עדכון פוסט קיים - אם יש לך בשרת (כדי להתאים תצטרכי להוסיף בשרת)
// export const updatePost = createAsyncThunk('posts/updatePost', async (updatedPost, { rejectWithValue }) => {
//   try {
//     const res = await axiosInstance.put(`/post/updatePost/${updatedPost._id}`, updatedPost);
//     return res.data;
//   } catch (err) {
//     return rejectWithValue(err.response?.data?.message || "שגיאה בעדכון הפוסט");
//   }
// });
export const updatePost = createAsyncThunk('posts/updatePost', async (updatedPost, { rejectWithValue }) => {
  try {
    const { _id, ...updateData } = updatedPost; // מפרידים את ה־_id מהנתונים
    const res = await axiosInstance.put(`/post/updatePost/${_id}`, updateData);
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
