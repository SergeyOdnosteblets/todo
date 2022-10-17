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
  backGround,
}) => {
  const [refresh, setRefresh] = useState(false);
  const deleteTask = (id: number) => {
    setTodos(todos.filter((item: TaskType) => item.id !== id));
  };

  const checkedTask = (id: number) => {
    todos.filter((item: TaskType) => {
      if (item.id === id) {
        return (item.completed = !item.completed);
      }
    });
    setTodos(todos);
    setRefresh(!refresh);
  };

  const getActiveTasks = () => {
    setFilteredTodos(todos.filter((item: TaskType) => item.completed === false));
  };

  const getCompletedTasks = () => {
    setFilteredTodos(todos.filter((item: TaskType) => item.completed === true));
  };

  const getAllTasks = () => {
    setFilteredTodos(todos);
  };

  return (
    <>
      <div className={backGround ? `${style.todoList} ${style.light}` : `${style.todoList}`}>
        <Reorder.Group as="ul" axis="y" values={todos} onReorder={setTodos}>
          {filteredTodos.map((todo: TaskType) => {
            return (
              <TodoItem
                key={todo.id}
                todo={todo}
                deleteTask={deleteTask}
                checkedTask={checkedTask}
                backGround={backGround}
              />
            );
          })}
        </Reorder.Group>
        <TodoInfo
          todos={todos}
          setTodos={setTodos}
          filteredTodos={filteredTodos}
          backGround={backGround}
          getActiveTasks={getActiveTasks}
          getCompletedTasks={getCompletedTasks}
          getAllTasks={getAllTasks}
        />
      </div>
      <div className={style.statusItems}>
        <div className={backGround ? `${style.todoList} ${style.light}` : `${style.todoList}`}>
          <StatusItems
            backGround={backGround}
            getActiveTasks={getActiveTasks}
            getCompletedTasks={getCompletedTasks}
            getAllTasks={getAllTasks}
          />
        </div>
      </div>
    </>
  );
};
