import React from 'react';
import { StatusType } from '../../Types/StatusType';

import style from './StatusItems.module.scss';

export const StatusItems: React.FC<StatusType> = ({
  theme,
  getAllTasks,
  getActiveTasks,
  getCompletedTasks,
}) => {
  return (
    <div className={style.buttons}>
      <button onClick={getAllTasks} className={theme ? style.button : ''}>
        All
      </button>
      <button onClick={getActiveTasks} className={theme ? style.button : ''}>
        Active
      </button>
      <button onClick={getCompletedTasks} className={theme ? style.button : ''}>
        Completed
      </button>
    </div>
  );
};