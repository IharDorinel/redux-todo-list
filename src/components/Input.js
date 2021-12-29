import React, { useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import { add, remove, doneToggle } from '../features/todoSlice';
import './Input.css';


const Input = () => {
  
  const [input, setInput] = useState('');

  const dispatch = useDispatch();

  const addTodo = () => {
    dispatch(add(input));
    setInput('')
  }

  return (
    <div className="input">
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
      <button onClick={addTodo}>Add</button>
    </div>
  )
}

export default Input;

