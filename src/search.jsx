// import React, { useState } from 'react'
// import moviedata from './mdata'
// import Card from './card';

// export default function Search({setresult}) {
//   let [input, setinput] = useState("")

//   let handle = (event) => {
//     setinput(event.target.value);
//   }

//   const filterData = moviedata.filter(movies => {
//     if(input === ""){
//       return true;
//     }else{
//       return Object.values(movies).some(value => value.toLowerCase() === input)
//     }
//   })

//   // const fetchdata = (event) => {
//   //  let check=moviedata.filter((v,i)=>v.title)
//   //  let result =check.filter((user)=>{
//   //   return event && user && user.title && user.title.toLocaleLowerCase().includes(value)
//   //  })
//   // }

//   return (
//     <div>
//       <input value={input} onChange={handle} placeholder='Search movie here...'></input>
//     </div>
//   )
// }
