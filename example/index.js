import React from 'react';
import { render } from 'react-dom';
import Lorem from 'react-lorem/Lorem';
import Scroll2TopButton from '../Scroll2TopButton';

console.log('index!');

render(
  <div>
    <div>
      <Lorem />
      <Lorem reps={{ times: 4, lineBreak: true }} color={'yellow'} fontSize={'medium'} />
      <Lorem color={'blue'} fontSize={30} />
      <Lorem color={'rgb(154,67,123)'} fontSize={'large'} />
    </div>

    <div>
      <Scroll2TopButton />
    </div>

  </div>,
  document.getElementById('root')
);
