import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
  name: 'todo',
  initialState: {
    todoArr: [],
  },
  reducers: {
    add:(state, action) => {
      const item = {
        id: Date.now(),
        content: action.payload,
        done: false
      }
      state.todoArr.push(item)
    },
    
    remove:(state, action) => {
      state.todoArr = state.todoArr.filter(item => item.id !== action.payload)
    },
    
    doneToggle:(state, action) => {
    const item = state.todoArr.find(item => item.id === action.payload)
      if(item) {
        item.done = !item.done
      }
    }
  }
})

export const { add, remove, doneToggle } = TodoSlice.actions;
export default TodoSlice.reducer;
