import React from 'react';
import { Reorder } from 'framer-motion';
import { TodoItemType } from '../../Types/TodoItemType';

import style from './TodoItem.module.scss';
import del from '../../Images/icon-cross.svg';

export const TodoItem: React.FC<TodoItemType> = ({ todo, deleteTask, checkedTask }) => {
  return (
    <Reorder.Item value={todo} key={todo.id} className={style.item}>
      <input type="checkbox" onChange={() => checkedTask(todo.id)} checked={todo.completed} />
      <span className={todo.completed ? style.text : ''}>{todo.title}</span>
      <button onClick={() => deleteTask(todo.id)}>
        <img src={del} alt="" />
      </button>
    </Reorder.Item>
  );
};
