import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './userProfile.css'
import Blog from '../blog/Blog';
import { useNavigate } from 'react-router-dom';


function UserProfile() {

  const [uName, setUname] = useState('');
  const [uEmail, setUemail] = useState('');
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate()

  const handleEdit = async (id) => {
    navigate(`/editBlog/${id}`)
  }

  const handleDelete = async (id) => {
    try {
      const userChoice = confirm("are you sure you want to delete")
      if (userChoice) {
        const res = await axios.delete(`http://127.0.0.1:3000/deleteBlog/${id}`)
        if (res.status == 200) {
          alert("blog deleted successfully");
          window.location.reload()
        }
      }
    } catch (err) {
      console.log(err)
    }
  }

  const loadTop=()=>{
    window.scrollTo(0,0)
  }

  const handleLogout=()=>{
    const userChoice=confirm("are you sure you want to log out.?")
    if(userChoice){
      localStorage.clear();
    navigate('/login')
    }
  }

  const getUserData = async (uEmail) => {
    try {
      const res = await axios.post("http://localhost:3000/getEmailBlogs", { email: uEmail })
      setBlogs(res.data);
    } catch (err) {
      console.log(err)
    }
  }


  useEffect(() => {
    setUname
    const uEmail = localStorage.getItem('email');
    setUname(localStorage.getItem('name').toLocaleUpperCase())
    setUemail(localStorage.getItem('email'));

    getUserData(uEmail)
    loadTop()

  }, [])
  if (blogs.length == 0) {
    return (
      <>
        <div className='user-info'>
          <h3 className='user-name-posts'><span id='uname'>{uName}</span> <span id='total-posts'>total posts:{blogs.length}</span></h3>
          <h4 className='user-email'>{uEmail}</h4>
          <button onClick={handleLogout}>Logout</button>
        </div>

        <h1 className='heading'>Your Blogs</h1>

        <div className='userProfile-body'>
          <div className='user-blog-empty'>
            <h1>no blogs to show</h1>
            <button className='create-btn' onClick={()=>navigate("/addBlog")}>create new</button>
          </div>
          
        </div>
      </>
    )

  } else {
    return (
      < >
        <div className='user-info'>
          <h3 className='user-name-posts'><span>{uName}</span> <span>total posts:{blogs.length}</span></h3>
          <h4 className='user-email'>{uEmail}</h4>
          <button onClick={handleLogout} >Logout</button>
        </div>

        <h1 className='heading'>Your Blogs</h1>

        <div className='userProfile-body'>
          {blogs?.map((v, i) => {

            return (

              <div key={i} className='blog-menu-body'>
                <Blog data={v} />
                <div className='edit-delete-body'>
                  <div className='edit-btn' onClick={(e) => { handleEdit(v._id) }}></div>
                  <div className='delete-btn' onClick={(e) => handleDelete(v._id)}></div>
                </div>

              </div>
            )
          })}
        </div>
      </>
    )
  }
}

export default UserProfile