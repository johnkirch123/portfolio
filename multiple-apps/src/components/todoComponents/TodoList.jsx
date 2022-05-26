import React, { useContext, useEffect } from 'react';
import TodoItem from './TodoItem';
import { useTodos } from '../../contexts/TodosContext';

const TodoList = () => {
  const todos = useTodos();

  return (
    <>
      {todos?.map((todo, index) => {
        return <TodoItem todo={todo} key={index} />;
      })}
    </>
  );
};

export default TodoList;
