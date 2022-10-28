import React, { useState } from 'react';
import { createTodo } from '../store/todosSlice';
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditTodo = () => {

    const [taskName, setTaskName] = useState("");
  const [assignee, setAssignee] = useState("");

  const dispatch = useDispatch("");
  const navigate = useNavigate();

  const handleDelete = async () => {
    
    await axios.post('/api/todos', {
      taskName,
      assignee
    });
    dispatch(createTodo(created))
    navigate('/');
  }

  const handleUpdateTask = (event) => {
    setTaskName(event.target.value);
  }

  const handleUpdateAssignee = (event) => {
    setAssignee(event.target.value);
  }
   
    

    return (
        <div>
            <button onClick = {deleteTodo}>Delete</button>
        </div>
    );
};

export default EditTodo;