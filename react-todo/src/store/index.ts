import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../features/todos/todosSlice";
import searchReducer from "../features/search/searchSlice";
import showEditModalReducer from "../features/showModal/showModalSlice";

const store = configureStore({
  reducer: {
    todos: todosReducer,
    search: searchReducer,
    modal: showEditModalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
