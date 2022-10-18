import React, { useState } from 'react';
import { Todo } from './Components/Todo/Todo';
import './App.scss';

export const App = () => {
  const [onBackgroundChange, setOnBackgroundChange] = useState(false);

  return (
    <div className={onBackgroundChange ? 'App isLightBackground' : 'App isDarkBackground'}>
      <Todo setOnBackgroundChange={setOnBackgroundChange} onBackgroundChange={onBackgroundChange} />
      
    </div>
  );
};
