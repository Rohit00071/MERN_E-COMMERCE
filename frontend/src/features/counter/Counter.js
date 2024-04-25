/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  // eslint-disable-next-line no-unused-vars
  increment,
  // eslint-disable-next-line no-unused-vars
  incrementAsync,
  selectCount,
} from './counterSlice';

export default function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();


  return (
    <div>
      <div>
      
       
      </div>
    </div>
  );
}
