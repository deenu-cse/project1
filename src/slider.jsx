import React from 'react'
import img1 from './3rdbac.jpg'
import img2 from './peakpx.jpg'
import img3 from './peakpx2.jpg'
import moviedata from './mdata'
import { Link } from 'react-router-dom'
import slid from './slid'

export default function Slider() {
    return (
        <div className="sliders">
            {moviedata.filter(item => Object.keys(item).some(value => value === "popular"))
                .map((item, i) => (
                    <Link to={`/movies/${item.uid}`}>
                        <div className="slides">
                            <img src={item.thumbnail}></img>
                        </div>
                    </Link>
                ))}
        </div>
    )
}
