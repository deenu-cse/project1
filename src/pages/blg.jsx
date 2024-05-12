import React from 'react'
import { data } from '../faq'
import { Link } from 'react-router-dom'

export default function Blog() {
    let allblog=data.map((v,i)=>{
        return(
            <div className='blogitem'>
                <h3>{v.title}</h3>
                <p>
                    {v.body}
                </p>
                <button><Link to={`/blog/${v.id}`}> Read More</Link></button>
            </div>
        )
    })
  return (
    <div>
      <h1>Blogs</h1>
      <div className='containor'>
        {allblog}
      </div>
    </div>
  )
}
