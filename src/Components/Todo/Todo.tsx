import React, { useState, useEffect } from 'react';
import { TaskType } from '../../Types/TaskType';

import { Form } from '../Form/Form';
import { TodoList } from '../TodoList/TodoList';

import style from './Todo.module.scss';
import moon from '../../Images/icon-moon.svg';
import sun from '../../Images/icon-sun.svg';
import { TodoType } from '../../Types/TodoType';

export const Todo: React.FC<TodoType> = ({ backGround, setBackGround }) => {
  const [todos, setTodos] = useState<TaskType | []>([]);
  const [filteredTodos, setFilteredTodos] = useState(todos);

  useEffect(() => {
    setFilteredTodos(todos);
  }, [todos]);

  const onChangeBackGround = () => {
    setBackGround(!backGround);
  };

  return (
    <div className={style.todo}>
      <div className={style.title}>
        <div className={style.title__text}>Todo</div>
        <button onClick={() => onChangeBackGround()}>
          <img src={moon} alt="" className={style.icon} />
        </button>
      </div>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        setFilteredTodos={setFilteredTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
};
