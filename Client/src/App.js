// import React, { Suspense } from 'react';
// import { Routes, Route } from 'react-router-dom';

// // דינמיות וטעינה עצלה (Lazy Loading)
// const PostDeta~ils = React.lazy(() => import('./components/PostDetails'));
// const PostFeed = React.lazy(() => import('./pages/PostFeed'));
// const AppBar = React.lazy(() => import('./components/AppBar'));
// const Login = React.lazy(() => import('./components/Login'));
// const CreatePost = React.lazy(() => import('./components/CreatePost'));
// const Home = React.lazy(() => import('./components/Home'));

// function App() {
//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <AppBar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/feed" element={<PostFeed />} />
//         <Route path="/post/:id" element={<PostDetails />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/create-post" element={<CreatePost />} />
//       </Routes>
//     </Suspense>
//   );
// // }

// // // export default App;
// // import React, { Suspense } from 'react';
// // import { Routes, Route } from 'react-router-dom';

// // // דינמיות וטעינה עצלה (Lazy Loading)
// // const UserProfile = React.lazy(() => import('./Component/UserProfile'));
// // const CreatePost = React.lazy(() => import('./Component/CreatePost'));
// // const PostFeed = React.lazy(() => import('./Component/PostFeed'));
// // const Login = React.lazy(() => import('./Component/Login'));
// // const Home = React.lazy(() => import('./Component/Home'));
// // const AppBar = React.lazy(() => import('./Component/AppBar'));

// // const AppRoutes = () => {
// //   return (
// //     <Suspense fallback={<div>Loading...</div>}>
// //       <AppBar />
// //       <Routes>
// //         <Route path="/" element={<Home />} />
// //         <Route path="/feed" element={<PostFeed />} />
// //         <Route path="/profile/:id" element={<UserProfile />} />
// //         <Route path="/create-post" element={<CreatePost />} />
// //         <Route path="/login" element={<Login />} />
// //       </Routes>
// //     </Suspense>
// //   );
// // };

// // export default AppRoutes;
// import React, { Suspense } from 'react';
// import { Routes, Route } from 'react-router-dom';

// const UserProfile = React.lazy(() => import('./Component/UserProfile'));
// const CreatePost = React.lazy(() => import('./Component/CreatePost'));
// const PostFeed = React.lazy(() => import('./Component/PostFeed'));
// const Login = React.lazy(() => import('./Component/Login'));
// const Register = React.lazy(() => import('./Component/Register')); // ✅ חדש
// const Home = React.lazy(() => import('./Component/Home'));
// const AppBar = React.lazy(() => import('./Component/AppBar'));

// const App = () => {
//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <AppBar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/feed" element={<PostFeed />} />
//         <Route path="/profile/:id" element={<UserProfile />} />
//         <Route path="/create-post" element={<CreatePost />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} /> {/* ✅ רוטה להרשמה */}
//         <Route path="*" element={<div>עמוד לא נמצא</div>} />

//       </Routes>
//     </Suspense>
//   );
// };

// export default App;
import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const SinglePost = React.lazy(() => import('./Component/SinglePost')); // ✅ חדש

const UserProfile = React.lazy(() => import('./Component/UserProfile'));
const CreatePost = React.lazy(() => import('./Component/CreatePost'));
const PostFeed = React.lazy(() => import('./Component/PostFeed'));
const Login = React.lazy(() => import('./Component/Login'));
const Register = React.lazy(() => import('./Component/Register'));
const Home = React.lazy(() => import('./Component/Home'));
const AppBar = React.lazy(() => import('./Component/AppBar'));
const EditPost = React.lazy(() => import('./Component/EditPost')); // ✅ חדש

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feed" element={<PostFeed />} />
        <Route path="/profile/:id" element={<UserProfile />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/edit-post/:id" element={<EditPost />} /> {/* ✅ חדש */}
        <Route path="/login" element={<Login />} />
        <Route path="/posts/:id" element={<SinglePost />} /> {/* ✅ חדש */}
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<div>עמוד לא נמצא</div>} />
      </Routes>
    </Suspense>
  );
};

export default App;
