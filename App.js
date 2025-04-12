import React from 'react';
import { TodoProvider } from './context/TodoContext';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

const App = () => (
  <TodoProvider>
    <div style={{ padding: 20 }}>
      <h1>My TODO App</h1>
      <AddTodo />
      <TodoList />
    </div>
  </TodoProvider>
);

export default App;
