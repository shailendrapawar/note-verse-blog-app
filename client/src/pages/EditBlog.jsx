import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './pages.css'

function EditBlog() {

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [imageUrl, setImageUrl] = useState('');

  const [category, setCategory] = useState("uncategory")

  const [author, setAuthor] = useState('')
  const [email, setEmail] = useState('')
  const params = useParams();
  const { id } = useParams()

  const options = ['uncategorised', 'food', 'finance', 'fitness', 'fashion', 'lifestyle', 'movies', 'music', 'pets', 'sports', 'games', 'travel', 'technology'];

  const loadData = async () => {
    const res = await axios.get(`http://127.0.0.1:3000/singleBlog/${id}`);
    setTitle(res.data.title);
    setDesc(res.data.desc);
    setCategory(res.data.category);
    setImageUrl(res.data.blogImage);
  }

  const loadTop=()=>{
    window.scrollTo(0,0)
  }

  const handleUpdate = async (e) => {

    e.preventDefault()

    try {
      let res = await axios.put(`http://127.0.0.1:3000/updateBlog/${id}`, {
        title: title,
        desc: desc,
        category: category
      })
      if (res) {
        alert("blog updated succesfully");

      } else {
        alert("something went wrong");
      }
    }catch(err){
      console.log(err)
    }
 
  }

  useEffect(() => {
    const uEmail = localStorage.getItem('email')
    const uToken = localStorage.getItem('token')
    const uName = localStorage.getItem('name')

    setAuthor(uName);
    setEmail(uEmail);

    loadData()
    loadTop()

  }, [])


  return (
    <div className='editBlog-body'>
      <form className='addBlog-form'>
        <img className='edit-blog-image' src={imageUrl}></img>

        <input value={title} required={true} name='title' onChange={(e) => setTitle(e.target.value)} className='blog-title' type="text" placeholder='enter title'></input>
        <div className='blog-file-category-body'>
          <select value={category} onChange={(e) => setCategory(e.target.value)} name='category' id='category' className='category-option-list'>
            {
              options.map((v, i) => {
                return <option key={i} value={v}> {v} </option>
              })

            }


          </select>
        </div>
        <textarea value={desc} name='desc' required={true} onChange={(e) => setDesc(e.target.value)} className='blog-desc editBlog-desc' placeholder='enter desc of your blogs'></textarea>
        <div className='addBlog-controls'>
          <button onClick={(e) => { e.preventDefault(); setTitle(""); setDesc("") }} className='blog-clear-btn'> clear all</button>
          <button onClick={(e) => handleUpdate(e)} type='submit' className='add-blog-btn'>Update</button>
        </div>
      </form>
    </div>


  )
}

export default EditBlog