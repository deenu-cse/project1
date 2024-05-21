import React from 'react';
import './App.css';
import Footer from './Footer';

function Follow() {
    return (
        <>
            <div className='container '>
                <div className='aboutbox'>
                    <ul>
                        <li><img src="https://img.icons8.com/?size=100&id=xtGpGyuYeJMc&format=png&color=000000" /></li>
                        <li>
                            <h1>Follow Us</h1>
                        </li>
                        <li>Stay connected with us on social media! Follow us on Instagram and GitHub to keep up with our latest updates and projects.
                        Our Instagram account brings you behind-the-scenes glimpses, sneak peeks, and updates on our latest activities. Follow us on Instagram here.
                        </li>
                        <h2>Instagram</h2>
                        <li>deendayal_verma99</li>
                        <li>
                            <h1>mcubydeenu.vercel.app</h1>
                            <li>On GitHub, you can find our open-source projects, contribute to ongoing developments, and explore our repositories. Follow us on GitHub here.</li>
                        </li>
                            <li>
                                <h2>Github</h2>
                            </li>
                            <li>DEENDAYAL</li>
                            <li>deenu-cse</li>
                            <h2>Join our community, engage with us, and be part of our journey as we strive to create and innovate!</h2>
                    </ul>
                </div>
                <div className='fb2'>
                    <Footer />
                </div>
            </div>
        </>
    )
}
export default Follow;