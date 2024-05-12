import './App.css';
import moviedata from './mdata'
import { forwardRef, useEffect, useState } from 'react';
import Nav from './nav';
import Card from './card';
import { Link } from 'react-router-dom';
import Slider from './slider';

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

         </div>
      </div>
   )
}

export default App;
function Card2() {
   return (
      <div className='lcard'>
         {
            moviedata.slice(0, 32).map((v, i) => (
               <Link key={i} to={`/${v.uid}`}>
                  <div className='card'>
                     <div className='imgmovie'>
                        <img src={v.images} alt={`${v.title} Thumbnail`} />
                     </div>
                     <h2>{v.Hero}</h2>
                  </div>
               </Link>
            ))
         }
      </div>
   )
}