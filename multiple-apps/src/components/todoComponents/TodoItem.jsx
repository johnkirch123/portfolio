import React, { useState } from 'react';
import { TiDeleteOutline } from 'react-icons/ti';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsCheck } from 'react-icons/bs';
import { useUpdateTodos } from '../../contexts/TodosContext';

const TodoItem = ({ todo }) => {
  const [input, setInput] = useState(todo?.todo);
  const [editMode, setEditMode] = useState(false);
  const { onHandleDelete, onHandleUpdate } = useUpdateTodos();

  const formatDate = (d) => {
    const date = new Date(d).toString();
    const dateArray = date.split(' ');
    return `${dateArray[0]} ${dateArray[1]} ${dateArray[2]} ${dateArray[3]} ${dateArray[4]}`;
  };

  const onHandleEdit = () => {
    setEditMode(!editMode);
    if (editMode) {
      onHandleUpdate({
        id: todo.id,
        todo: input,
        date: todo.date,
        complete: false
      });
    }
  };

  const onHandleComplete = () => {
    onHandleUpdate({
      id: todo.id,
      todo: input,
      date: todo.date,
      complete: !todo.complete
    });
  };

  return (
    <div className='todo__item' key={todo.id}>
      <div className='todo__item--box'>
        {editMode ? (
          <input
            type='text'
            name='text'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') onHandleEdit();
            }}
            className='todo__form--input'
          />
        ) : (
          <h3
            onClick={onHandleComplete}
            className={
              todo.complete ? 'todo__item--text-complete' : 'todo__item--text'
            }
          >
            {todo.todo}
          </h3>
        )}
        <p className='todo__item--date'>{formatDate(todo.date)}</p>
      </div>
      <div>
        <TiDeleteOutline
          className='button'
          onClick={() => onHandleDelete(todo.id)}
        />
        {editMode ? (
          <BsCheck onClick={onHandleEdit} className='button' />
        ) : (
          <AiOutlineEdit className='button' onClick={onHandleEdit} />
        )}
      </div>
    </div>
  );
};

export default TodoItem;
