import React, { useEffect, useState } from 'react';
import { TodosProvider } from '../../contexts/TodosContext';
import TodoForm from '../todoComponents/TodoForm';
import TodoList from '../todoComponents/TodoList';

const TodoApp = () => {
  return (
    <TodosProvider>
      <div className='todo'>
        <div className='todo__container'>
          <TodoForm />
          <TodoList />
        </div>
      </div>
    </TodosProvider>
  );
};

export default TodoApp;
