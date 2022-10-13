import React, { useState } from 'react';

import { Form } from './Components/Form/Form';
import { List } from './Components/List/List';

export const App = () => {
  let todos = [
    {
      id: 1,
      task: 'task 1',
      completed: false,
    },
    {
      id: 2,
      task: 'task 2',
      completed: true,
    },
    {
      id: 3,
      task: 'task 3',
      completed: false,
    },
  ];

  const [todo, setTodo] = useState<any>(todos);
  return (
    <div>
      <Form setTodo={setTodo} todo={todo} />
      <List setTodo={setTodo} todo={todo} />
    </div>
  );
};
