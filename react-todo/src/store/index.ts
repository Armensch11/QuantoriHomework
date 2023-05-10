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

//experimenting with tab syncing
store.subscribe(() => {
  localStorage.setItem("stateCurrent", JSON.stringify(store.getState()));
});
//experimenting with tab syncing

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
