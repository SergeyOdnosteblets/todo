import React from 'react';
import { Reorder } from 'framer-motion';
import { FormTypes } from '../../Types/FormTypes';

import './list.css';

export const List: React.FC<FormTypes> = ({ todo, setTodo }) => {
  return (
    <Reorder.Group as="ol" axis="y" onReorder={setTodo} values={todo}>
      {todo.map((item: any) => {
        return (
          <div key={item.id} className="item">
            <Reorder.Item value={todo} key={item.id}>
              {item.task}
            </Reorder.Item>
          </div>
        );
      })}
    </Reorder.Group>
  );
};
