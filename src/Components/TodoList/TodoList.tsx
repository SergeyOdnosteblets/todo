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
  onBackgroundChange,
}) => {
  const deleteTask = (id: number) => {
    setTodos(todos.filter((item: TaskType) => item.id !== id));
  };

  const checkedTask = (id: number) => {
    let newTodos = [...todos].filter((item: TaskType) => {
      if (item.id === id) {
        return (item.completed = !item.completed);
      } else {
        return item;
      }
    });
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
        className={onBackgroundChange ? `${style.todoList} ${style.light}` : `${style.todoList}`}>
        <Reorder.Group as="ul" axis="y" values={todos} onReorder={setTodos}>
          {filteredTodos.map((todo: TaskType) => {
            return (
              <TodoItem
                key={todo.id}
                todo={todo}
                deleteTask={deleteTask}
                checkedTask={checkedTask}
                onBackgroundChange={onBackgroundChange}
              />
            );
          })}
        </Reorder.Group>
        <TodoInfo
          todos={todos}
          setTodos={setTodos}
          filteredTodos={filteredTodos}
          onBackgroundChange={onBackgroundChange}
          getActiveTasks={getActiveTasks}
          getCompletedTasks={getCompletedTasks}
          getAllTasks={getAllTasks}
        />
      </div>
      <div className={style.statusItems}>
        <div
          className={onBackgroundChange ? `${style.todoList} ${style.light}` : `${style.todoList}`}>
          <StatusItems
            onBackgroundChange={onBackgroundChange}
            getActiveTasks={getActiveTasks}
            getCompletedTasks={getCompletedTasks}
            getAllTasks={getAllTasks}
          />
        </div>
      </div>
    </>
  );
};
