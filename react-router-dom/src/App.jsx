import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Layout from './Layouts/Layout'
import Profile from './pages/Profile'
import Settings from './pages/Settings'
import User from './pages/User'
import Post from './pages/Post'

function App() {

  /*

  1. Register Route's
  2. Multilevel Routing
  3. Nested Route
  4. Dynamic Routes
  5. NavLink

  */

  return (
    <Routes>
      {/* MAIN LAYOUT ROUTE */}
      <Route path="/" element={<Layout />}>

        {/* 1. Basic Register Routes */}
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />

        {/*  2. Multilevel Routing */}
        {/* <Route path='/account/profiles' element={<Profile />} /> */}

        {/* 3. Nested Routes */}
        <Route path='account'>
          <Route path='profile' element={<Profile />} />
          <Route path='settings' element={<Settings />} />
        </Route>

        {/* 4. Dynamic Routes */}
        <Route path='/users/:userName' element={<User />} />

        {/* 5. Navlink */}
        <Route path="/post/:postId" element={<Post />} />

      </Route>
    </Routes>
  )
}

export default App
