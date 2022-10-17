import React from 'react';
import { TaskType } from '../../Types/TaskType';
import { TodoInfoType } from '../../Types/TodoInfoType';
import { StatusItems } from '../StatusItems/StatusItems';

import style from './TodoInfo.module.scss';

export const TodoInfo: React.FC<TodoInfoType> = ({
  todos,
  setTodos,
  backGround,
  getActiveTasks,
  getCompletedTasks,
  getAllTasks,
}) => {
  const delCompletedTasks = () => {
    setTodos(todos.filter((item: TaskType) => item.completed === false));
  };

  return (
    <div className={style.info}>
      <div>{todos.filter((item: TaskType) => item.completed === false).length} items left</div>
      <div className={style.statusItems}>
        <StatusItems
          backGround={backGround}
          getActiveTasks={getActiveTasks}
          getCompletedTasks={getCompletedTasks}
          getAllTasks={getAllTasks}
        />
      </div>
      <button onClick={delCompletedTasks} className={backGround ? style.button : ''}>
        Clear Completed
      </button>
    </div>
  );
};
