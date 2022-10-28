import React, { useState } from 'react';
import { createTodo } from '../store/todosSlice';
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditTodo = () => {

    //const dispatch = useDispatch("");
    const navigate = useNavigate();

    const handleDelete = () => {
        navigate('/');
    }
   
    

    return (
        <div>
            <button onClick = {handleDelete}>Delete</button>
        </div>
    );
};

export default EditTodo;