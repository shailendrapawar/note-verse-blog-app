import React, { useEffect, useState } from 'react'
import './pages.css'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


function AddBlog(props) {
  const params=useParams();

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState()
  const [category, setCategory] = useState("uncategory")
  const [author, setAuthor] = useState('')
  const [email, setEmail] = useState('')

  const options = ['uncategorised', 'food', 'finance', 'fitness', 'fashion', 'lifestyle', 'movies', 'music', 'pets', 'sports', 'games', 'travel', 'technology'];

  const navigate=useNavigate()

  //function for submmitting the blog

  const handleAddBlog = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append('blogImage', file)
    formData.append('title', title)
    formData.append('author', author)
    formData.append('desc', desc);
    formData.append('category', category)
    formData.append('email', email)

    const res = await axios.post("http://localhost:3000/addBlog", formData)
  
    if (res.status == 200) {
      setTitle('');
      setCategory('uncategorised')
      setFile()
      setDesc('');
      alert("blog added successfully");
      navigate('/userProfile')
    } else {
      alert("something went wrong try again");
    }
  }



  useEffect(() => {
    
    const uEmail = localStorage.getItem('email')
    const uToken = localStorage.getItem('token')
    const uName = localStorage.getItem('name')

    setAuthor(uName);
    setEmail(uEmail);

  }, [])

  return (

    <div className='addBlog-body'>

      <form onSubmit={handleAddBlog} className='addBlog-form'>
        <input value={title} required={true} name='title' onChange={(e) => setTitle(e.target.value)} className='blog-title' type="text" placeholder='enter title'></input>
        <div className='blog-file-category-body'><input required={true} name='file' onChange={(e) => setFile(e.target.files[0])} className='blog-file' type='file'></input>
          <select value={category} onChange={(e) => setCategory(e.target.value)} name='category' id='category' className='category-option-list'>
            {
              options.map((v, i) => {
                return <option className='options' key={i} value={v}> {v} </option>
              })

            }

          </select>
        </div>
        <textarea value={desc} name='desc' required={true} onChange={(e) => setDesc(e.target.value)} className='blog-desc' placeholder='enter desc of your blogs'></textarea>
        <div className='addBlog-controls'>
          <button onClick={(e) => {e.preventDefault(); setTitle(""); setDesc("") }} className='blog-clear-btn'> clear all</button>
          <button type='submit' className='add-blog-btn'> addBlog</button>
        </div>
      </form>

    </div>
  )
}

export default AddBlog
