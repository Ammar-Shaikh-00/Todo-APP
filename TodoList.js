import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

const TodoList = () => {
  const { todos, toggleTodo, deleteTodo } = useContext(TodoContext);

  return (
    <ul style={{ padding: 0, listStyle: 'none' }}>
      {todos.map(todo => (
        <li key={todo.id} style={{ display: 'flex', alignItems: 'center', gap: 10, margin: '10px 0' }}>
          <span
            onClick={() => toggleTodo(todo.id)}
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              color: todo.completed ? 'gray' : 'black',
              cursor: 'pointer',
              flex: 1
            }}
          >
            {todo.text}
          </span>
          <button onClick={() => deleteTodo(todo.id)} style={{ color: 'white', backgroundColor: 'red' }}>
            X
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
