import { configureStore } from '@reduxjs/toolkit';
import todoListReducer from './todoListSlice';
import todoReducer from './todoSlice';

const store = configureStore({
  reducer: {
    todo: todoReducer,
    todoList: todoListReducer
  }
});

export default store;