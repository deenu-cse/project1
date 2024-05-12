// Card.jsx
import React, { useState } from 'react';
import './random.css';
import moviedata from './mdata';
import { Link } from 'react-router-dom';

export default function Card({ selectmovie }) {
    const [input, setinput] = useState('');
    const handleCards = (event) => {
        setinput(event.target.value === "All Movie" ? "" : event.target.value);
    };

    const filterData = moviedata.filter(movie => (
        (input === '' || Object.values(movie).some(value =>
            typeof value === 'string' && value.toLowerCase().includes(input.toLowerCase())
        )) &&
        (selectmovie === "All Movie" || movie.id === selectmovie)
    ));

    return (
        <div>
            <div className='flex2'>
                <select value={input} onChange={handleCards}>
                    <option value="All Movie">All Movie</option>
                    <option value="Iron Man">Iron Man</option>
                    <option value="Ant-Man">Ant-Man</option>
                    <option value="Spider-Man">Spider-Man</option>
                    <option value="Hulk">Hulk</option>
                    <option value="X-Men">X-Men</option>
                    <option value="Captain America">Captain America</option>
                    <option value="Avengers">Avengers</option>
                    <option value="Thor">Thor</option>
                    <option value="Doctor Strange">Doctor Strange</option>
                </select>
                <input value={input} onChange={handleCards} placeholder='search here...' />
            </div>
            <div className='cards'>
                {filterData.map((v, i) => (
                    <Link key={i} to={`/movies/${v.uid}`} >
                        <div className='card'>
                            <div className='imgmovie'>
                                <img src={v.thumbnail} alt={`${v.title} Thumbnail`} />
                            </div>
                            <h2>{v.year}</h2>
                            <h3>{v.rating}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
