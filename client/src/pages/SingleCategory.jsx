import React, { useEffect,useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import Blog from '../components/blog/Blog';


function SingleCategory() {

    const navigate=useNavigate()
    const params=useParams();

    const [singleCategoryList,setSingleListCategory]=useState([])

    const getSingleCategoryList=async()=>{
      const res=await axios.get(`http://127.0.0.1:3000/singleCategory/${params.name}`)
      setSingleListCategory(res.data)
    
    
    }


    useEffect(()=>{
      getSingleCategoryList()

      return 
    },[])



  if(singleCategoryList.length==0){
    return(<div className='singleCategory-body'>
      <h3 style={{fontFamily:"cursive"}}>no blogs yet to show in this category</h3>
    </div>)
  }else{
    return (
      <div className='singleCategory-body'>
         {singleCategoryList.map((v,i)=>{
          return <Blog data={v} key={i}/>
         })}
     
      </div>
    )
  }
}

export default SingleCategory