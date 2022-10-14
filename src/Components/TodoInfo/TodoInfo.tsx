import React from 'react';
import { TaskType } from '../../Types/TaskType';
import { TodoListType } from '../../Types/TodoListType';

export const TodoInfo: React.FC<TodoListType> = ({ todos, setTodos, setFilteredTodos }) => {
  const delCompletedTasks = () => {
    setTodos(todos.filter((item: TaskType) => item.completed === false));
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
    <div>
      <div>{todos.filter((item: TaskType) => item.completed === false).length} items left</div>
      <div>
        <button onClick={getAllTasks}>All</button>
        <button onClick={getActiveTasks}>Active</button>
        <button onClick={getCompletedTasks}>Completed</button>
        <button onClick={delCompletedTasks}>Clear Completed</button>
      </div>
    </div>
  );
};
