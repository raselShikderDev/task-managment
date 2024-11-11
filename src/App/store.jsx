import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../Featers/Task/taskSlice"
const store = configureStore({
  reducer: {
    tasks: tasksReducer
  }
})

export default store