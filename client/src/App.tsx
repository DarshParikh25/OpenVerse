import { Routes, Route,  } from 'react-router-dom';
import { useContext, type JSX } from 'react';

import Home from './pages/Home';
import LogIn from './pages/LogIn';
import CreateBlogPost from './pages/CreateBlogPost';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Register from './pages/Register';
import AppContext from './context/AppContext';
import Loading from './components/Loading';
import BlogPosts from './pages/BlogPosts';
import Blog from './pages/Blog';
import Profile from './pages/Profile';

function App(): JSX.Element {
  const context = useContext(AppContext);

  // const blogSlug = 'slug';
  // const profileSlug = 'slug';

  if(!context || context.loading) {
    return (
      <Loading />
    )
  }

  const { showNav } = context;

  return (
    <div className='w-full min-h-[100vh] bg-white'>
      {showNav && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/register' element={<Register />} />
        <Route path='/blog-posts' element={<BlogPosts />} />
        <Route path='/create-blog-post' element={<CreateBlogPost />} />
        <Route path={`/blog`} element={<Blog />} />
        <Route path={`/profile`} element={<Profile />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
