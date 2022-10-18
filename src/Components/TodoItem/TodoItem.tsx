import React from 'react';
import { Reorder } from 'framer-motion';
import { TodoItemType } from '../../Types/TodoItemType';

import style from './TodoItem.module.scss';
import delDark from '../../Images/icon-cross-dark.svg';
import delLight from '../../Images/icon-cross-light.svg';
import check from '../../Images/icon-check.svg';

export const TodoItem: React.FC<TodoItemType> = ({ todo, deleteTask, checkedTask, theme }) => {
  return (
    <>
      <Reorder.Item
        value={todo}
        key={todo.id}
        className={theme ? `${style.item} ${style.light}` : `${style.item}`}>
        <div className={style.task} onClick={() => checkedTask(todo.id)}>
          <div
            className={
              todo.completed
                ? `${style.box__completed} ${style.circle}`
                : `${style.box} ${style.circle}`
            }>
            <img className={style.image} src={todo.completed ? check : ''} alt="" />
          </div>
          <span className={todo.completed ? `${style.checked} ${style.text}` : style.text}>
            {todo.title}
          </span>
        </div>
        <button onClick={() => deleteTask(todo.id)}>
          <img
            src={theme ? delDark : delLight}
            alt=""
            className={theme ? `${style.btn__del} ${style.del__light}` : style.btn__del}
          />
        </button>
      </Reorder.Item>
    </>
  );
};