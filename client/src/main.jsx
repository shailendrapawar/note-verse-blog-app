import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'react-router-dom'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Authors from './pages/Authors.jsx'
import Home from './pages/Home.jsx'
import UserProfile from './components/userProfile/UserProfile.jsx'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import AddBlog from './pages/AddBlog.jsx'
import Category from './pages/Category.jsx'
import Single from './pages/Single.jsx'
import SingleCategory from './pages/SingleCategory.jsx'
import EditBlog from './pages/EditBlog.jsx'




const myRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route>
    <Route exact path='/' element={<Layout />}>

      <Route exact path='' element={<Home/>} />
      <Route path='/authors' element={<Authors/>}/>
      <Route path='/addBlog' element={<AddBlog/>}/>
      <Route path='/userProfile' element={<UserProfile/>}/>

      <Route path='/category' element={<Category/>} />
      <Route path='/category/:name' element={<SingleCategory/>} />
      
     <Route path='/addBlog' element={<AddBlog/>}></Route>
     <Route path='/singleBlog/:id' element={<Single/>} />

     <Route path='/editBlog/:id' element={<EditBlog/>} />

    </Route>
    <Route path='/register' element={<Register/>} />
    <Route path='/login' element={<Login/>} />
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={myRouter}/>
  </>,
)
