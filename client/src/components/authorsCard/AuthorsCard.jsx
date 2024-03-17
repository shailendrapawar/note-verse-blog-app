import React from 'react'
import './authorsCard.css'
function AuthorsCard({authorData}) {
  return (
    <div className='authors-card-body'>
        <h4 className='author-name'>{authorData.name}</h4>
        <p className='author-desc'>age ofuser is : {authorData.age}</p>
        <div className='author-posts'> 2</div>
    </div>
  )
}

export default AuthorsCard