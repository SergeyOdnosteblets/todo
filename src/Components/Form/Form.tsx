import React from 'react';
import { FormTypes } from '../../Types/FormTypes';

export const Form: React.FC<FormTypes> = ({ todo, setTodo }) => {
  const handleSubmit = (e: any) => {
    console.log(e.target.todo.value);
    e.preventDefault();
    setTodo([
      ...todo,
      {
        id: Math.random(),
        task: e.target.todo.value,
        completed: false,
      },
    ]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder="New Todo" name="todo" />
        <input type="submit" value="Add Todo" />
      </form>
    </div>
  );
};
