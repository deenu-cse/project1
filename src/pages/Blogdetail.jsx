import React from 'react'
import Header from '../common/Header'
import { useLocation } from 'react-router-dom'
import { data } from '../faq'

export default function Blogdetail() {
  let uselocation =useLocation()
  let currentid=uselocation.pathname.split('/')[2]
  let currentdata =data.filter((v)=>v.id===currentid)[0]
  console.log(currentdata)
  return (
    <div>
      <Header/>
      <h1>{currentdata.title}</h1>
    </div>
  )
}
