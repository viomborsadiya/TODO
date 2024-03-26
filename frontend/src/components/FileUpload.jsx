// FileUpload.js
import React, {useEffect} from 'react';
import Navbar from "./Navbar";
import {useNavigate} from "react-router-dom";

const FileUpload = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const token = sessionStorage.getItem("token");
        if(!token)
        {
            navigate("/");
        }
    }, []);
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
        <>
            <Navbar />
            <div>
                <h2>Upload File</h2>
                <input type="file" onChange={handleFileUpload}/>
                <button>Submit</button>
            </div>
        </>

    );
};

export default FileUpload;

