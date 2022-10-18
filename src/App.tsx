import React, { useState } from 'react';
import { Todo } from './Components/Todo/Todo';
import './App.scss';

export const App = () => {
  const [theme, setTheme] = useState(false);

  return (
    <div className={theme ? 'App isLightBackground' : 'App isDarkBackground'}>
      <Todo setTheme={setTheme} theme={theme} />
    </div>
  );
};