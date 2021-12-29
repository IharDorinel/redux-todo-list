import React, {useState} from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { add, remove, doneToggle } from '../features/todoSlice';
import {useDispatch} from "react-redux";
import './TodoItem.css';


const TodoItem = ({ name, done, id}) => {
  
  const [linethrough, setLinethrough] = useState('');
  
  const dispatch = useDispatch();
  
  const removeTodo = () => {
    dispatch(remove(id))
  }
  
  const handleChange = () => {
    dispatch(doneToggle(id));
    if(done) {
      setLinethrough('')
    } else {
      setLinethrough('TodoItem--done')
    }
  }
  
  return (
    <div className="TodoItem" key={id}>
      <Checkbox
        checked={done}
        color="primary"
        onChange={handleChange}
        inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
    <p className={linethrough}>{name}</p>
      <button onClick={removeTodo}>X</button>
    </div>
  )
}

export default TodoItem;