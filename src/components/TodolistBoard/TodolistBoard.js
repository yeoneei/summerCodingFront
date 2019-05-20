import React from 'react';
import './TodolistBoard.css';
import Todolist from '../TodoList/TodoList';

const TodolistBoard = () => {
    return (
        <ul className="TodolistBoard">
          <Todolist></Todolist>

        </ul>
    );
};


export default TodolistBoard;
