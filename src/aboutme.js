import React from 'react';
import './App.css';
import Footer from './Footer';
import Nav from './nav';

function Aboutme() {
    return (
        <>
            <div className='container '>
                <Nav/>
                <div className='aboutbox'>
                    <ul>
                        <li>
                            <h1>About Us</h1>
                        </li>
                        <li>Welcome to mcubydeenu.vercel.app</li>
                        <li>At mcubydeenu.vecel.app, we're passionate about all things Marvel. Whether you're a die-hard fan or just discovering the Marvel Universe, we're here to be your ultimate destination for everything Marvel-related.</li>
                        <li>
                            <h1>Our Mission</h1>
                            <li>Our mission at mcubydeenu.vecel.app is simple: to provide a dynamic platform for Marvel fans to connect, engage, and celebrate their love for Marvel. We strive to create a welcoming community where fans can share their enthusiasm, creativity, and insights about their favorite characters, stories, and films.</li>
                        </li>
                        <li>
                            <h1>Our Story</h1>
                            <li>Founded in 13 may 2024, mcubydeenu.vecel.app was born out of a shared love for Marvel and a desire to create a space where fans could come together to explore, discuss, and revel in the Marvel Universe. Since then, we've grown into a thriving community of passionate fans from around the globe.</li>
                        </li>
                    </ul>
                </div>
                <div className='fb2'>
                    <Footer />
                </div>
            </div>
        </>
    )
}
export default Aboutme;