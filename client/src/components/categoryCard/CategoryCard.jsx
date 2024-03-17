import React from 'react'
import './categoryCard.css'
import { useNavigate } from 'react-router-dom'
function CategoryCard({name}) {

    const navigate =useNavigate();

  return (

    <div onClick={(e)=>{
        navigate(`/category/${name}`)
    }}  className='categoryCard-body'>
        <h1>{name}</h1>
  
    </div>
  )
}

export default CategoryCard