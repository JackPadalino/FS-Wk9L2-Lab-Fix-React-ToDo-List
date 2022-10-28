import React, { useState,useEffect } from 'react';
import { createTodo,deleteTodo } from '../store/todosSlice';
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditTodo =  () => {
    const {todoId}=useParams();
    const dispatch = useDispatch("");
    const navigate = useNavigate();
    const handleDelete = async() => {
        await axios.delete(`/api/todos/${todoId}`)
        navigate('/');
    };
    return (
        <div>
            <button onClick = {handleDelete}>Delete</button>
        </div>
    );
};

export default EditTodo;