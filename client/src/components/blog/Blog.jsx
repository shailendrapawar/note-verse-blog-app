import React from 'react'

import './blog.css'
import { useNavigate } from 'react-router-dom'

function Blog( {data}) {

  const navigate=useNavigate()
  
  return (
    <div onClick={(e)=>{
      navigate(`/singleBlog/${data._id}`)
    }} className='blog-body'>
  
        <img className='blog-image' src={data.blogImage} alt='blog image'></img>
        
        <div className='blog-author-category'>
            <span style={{color:"white",backgroundColor:"rgb(224, 7, 7)",borderRadius:"15px"}}>{data.author}</span><span style={{color:"#222831"}}>{data.category}</span>
        </div>
        <div className='blog-content-body'>
            <h3>{data.title}</h3>
            <p>{data.desc}</p>
        </div>
    </div>
  )
}

export default Blog