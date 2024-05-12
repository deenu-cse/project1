import React from 'react'
import './random.css'
export default function Category({finalcat,catname}) {
  let cat=finalcat.map((v,i)=>{
    return(
      <li onClick={()=>catname(v)} key={i}>{v}</li>
    )
  })
  return (
    <div className='css'>
      <h2>Product Category</h2>
      <ul>
        {cat}
      </ul>
      
    </div>
  )
}
