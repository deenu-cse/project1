import './App.css';
import moviedata from './mdata'
import { forwardRef, useEffect, useState } from 'react';
import Nav from './nav';
import Card from './card';
import { Link, useLocation } from 'react-router-dom';
import Slider from './slider';
import spider from './spiderman-10235.png'
import marvel from './marvel-logo-34303.png'
import Footer from './Footer';

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
                     <Link to={'/SignIn'}>
                     <button>Sign In</button>
                     </Link>
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
            <Footer/>
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