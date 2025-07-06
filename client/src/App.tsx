import { Routes, Route,  } from 'react-router-dom';
import type { JSX } from 'react';

import Home from './pages/Home';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Blogs from './pages/Blogs';
import CreateBlogPost from './pages/CreateBlogPost';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App(): JSX.Element {
  return (
    <div className='w-full min-h-[100vh] bg-white'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/create-blog-post' element={<CreateBlogPost />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
