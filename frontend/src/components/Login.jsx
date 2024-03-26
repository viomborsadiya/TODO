/*import React, { useState } from 'react';
import axios from 'axios';


const Login = () => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value,
        });
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        try {

            const response = await axios.post('http://localhost:8080/api/users/login', credentials);

            if (response.status === 200) {

                const { token } = response.data;
                sessionStorage.setItem('token', token);
                console.log('Login successful!');

            } else {

                console.error('Login failed:', response.data.error);
            }
        } catch (error) {

            console.error('Error during login:', error.message);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <label>
                    Username:
                    <input type="text" name="username" value={credentials.username} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" name="password" value={credentials.password} onChange={handleChange} />
                </label>
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;*/

import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value,
        });
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/api/users/login', credentials);

            if (response.status === 200) {
                const { token } = response.data;
                sessionStorage.setItem('token', token);
                console.log('Login successful!');
                navigate("/home");
            } else {
                console.error('Login failed:', response.data.error);
            }
        } catch (error) {
            console.error('Error during login:', error.message);
        }
    };

    return (
        <center>
            <div style={{
                maxWidth: '400px',
                margin: '0 auto',
                padding: '20px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                marginTop:"20vh",
                backgroundColor:"rgb(255,253,253)",
                boxShadow:"0px 2px 10px rgba(0,0,0,.5)"
            }}>
                <h2 style={{textAlign: 'center'}}>Login</h2>
                <form onSubmit={handleLogin} style={{display: 'flex', flexDirection: 'column'}}>
                    <div style={{marginBottom: '15px'}}>
                        <label htmlFor="username" style={{fontWeight: 'bold'}}>Username:</label>
                        <input type="text" id="username" name="username" value={credentials.username}
                               onChange={handleChange} style={{
                            width:"23vw",
                            padding: '8px',
                            fontSize: '16px',
                            borderRadius: '5px',
                            border: '1px solid #ccc'
                        }}/>
                    </div>
                    <div style={{marginBottom: '15px'}}>
                        <label htmlFor="password" style={{fontWeight: 'bold'}}>Password:</label>
                        <input type="password" id="password" name="password" value={credentials.password}
                               onChange={handleChange} style={{
                            width: '23vw',
                            padding: '8px',
                            fontSize: '16px',
                            borderRadius: '5px',
                            border: '1px solid #ccc'
                        }}/>
                    </div>
                    <button type="submit" style={{
                        width: '100%',
                        padding: '10px',
                        fontSize: '16px',
                        backgroundColor: '#007bff',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}>Login
                    </button>
                    <div>Don't have any account? <button onClick={() => {
                        navigate("/signup")
                    }}
                    style={{
                        padding:"15px",
                        border:"none",
                        marginTop:"5px",
                        borderRadius:"5px",
                        backgroundColor:'#007bff',
                        color:"white"
                    }}>SignUp</button></div>
                </form>
            </div>
        </center>
    );
};

export default Login;

