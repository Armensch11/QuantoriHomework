import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { ITodoItem } from "../../Interfaces/Interfaces";
import {
  fetchTodosFromServer,
  postTodo,
} from "../../components/utils/reduxHelpers";

type SliceState = {
  todos: ITodoItem[];
  loading: boolean;
  error: string | null;
};

const initialState: SliceState = {
  todos: [],
  loading: false,
  error: null,
};

export const fetchTodos = createAsyncThunk(
  "todos/fetchTodos",
  fetchTodosFromServer
);

export const post = createAsyncThunk(
  "todos/postTodo",
  async (todo: ITodoItem) => {
    const updatedTodo = await postTodo(todo);
    return updatedTodo;
  }
);

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<ITodoItem>) => {
      const newTodo = action.payload;
      state.todos.push(newTodo);
    },

    markTodo: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.todos.forEach((todo) => {
        if (todo.id === id) {
          if (todo.status === "completed") {
            todo.status = "pending";
          } else {
            todo.status = "completed";
          }
        }
      });
    },

    deleteTodo: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },

    editTodo: (state, action: PayloadAction<ITodoItem>) => {
      const editedItem = action.payload;
      state.todos.forEach((todo) => {
        if (todo.id === editedItem.id) {
          todo.title = editedItem.title;
          todo.status = editedItem.status;
          todo.type = editedItem.type;
          todo.task = editedItem.task;
          todo.date = editedItem.date;
        }
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Something went wrong.";
      })

      // posting todo and updating state
      .addCase(post.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(post.fulfilled, (state, action) => {
        const updatedTodo = action.payload;
        if (updatedTodo) {
          state.todos.push(updatedTodo);
        }
        state.loading = false;
        state.error = null;
      })
      .addCase(post.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Something went wrong.";
      });
  },
});

export const { addTodo, markTodo, deleteTodo, editTodo } = todosSlice.actions;

export default todosSlice.reducer;
