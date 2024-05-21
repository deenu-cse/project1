import React from 'react'
import './App.css';
import { Link } from 'react-router-dom';
import spider from './spiderman-10235.png'
import marvel from './marvel-logo-34303.png'

export default function Footer() {
    return (
        <div>
            <footer>
                <div className='footerbox1'>
                    <div className='footerbox2'>
                        <div className='spider'>
                            <img src={spider}></img>
                        </div>
                        <div className='company'>
                            <h1>Company</h1>
                            <Link to={'/About Us'}>
                                <h2>About Us</h2>
                            </Link>
                        </div>
                        <div className='follow'>
                            <Link to={'/follow us'}>
                            <h1>Follow Us</h1>
                            </Link>
                            <h2>Instagram</h2>
                            <h2>Github</h2>
                        </div>
                        <div className='contact'>
                            <Link to={'/Contact Us'}>
                                <h1>Contact Us</h1>
                            </Link>
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
    )
}
export { Footer };