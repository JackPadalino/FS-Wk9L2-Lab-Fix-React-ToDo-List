import React, { useEffect } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Todos from './Todos';
import CreateTodo from './CreateTodo';
import EditTodo from './EditTodo';
import { useDispatch, useSelector } from 'react-redux';
import { setTodos } from '../store/todosSlice';
import axios from 'axios';

const App = () => {
  const todos = useSelector(state => state.todos.todos);
  const dispatch = useDispatch();

  const fetchTodos = async () => {
    const { data: todos } = await axios.get('/api/todos');
    dispatch(setTodos(todos))
  }

  useEffect(() => {
    fetchTodos();
  }, [])

  return (
    <div id='main' >
      <h1>
        <Link to='/'>Todos ({todos.length})</Link>
      </h1>
      <Link to='/todos/create'>Create A New Todo</Link>
      <Routes>
        <Route path='/' element={<Todos />} />
        <Route path='/todos/:todoId' element={<EditTodo />}/>
        <Route path='/todos/create' element={<CreateTodo />} />
      </Routes>
    </div>
  );
}

export default App;
