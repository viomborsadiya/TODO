import React, { useEffect, useState } from 'react';
import TodoItem from './TodoItem';
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

function TodoList() {
    const navigate = useNavigate();
    let userName;
    const [user, setUser] = useState("");
    useEffect(() => {
        const token = sessionStorage.getItem("token");
        if (!token) {
            navigate("/");
        }
        const name = token.split("|");
        userName = name[0];
        fetchUserId(userName);


    }, []);
    useEffect(()=>{
        if(user)
        {
            fetchAllTodoTask();
        }
    },[]);
    const [task, setTask] = useState("");
    const [todoTask, setTodoTask] = useState([]); // Initialize as empty array

    const handleTask = async () => {
        if(task){
            try {
                const res = await fetch(`http://localhost:8080/api/addTodo/${user.id}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(task)
                });
                if (!res.ok) {
                    throw new Error('Failed to add task');
                }
                console.log("TASK ADDED SUCCESSFULLY");
                setTask("");
                fetchAllTodoTask();
            } catch (error) {
                console.error('Error adding task:', error);
            }
        }
    }

    const fetchUserId = async (userName) => {
        try {
            const res = await fetch(`http://localhost:8080/api/users/${userName}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!res.ok) {
                throw new Error('Failed to fetch user ID');
            }
            const data = await res.json();
            console.log(data);
            setUser(data);
        } catch (error) {
            console.error('Error fetching user ID:', error);
        }
    };

    const fetchAllTodoTask = async () => {
        try {
            const res = await fetch(`http://localhost:8080/api/getTask/${user.id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!res.ok) {
                throw new Error('Failed to fetch tasks');
            }
            const data = await res.json();
            setTodoTask(data);
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    }
    const handleDelete = async (taskId) => {
        try {
            const res = await fetch(`http://localhost:8080/api/deleteTask/${taskId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!res.ok) {
                throw new Error('Failed to delete task');
            }
            console.log("deleted");
            fetchAllTodoTask();
        } catch (error) {
            console.error('Error Deleting task:', error);
        }
    }

    return (
        <>
            <Navbar />
            <div className="todo-list">
                <center><input
                    value={task}
                    onChange={e => setTask(e.target.value)}
                    style={{
                        width: "500px",
                        height: "30px",
                        fontSize: "20px",
                        border: "none",
                        borderRadius: "5px",
                        marginBottom: "25px",
                        marginRight: "10px",
                        marginTop: "60px",
                        boxShadow: "0px 1px 10px rgba(0,0,0,0.5)"
                    }}
                />
                    <button onClick={handleTask} style={{
                        marginTop: "60px",
                        marginBottom: '25px',
                        padding: "7px",
                        width: "50px",
                        border: "none",
                        borderRadius: "5px"
                    }}>Add
                    </button>
                </center>
                {/* Render each task */}
                <div>
                    {todoTask && todoTask.map(task => (
                        <center key={task.id}>
                            <table style={{
                                backgroundColor: "rgba(0,0,0,0.7)",
                                color: "white",
                                width: "700px",
                                marginBottom: "2px",
                                borderRadius: "5px",
                                borderCollapse: "collapse",
                                fontSize: "20px",
                            }}>
                                <tbody>
                                <tr>
                                    <td style={{padding: "10px", textAlign: "left"}}>{task.task}</td>
                                    <td style={{padding: "10px", textAlign: "right"}}>
                                        <button style={{
                                            backgroundColor: "blue",
                                            color: "white",
                                            border: "none",
                                            padding: "10px 20px",
                                            borderRadius: "5px",
                                            cursor: "pointer"
                                        }}
                                        onClick={()=>handleDelete(task.id)}
                                        >
                                            Done
                                        </button>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </center>
                    ))}
                </div>


            </div>
        </>
    );
}

export default TodoList;
