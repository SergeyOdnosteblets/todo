import React from 'react';
import { StatusType } from '../../Types/StatusType';

import style from './StatusItems.module.scss';

export const StatusItems: React.FC<StatusType> = ({
  backGround,
  getAllTasks,
  getActiveTasks,
  getCompletedTasks,
}) => {
  return (
    <div className={style.buttons}>
      <button onClick={getAllTasks} className={backGround ? style.button : ''}>
        All
      </button>
      <button onClick={getActiveTasks} className={backGround ? style.button : ''}>
        Active
      </button>
      <button onClick={getCompletedTasks} className={backGround ? style.button : ''}>
        Completed
      </button>
    </div>
  );
};
