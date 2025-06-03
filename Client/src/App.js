
import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const UserProfile = React.lazy(() => import('./Component/UserProfile'));
const CreatePost = React.lazy(() => import('./Component/CreatePost'));
const PostFeed = React.lazy(() => import('./Component/PostFeed'));
const Login = React.lazy(() => import('./Component/Login'));
const Register = React.lazy(() => import('./Component/Register'));
const Home = React.lazy(() => import('./Component/Home'));
const AppBar = React.lazy(() => import('./Component/AppBar'));
const EditPost = React.lazy(() => import('./Component/EditPost'));
const SinglePost = React.lazy(() => import('./Component/SinglePost')); // ✅ חדש

const App = () => {
  return (
    <Suspense fallback={<div>טוען...</div>}>
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feed" element={<PostFeed />} />
        <Route path="/posts/:id" element={<SinglePost />} /> {/* ✅ חדש */}
        <Route path="/profile/:id" element={<UserProfile />} />
        <Route path="/create-post" element={<CreatePost />} />
        
        <Route path="/edit-post/:id" element={<EditPost />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<div>עמוד לא נמצא</div>} />
      </Routes>
    </Suspense>
    
  );
};

export default App;
