import React from 'react';
import { Reorder } from 'framer-motion';
import { TodoItemType } from '../../Types/TodoItemType';

import style from './TodoItem.module.scss';
import delDark from '../../Images/icon-cross-dark.svg';
import delLight from '../../Images/icon-cross-light.svg';
import check from '../../Images/icon-check.svg';

export const TodoItem: React.FC<TodoItemType> = ({ todo, deleteTask, checkedTask, backGround }) => {
  return (
    <Reorder.Item
      value={todo}
      key={todo.id}
      className={backGround ? `${style.item} ${style.light}` : `${style.item}`}>
      <div>
        <input type="checkbox" onChange={() => checkedTask(todo.id)} checked={todo.completed} />
        <span className={todo.completed ? `${style.checked} ${style.text}` : style.text}>
          {todo.title}
        </span>
      </div>
      <button onClick={() => deleteTask(todo.id)}>
        <img
          src={backGround ? delDark : delLight}
          alt=""
          className={backGround ? `${style.btn__del} ${style.del__light}` : style.btn__del}
        />
      </button>
    </Reorder.Item>
  );
};
