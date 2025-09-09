import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTodoLists, createTodoList, renameTodoList, deleteTodoList } from '../../services/auth';

export const fetchTodoLists = createAsyncThunk(
  'todoList/fetchTodoLists',
  async (_, { rejectWithValue }) => {
    try {
      const res = await getTodoLists();           // axios instance.get('/todolist')
      const data = res?.data ?? res;              // hỗ trợ cả res và res.data
      console.log('[fetchTodoLists] raw:', data); // kiểm tra response

      if (Array.isArray(data)) return data.filter(Boolean);
      if (data && typeof data === 'object') return [data];
      return [];
    } catch (err) {
      return rejectWithValue(err?.response?.data ?? err.message);
    }
  }
);


export const addTodoList = createAsyncThunk(
  'addTodoList',
  async (data) => {
    const res = await createTodoList(data);
    return res.data;
  }
);

export const removeTodoList = createAsyncThunk(
  'removeTodoList',
  async (id) => {
    await deleteTodoList(id);
    return id;
  }
);

export const updateTodoList = createAsyncThunk(
    'updateTodoList',
    async ({ id, name }) => {
        const res = await renameTodoList(id, { name });
        return res.data;
    }
);

const todoListSlice = createSlice({
  name: 'todoList',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
       .addCase(fetchTodoLists.fulfilled, (_state, action) => {
        console.log('[fulfilled] payload:', action.payload);
        return action.payload;                    // luôn là mảng
      })
      .addCase(addTodoList.fulfilled, (state, action) => { state.push(action.payload); })
      .addCase(removeTodoList.fulfilled, (state, action) => {
        return state.filter(list => list.id !== action.payload);
      })
      .addCase(updateTodoList.fulfilled, (state, action) => {
        const index = state.findIndex(list => list.id === action.payload.id);
        if (index !== -1) {
          state[index] = action.payload;
        }
      });
  }
});

export default todoListSlice.reducer;