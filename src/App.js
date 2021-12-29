import React from 'react';
import Input from './components/Input';
import TodoItem from './components/TodoItem';
import {useSelector} from 'react-redux';
import './App.css';


function App() {
  
  const todoList = useSelector(state => state.todo.todoArr);
  
  
  return (
    <div className="App">
      <div className="app__container">
        <Input />
        <div className="app__todoContainer">
          {todoList.map(item => (
              <TodoItem
              name={item.content}
              done={item.done}
              id={item.id}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;

