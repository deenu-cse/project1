import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import Employe from './server';

export default function Login() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.post('api/LogIn', { email, password })
            .then(result => {
                console.log(result);
                navigate("/");
            })
            .catch(err => console.log(err));
    }

    return (
        <div className='sign1'>
            <div className='sign2'>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <div className='n2'>
                        <label>Email</label>
                        <input type='text' placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='n2'>
                        <label>Password</label>
                        <input type='password' placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}
