import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import SingleBlog from '../components/singleBlog/SingleBlog';
import './pages.css'
function Single() {

  const[blogData,setBlogData]=useState("")

    const params=useParams()

    const loadSingleBlog=async()=>{
        const res= await axios.get(`http://localhost:3000/singleBlog/${params.id}`)
        setBlogData(res.data)
    }

    useEffect(()=>{
      loadSingleBlog()

    },[])


  return (
    <div className='single-blog-body'>
    <SingleBlog data={blogData} />
    </div>
  )
}

export default Single