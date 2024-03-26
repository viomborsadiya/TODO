import React, { useState, useEffect } from 'react';
import Navbar from "./Navbar";
import {useNavigate} from "react-router-dom";

export default function Home(){
    const navigate = useNavigate();
    useEffect(() => {
        const token = sessionStorage.getItem("token");
        if(!token)
        {
            navigate("/");
        }
    }, []);
    return (
        <>
            <Navbar/>
            <center style={{marginTop:"35vh"}}>
                <div>
                    <div style={{marginBottom:"10px"}}>THIS OUR HOME PAGE.</div>
                    <div> YOU CAN STORE YOUR DAILY TASK IN OUR APP.</div>
                </div>
            </center>
        </>
    );
}