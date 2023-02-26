

import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer } from "./tasksSlice";
import { filtersReducer } from "./filtersSlice";

console.log(tasksReducer)

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
   
  },
  
});