import React, { useEffect, useState } from 'react'
import './pages.css'
import Blog from '../components/blog/Blog';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Home() {

  const [email, setEmail] = useState("")
  const [token, setToken] = useState("");
  const [name, setName] = useState("");

  const [blogs,setBlogs]=useState([])

  const navigate = useNavigate()
  const slogans = [
    "Inspire,Share,Connect..",
    "Empower your ideas..!!!",
    "Wings to your thoughts...",
    "Unleash your creativty...",
    "Craft your narratives...",
    "Your words matter...!!!",
    "From thougts to post...",
    "Write,Share,Connect...",
    "Wings to your thoughts...",
    "Connect through stories..."
  ]

  const randomSlogan = () => {
    const rIndex = Math.round(Math.random() * 10);
    return rIndex;
  }

  const loadAllBlogs=async()=>{
    let res=await axios.get("http://localhost:3000/allBlogs");

    setBlogs(res.data);
  }

  const loadCredentials = () => {
    let userEmail = localStorage.getItem("email")
    const userName = localStorage.getItem("name")
    const userToken = localStorage.getItem("token");
    // console.log(userEmail, userName, userToken);
    setEmail(userEmail);
    setName(userName.toLocaleUpperCase());
    setToken(userToken);


    if (token==null) {
      alert("please login again")
      navigate('/login')
    }else{
      loadAllBlogs()
    }
  }

  const loadTop=()=>{
    window.scrollTo(0,0)
  }


  useEffect(() => {

    loadCredentials()
    loadTop()

  }, [])

  if(!blogs.length==[]){
    return (
      <div className='home-page-body'>
        <h1>Heyy  {name}.. </h1>
        <div className='home-page-banner'>
          <div className='banner-content'>
            <h1>{slogans[randomSlogan()]}</h1>
            <button onClick={() => navigate("/addBlog")}>Create Blog</button>
          </div>
        </div>
      
        <div className='home-blogs-body'>
        {blogs.map((v,i)=>{
          return <Blog data={v} key={i}/>
        })}
        </div>
      </div>
  
    )
  }else{
    return(
      <div  className='home-page-body'>
      <div className='home-page-banner'>
          <div className='banner-content'>
            <h1>{slogans[randomSlogan()]}</h1>
            <button onClick={() => navigate("/addBlog")}>Create Blog</button>
          </div>
        </div>
      <h1>Sorry no Blogs yet to show</h1>
      </div>
    )
  }



}

export default Home