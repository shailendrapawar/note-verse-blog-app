import React, { useEffect, useState } from 'react'
import './pages.css'
import axios from 'axios';
import AuthorsCard from '../components/authorsCard/AuthorsCard'
function Authors() {

const [authorData,setAuthorData]=useState([])

const loadauthors=async()=>{
  const res= await axios.get("http://127.0.0.1:3000/getAllAuthors");
  setAuthorData(res.data)
 
}

  useEffect(()=>{

    loadauthors()
  },[])

  if(authorData.length==[]){
    <div className='authors-body'>
      <h3>no authors yet</h3>
    </div>
  }else{
    return (
      <div className='authors-body'>
       {
        authorData.map((v,i)=>{
          
          return <AuthorsCard key={i} authorData={v}  />
        })
       }
      </div>
    )
  }
}

export default Authors