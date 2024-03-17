import React, { useEffect } from 'react'
import './pages.css'
import CategoryCard from '../components/categoryCard/CategoryCard';
function Category() {



  const catgeories = ['Food', 'Finance', 'Fitness', 'Fashion', 'Lifestyle', 'Movies', 'Music', 'Pets', 'Sports', 'Games', 'Travel', 'Technology'];

  const loadTop = () => {
    window.scrollTo(0, 0)
  }

  useEffect(() => {
    loadTop()
  }, [])
  
  return (
    <div className='category-body'>

      {catgeories.map((v, i) => {
        return <CategoryCard name={v} key={i} />
      })}

    </div>
  )
}

export default Category