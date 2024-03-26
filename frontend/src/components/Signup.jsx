/*import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const response = await fetch('http://localhost:8080/api/users/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',

                },
                body: JSON.stringify(user),
            });

            if (response.ok) {

                const responseData = await response.json();
                console.log(responseData.message);
            } else {

                const errorData = await response.json();
                console.error('Error during signup:', errorData.error);
            }
        } catch (error) {

            console.error('Error during signup:', error.message);
        }
    };


    return (
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type="text" name="username" value={user.username} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" name="email" value={user.email} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" name="password" value={user.password} onChange={handleChange} />
                </label>
                <br />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default Signup;*/

import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/api/users/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });

            if (response.ok) {
                const responseData = await response.json();
                console.log(responseData.message);
                navigate("/")
            } else {
                const errorData = await response.json();
                console.error('Error during signup:', errorData.error);
            }
        } catch (error) {
            console.error('Error during signup:', error.message);
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' ,backgroundColor:"white",marginTop:"15vh"}}>
            <h2 style={{ textAlign: 'center' }}>Sign Up</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="username" style={{ fontWeight: 'bold' }}>Username:</label>
                    <input type="text" id="username" name="username" value={user.username} onChange={handleChange} style={{ width: '380px', padding: '8px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc' }} />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="email" style={{ fontWeight: 'bold' }}>Email:</label>
                    <input type="email" id="email" name="email" value={user.email} onChange={handleChange} style={{ width: '380px', padding: '8px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc' }} />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="password" style={{ fontWeight: 'bold' }}>Password:</label>
                    <input type="password" id="password" name="password" value={user.password} onChange={handleChange} style={{ width: '380px', padding: '8px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc' }} />
                </div>
                <button type="submit" style={{ width: '100%', padding: '10px', fontSize: '16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Sign Up</button>
            </form>
        </div>
    );
};

export default Signup;
