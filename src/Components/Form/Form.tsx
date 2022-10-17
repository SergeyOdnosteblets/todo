import React from 'react';
import { FormTypes } from '../../Types/FormTypes';

import style from './Form.module.scss';

export const Form: React.FC<FormTypes> = ({ setTodos, todos, backGround }) => {
  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (e.target.todo.value) {
      setTodos([
        ...todos,
        {
          id: Math.random() * 10,
          title: e.target.todo.value,
          completed: false,
        },
      ]);
      e.target.reset();
    }
  };

  return (
    <div className={style.form}>
      <form onSubmit={handleSubmit} autoComplete="off">
        <input
          placeholder="Create a new todo..."
          name="todo"
          className={backGround ? `${style.input} ${style.light}` : `${style.input}`}
        />
      </form>
    </div>
  );
};
