// TodoApp.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// Action Creators
import { addTodo, toggleTodo, deleteTodo } from '../reducers/actions';
import './todo.css';

const TodoApp = () => {
    const todos = useSelector((state) => state);

    const dispatch = useDispatch();

    const [newTodoText, setNewTodoText] = useState('');

    const handleAddTodo = () => {
        if (newTodoText.trim() !== '') {
            dispatch(addTodo(newTodoText));
            setNewTodoText('');
        }
    };

    const handleToggleTodo = (id) => {
        dispatch(toggleTodo(id));
    };

    const handleDeleteTodo = (id) => {
        dispatch(deleteTodo(id));
    };

    return (
        <div>
            <input
                type="text"
                value={newTodoText}
                onChange={(e) => setNewTodoText(e.target.value)}
            />
            <button onClick={() => handleAddTodo()}>Add Todo</button>
            <h2>Add your ToDo!!</h2>
            <ul>
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        onClick={() => handleToggleTodo(todo.id)}
                    >
                        <input
                            type='checkbox'
                            checked={todo.isCompleted}
                        />
                        <span style={{ textDecoration: todo.isCompleted  ? 'line-through' : 'none', minWidth: '45%' }}>{todo.todoName}</span>
                        <b style={{ padding: '10px' }}>Added on - {todo.time}</b>
                        {
                            todo.isCompleted == true ? (<span style={{ float: 'right', color: '#1c8604' }}>Marked as Completed ! </span>) : <></>
                            //todo.isCompleted && (<span style={{ float: 'right', color: '#1c8604' }}>Marked as Completed ! </span>)
                        }
                        <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoApp;
