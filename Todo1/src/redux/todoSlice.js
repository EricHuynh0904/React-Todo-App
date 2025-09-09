import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import http from '../../services/http';


export const fetchTodos = createAsyncThunk(
  'todo/fetchTodos',
  async (listId) => {
    const res = await http.get(`/lists/${listId}/todos`);
    return res.data;
  }
);


export const addTodo = createAsyncThunk(
  "addTodo",
  async ({ listId, title, description, dueDate, priority }) => {
    const res = await http.post(`/lists/${listId}/todos`, {
      title,
      description,
      dueDate,
      priority,
    });
    return res.data;
  }
);

export const updateTodo = createAsyncThunk(
  'todo/updateTodo',
  async ({ id, updates }) => {
    const res = await http.patch(`/todos/${id}`, updates);
    return res.data;
  }
);

// Xóa todo
export const deleteTodo = createAsyncThunk(
  'todo/deleteTodo',
  async (id) => {
    await http.delete(`/todos/${id}`);
    return id;
  }
);

const todoSlice = createSlice({
  name: 'todo',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => action.payload)
      .addCase(addTodo.fulfilled, (state, action) => { state.push(action.payload); })
      .addCase(updateTodo.fulfilled, (state, action) => {
        const index = state.findIndex(todo => todo.id === action.payload.id);
        if (index !== -1) {
          state[index] = action.payload;
        }
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        return state.filter(todo => todo.id !== action.payload);
      });
  }
});

export default todoSlice.reducer;
