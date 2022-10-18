import React, { useState } from 'react';
import { Reorder } from 'framer-motion';
import { TodoListType } from '../../Types/TodoListType';

import style from './TodoList.module.scss';
import { TodoItem } from '../TodoItem/TodoItem';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import { TaskType } from '../../Types/TaskType';
import { StatusItems } from '../StatusItems/StatusItems';

export const TodoList: React.FC<TodoListType> = ({
  todos,
  setTodos,
  setFilteredTodos,
  filteredTodos,
  theme,
}) => {
  const deleteTask = (id: number) => {
    setTodos(todos.filter((item: TaskType) => item.id !== id));
  };

  const checkedTask = (id: number) => {
    let newTodos = [...todos];
    let index = newTodos.findIndex((item) => item.id === id);
    let element = newTodos[index];
    element.completed = !element.completed;
    newTodos.splice(index, 1, element);

    setTodos(newTodos);
  };

  const getActiveTasks = () => {
    setFilteredTodos(todos.filter((item: TaskType) => !item.completed));
  };

  const getCompletedTasks = () => {
    setFilteredTodos(todos.filter((item: TaskType) => !!item.completed));
  };

  const getAllTasks = () => {
    setFilteredTodos(todos);
  };

  return (
    <>
      <div
        className={theme ? `${style.todoList} ${style.light}` : `${style.todoList}`}>
        <Reorder.Group as="ul" axis="y" values={todos} onReorder={setTodos}>
          {filteredTodos.map((todo: TaskType) => {
            return (
              <TodoItem
                key={todo.id}
                todo={todo}
                deleteTask={deleteTask}
                checkedTask={checkedTask}
                theme={theme}
              />
            );
          })}
        </Reorder.Group>
        <TodoInfo
          todos={todos}
          setTodos={setTodos}
          filteredTodos={filteredTodos}
          theme={theme}
          getActiveTasks={getActiveTasks}
          getCompletedTasks={getCompletedTasks}
          getAllTasks={getAllTasks}
        />
      </div>
      <div className={style.statusItems}>
        <div
          className={theme ? `${style.todoList} ${style.light}` : `${style.todoList}`}>
          <StatusItems
            theme={theme}
            getActiveTasks={getActiveTasks}
            getCompletedTasks={getCompletedTasks}
            getAllTasks={getAllTasks}
          />
        </div>
      </div>
    </>
  );
};