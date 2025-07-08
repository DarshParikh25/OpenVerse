import { Routes, Route,  } from 'react-router-dom';
import { useContext, type JSX } from 'react';

import Home from './pages/Home';
import LogIn from './pages/LogIn';
import Blogs from './pages/Blogs';
import CreateBlogPost from './pages/CreateBlogPost';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Register from './pages/Register';
import AppContext from './context/AppContext';
import Loading from './components/Loading';

function App(): JSX.Element {
  const context = useContext(AppContext);

  if(!context || context.loading) {
    return (
      <Loading />
    )
  }

  return (
    <div className='w-full min-h-[100vh] bg-white'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/register' element={<Register />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/create-blog-post' element={<CreateBlogPost />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
