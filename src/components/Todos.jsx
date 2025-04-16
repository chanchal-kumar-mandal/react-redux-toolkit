import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo } from '../redux/todos/todosSlice';

const Todos = () => {
  const [text, setText] = useState('');
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim() !== '') {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '2rem auto', border: "1px solid blue", padding: "10px 20px", textAlign: 'center' }}>
      <h2>📝 To-Do List</h2>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a task..."
        style={{ padding: '8px', width: '70%' }}
      />
      <button onClick={handleAdd} style={{ padding: '8px 16px', marginLeft: '8px' }}>
        Add
      </button>

      <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
        {todos.map((todo) => (
          <li key={todo.id} style={{ marginBottom: '10px' }}>
            <span
              onClick={() => dispatch(toggleTodo(todo.id))}
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                cursor: 'pointer',
              }}
            >
              {todo.text}
            </span>
            <button
              onClick={() => dispatch(deleteTodo(todo.id))}
              style={{ marginLeft: '10px', color: 'red' }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
