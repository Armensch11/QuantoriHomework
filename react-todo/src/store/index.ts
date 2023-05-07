import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../features/todos/todosSlice";
import searchReducer from "../features/search/searchSlice";

const store = configureStore({
  reducer: {
    todos: todosReducer,
    search: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
