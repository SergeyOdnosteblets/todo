import React from 'react';
import { StatusType } from '../../Types/StatusType';

import style from './StatusItems.module.scss';

export const StatusItems: React.FC<StatusType> = ({
  onBackgroundChange,
  getAllTasks,
  getActiveTasks,
  getCompletedTasks,
}) => {
  return (
    <div className={style.buttons}>
      <button onClick={getAllTasks} className={onBackgroundChange ? style.button : ''}>
        All
      </button>
      <button onClick={getActiveTasks} className={onBackgroundChange ? style.button : ''}>
        Active
      </button>
      <button onClick={getCompletedTasks} className={onBackgroundChange ? style.button : ''}>
        Completed
      </button>
    </div>
  );
};
