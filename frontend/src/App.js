import React, { useState, useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes, Link, BrowserRouter} from 'react-router-dom';
import FileUpload from "./components/FileUpload";
//import ItemList from './components/ItemList';
import Login from './components/Login';
import Signup from './components/Signup';
import TodoList from "./components/TodoList";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
//import AddItem from './components/AddItem';

const App = () => {





  return (
      <BrowserRouter>
        <>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/todoList" element={<TodoList />} />
                    <Route path="/upload" element={<FileUpload />} />
                </Routes>

        </></BrowserRouter>
  );
};
export default App;