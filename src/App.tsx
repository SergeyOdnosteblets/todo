import React, { useState } from 'react';
import { Todo } from './Components/Todo/Todo';
import './App.scss';

export const App = () => {
  const [backGround, setBackGround] = useState(false);

  return (
    <div className={backGround ? 'App light' : 'App dark'}>
      <Todo setBackGround={setBackGround} backGround={backGround} />
    </div>
  );
};
