/*import React from 'react';
function TodoItem({ task, deleteTask, toggleCompleted }) {
    function handleChange() {
        toggleCompleted(task.id);
    }

    return (
        <div className="todo-item">
            <input
                type="checkbox"
                checked={task.completed}
                onChange={handleChange}
            />
            <p>{task.text}</p>
            <button onClick={() => deleteTask(task.id)}>
                X
            </button>
        </div>
    );
}
export default TodoItem;*/

import React from 'react';

function TodoItem({ task, deleteTask, toggleCompleted }) {
    function handleChange() {
        toggleCompleted(task.id);
    }

    return (
        <div className="todo-item" style={styles.container}>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={handleChange}
                style={styles.checkbox}
            />
            <p style={styles.text}>{task.text}</p>
            <button onClick={() => deleteTask(task.id)} style={styles.button}>
                &#10005;
            </button>
        </div>
    );
}

const styles = {
    container: {
        marginTop: '60px',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#f4f4f4',
        borderRadius: '5px',
        padding: '10px',
        marginBottom: '10px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    checkbox: {
        marginRight: '10px',
    },
    text: {
        margin: '0',
        flexGrow: '1',
        textDecoration: 'none',
        color: '#333',
    },
    button: {
        backgroundColor: 'Black',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        padding: '5px 10px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease, transform 0.1s ease',
        outline: 'none'
    },
};

export default TodoItem;

