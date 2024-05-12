import React from 'react';
import { useParams } from 'react-router-dom'
import './App.css';
import moviedata from './mdata';
import image from './icons8-star-48.png'

function Routall() {
  let { id } = useParams();
  let movie = moviedata.filter(movies =>
    movies.uid === id
  )
  // Example of redirecting from https://xyz.com with a token in the URL
  const myUrl = "https://www.freshlivenews.com/2024/01/moto-g34-5g-launched-in-india-price.html"
  const redirectUrl = `${myUrl}?title=${movie[0].title}&link=${movie[0].dlink}`;
  return (
    <div className='routbox'>
      <h1>{movie[0].title}</h1>
      <div className='flexme'>
        <img src={movie[0].thumbnail}></img>
        <div className='dimg'>
        </div>
        <div className='write'>
          <p>{movie[0].description}</p>
          <div className='star'>
            <img src={image} style={{ width: '30px' }}></img>
            <p>{movie[0].rating}</p>
          </div>
          <div className='btn2'>
            <button>Click Below For Download...</button>
          </div>
          <button>
            <a href={redirectUrl}>Download Now</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Routall;
