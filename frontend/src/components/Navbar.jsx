import React, { useState } from 'react';
import "../styles/navbar.css"
import {BrowserRouter as Router, Link, Route, Routes, useNavigate} from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const handleLogout = () => {
        sessionStorage.removeItem("token");
        navigate("/");
    };

    const handleFileUpload = async (event) => {
        const file = event.target.files[0];
        if (file) {
            const formData = new FormData();
            formData.append('file', file);

            try {
                const response = await fetch('/api/upload', {
                    method: 'POST',
                    body: formData
                });
                // Handle response accordingly
            } catch (error) {
                console.error('Error uploading file:', error);
            }
        }
    };

    return (
        <nav>
                <div>
                    <nav className="navbar-container">
                            <img style={{width:"290px",height:"50px"}} src="https://see.fontimg.com/api/renderfont4/yE5M/eyJyIjoiZnMiLCJoIjozNCwidyI6MTI1MCwiZnMiOjI3LCJmZ2MiOiIjRkZGRkZGIiwiYmdjIjoiIzM1M0Q0QiIsInQiOjF9/TElTVCBIQU5ETEVS/moonhouse.png"/>
                            <div>
                                <Link  className="inner-navbar" to="/Home" >Home</Link>
                                <Link className="inner-navbar" to="/TodoList" >Todo List</Link>
                                <Link className="inner-navbar" to="/upload" >Upload File</Link>
                                <button onClick={handleLogout} style={{ margin: '10px',padding:"5px" }}>Logout</button>
                            </div>
                    </nav>
                </div>
        </nav>
    );
};

export default Navbar;
