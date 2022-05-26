import React, { useContext, useState } from 'react';

const TodosContext = React.createContext();
const UpdateTodosContext = React.createContext();

export function useTodos() {
  return useContext(TodosContext);
}

export function useUpdateTodos() {
  return useContext(UpdateTodosContext);
}

export function TodosProvider({ children }) {
  const [todos, setTodos] = useState(
    localStorage.getItem('todos')
      ? JSON.parse(localStorage.getItem('todos'))
      : []
  );

  const onHandleSubmit = (e, input) => {
    e.preventDefault();
    const newTodo = {
      id: Math.floor(Math.random() * 100000),
      todo: input,
      date: Date.now(),
      complete: false
    };
    const items = [newTodo, ...todos];
    localStorage.setItem('todos', JSON.stringify(items));
    setTodos(items);
  };

  const onHandleUpdate = (updatedItem) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === updatedItem.id) {
        return updatedItem;
      }
      return todo;
    });
    localStorage.setItem('todos', JSON.stringify(newTodos));
    setTodos(newTodos);
  };

  const onHandleDelete = (id) => {
    let newTodos = [...todos].filter((todo) => todo.id !== id);
    localStorage.setItem('todos', JSON.stringify(newTodos));
    setTodos(newTodos);
  };

  return (
    <UpdateTodosContext.Provider
      value={{ onHandleSubmit, onHandleDelete, onHandleUpdate }}
    >
      <TodosContext.Provider value={todos}>{children}</TodosContext.Provider>
    </UpdateTodosContext.Provider>
  );
}
