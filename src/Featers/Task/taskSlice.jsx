import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTodoData } from "./totoDataPost";

// Initial state with 'tasks' as the key
const initialTask = {
  tasks: [],
  loading: false,
  error: false,
  status: "all",
};

// Create async thunk for fetching data
export const fetchTodo = createAsyncThunk("tasks/fetchTodo", async () => {
  const data = await getTodoData();
  return data.map((task) => {
    return {
      id: task.id,
      title: task.title,
      description: "",
      status: task.completed ? "completed" : "To Do",
    };
  });
});

// Create the slice
const taskSlice = createSlice({
  name: "task",
  initialState: initialTask,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload)
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodo.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchTodo.fulfilled, (state, action) => {
        state.loading = false;
        // Corrected the property from 'state.task' to 'state.tasks'
        state.tasks = action.payload;
      })
      .addCase(fetchTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.message;  // Set the error message
      });
  },
});

export default taskSlice.reducer;
export const {addTask} = taskSlice.actions
