import React, { useState } from 'react';
import { Reorder } from 'framer-motion';
import { TodoListType } from '../../Types/TodoListType';

import style from './TodoList.module.scss';
import { TodoItem } from '../TodoItem/TodoItem';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import { TaskType } from '../../Types/TaskType';

export const TodoList: React.FC<TodoListType> = ({
  todos,
  setTodos,
  setFilteredTodos,
  filteredTodos,
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

  return (
    <>
      <Reorder.Group
        as="ul"
        axis="y"
        values={todos}
        onReorder={setTodos}
        className={style.todoList}>
        {filteredTodos.map((todo: TaskType) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              deleteTask={deleteTask}
              checkedTask={checkedTask}
            />
          );
        })}
      </Reorder.Group>
      <TodoInfo
        todos={todos}
        setTodos={setTodos}
        setFilteredTodos={setFilteredTodos}
        filteredTodos={filteredTodos}
      />
    </>
  );
};
