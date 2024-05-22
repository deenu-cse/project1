import React from 'react';
import './App.css';
import Footer from './Footer';
import Nav from './nav';

function Contact() {
    return (
        <>
            <div className='container '>
                <Nav/>
                <div className='aboutbox'>
                    <ul>
                        <li><img width="80" height="80" src="https://img.icons8.com/officel/80/add-contact-to-company.png" alt="add-contact-to-company" /></li>
                        <li>
                            <h1>Contact Us</h1>
                        </li>
                        <li>Feel free to contact us</li>
                        <li>Please feel free to contact us regarding any need. We look forward to hearing from you. Also, you can post a request regarding new movies. We will be more than happy to post your favorite movies.</li>
                        <li>
                            <h1>mcubydeenu.vercel.app</h1>
                            <li>
                                <h2>Email:vdeendayal866@gmail.com</h2>
                            </li>
                        </li>
                        <li>
                            <h1>Report Problem</h1>
                            <li>NOTE: VegaMovies.To is a free movie download site where we update content 
                             If you find any broken link on our site feels free to report it. Your contribution will be highly appreciated. You can always get back to us via email and call. You will get the appropriate reply to your question within 24 working hours. Don’t forget to subscribe for news later services. Also, follow us on all social media platform.</li>
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
export default Contact;