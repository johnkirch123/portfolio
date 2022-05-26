import React, { useState } from 'react';
import { useUpdateTodos } from '../../contexts/TodosContext';

const TodoForm = () => {
  const [input, setInput] = useState('');
  const { onHandleSubmit } = useUpdateTodos();

  return (
    <form className='todo__form'>
      <input
        type='text'
        name='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className='todo__form--input'
      />
      <button
        className='todo__form--button button'
        onClick={(e) => {
          onHandleSubmit(e, input);
          setInput('');
        }}
      >
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
