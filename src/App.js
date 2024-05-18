import './App.css';
import moviedata from './mdata'
import { forwardRef, useEffect, useState } from 'react';
import Nav from './nav';
import Card from './card';
import { Link } from 'react-router-dom';
import Slider from './slider';
import spider from './spiderman-10235.png'
import marvel from './marvel-logo-34303.png'

function App() {
   let [selectmovie, setselectmovie] = useState("All Movie")
   let handlemovie = (event) => {
      setselectmovie(event.target.value)
   }

   return (
      <div>
         <div className='box'>
            <div className='bgd'>
               <nav>
                  <div className='logo'>
                     <Nav />
                  </div>
                  <div className='login'>
                     <button>Sign In</button>
                  </div>
               </nav>
               <div>
                  <Slider />
               </div>
            </div>
         </div>
         <main>
            <div className='bgd2'>
               <div className='cardsx'>
                  <Card selectmovie={selectmovie} />
               </div>
            </div>
         </main>
         <div className='main2'>
            <div className='bgd2'>
               <div className='cardy'>
                  <Card2 />
               </div>
            </div>

         <footer>
            <div className='footerbox1'>
               <div className='footerbox2'>
                  <div className='spider'>
                     <img src={spider}></img>
                  </div>
                  <div className='company'>
                     <h1>Company</h1>
                     <h2>About Us</h2>
                     <h2>About Site</h2>
                  </div>
                  <div className='follow'>
                     <h1>Follow Us</h1>
                     <h2>Instagram</h2>
                     <h2>Github</h2>
                  </div>
                  <div className='contact'>
                     <h1>Contact Us</h1>
                     <h2>E-Mail</h2>
                     <h2>vdeendayal866@gmail.com</h2>
                  </div>
               </div>
               <div className='marvel'>
                  <img src={marvel}></img>
               </div>
            </div>
         </footer>
         </div>
      </div>
   )
}

export default App;
function Card2() {
   const [hoverimg, sethoverimg] = useState(new Array(32).fill(false))

   const handleimg = (index) => {
      const updatehovercard = [...hoverimg]
      updatehovercard[index] = true
      sethoverimg(updatehovercard)
   }
   const handleimgremove = (index) => {
      const updatehovercard = [...hoverimg]
      updatehovercard[index] = false
      sethoverimg(updatehovercard)
   }

   return (
      <div className='lcard'>
         {
            moviedata.slice(0, 32).map((v, i) => (
               <Link key={i} to={`/${v.uid}`}>
                  <div className='card' onMouseEnter={() => handleimg(i)} onMouseLeave={() => handleimgremove(i)}>
                     <div className='imgmovie'>
                        <img src={hoverimg[i] ? v.himg : v.images} alt={`${v.title} Thumbnail`} />
                     </div>
                     <h2>{v.Hero}</h2>
                  </div>
               </Link>
            ))
         }
      </div>
   )
}