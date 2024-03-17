
import { useEffect } from 'react'
import './singleBlog.css'

function SingleBlog({data}) {

    const loadTop=()=>{
        window.scrollTo(0,0)
    }
    useEffect(()=>{

        loadTop()
    },[])



    return (
        <div className='singleBlog-body'>
            <div className='singleBlog-left'>
                <img src={data.blogImage} className='singleBlog-image'></img>
                <div className='author-category-body'>
                    <span id='blog-author'>{data.author}</span><span id='blog-category'>{data.category}</span>
                </div>
            </div>


            <div className='singleBlog-right'>
                <h3 className='singleBlog-heading'>{data.title}</h3>
                <p className='singleBlog-content'>{data.desc}</p>
            </div>

        </div>
    )
}

export default SingleBlog