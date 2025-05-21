import React from 'react';

function Todo({ todo, toggleComplete, deleteTodo }) {
    return (
        <div className={`todo ${todo.completed ? 'completed' : ''}`}>
            <span onClick={() => toggleComplete(todo.id)}>{todo.text}</span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
    );
}

export default Todo;
