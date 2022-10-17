import React, { useState } from 'react';
import { Todo } from './Components/Todo/Todo';
import './App.scss';

import { Checkbox } from '@nextui-org/react';

export const App = () => {
  const [backGround, setBackGround] = useState(false);

  return (
    <div className={backGround ? 'App light' : 'App dark'}>
      <Todo setBackGround={setBackGround} backGround={backGround} />
      <div className='test'>
        <Checkbox isRounded={true} color="secondary">
          Rounded option
        </Checkbox>
      </div>
    </div>
  );
};
