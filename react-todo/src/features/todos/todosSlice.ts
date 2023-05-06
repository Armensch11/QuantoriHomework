import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { ITodoItem } from "../../Interfaces/Interfaces";
import {
  fetchTodosFromServer,
  postTodoToServer,
  changeTodoStatus,
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

export const postTodo = createAsyncThunk(
  "todos/postTodo",
  async (todo: ITodoItem) => {
    const postedTodo = await postTodoToServer(todo);
    return postedTodo;
  }
);

export const markTodo = createAsyncThunk(
  "todos/markTodo",
  async (todo: ITodoItem) => {
    const markedTodo = await changeTodoStatus(todo);
    return markedTodo;
  }
);

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // addTodo: (state, action: PayloadAction<ITodoItem>) => {
    //   const newTodo = action.payload;
    //   state.todos.push(newTodo);
    // },

    // markTodo: (state, action: PayloadAction<string>) => {
    //   const id = action.payload;
    //   state.todos.forEach((todo) => {
    //     if (todo.id === id) {
    //       if (todo.status === "completed") {
    //         todo.status = "pending";
    //       } else {
    //         todo.status = "completed";
    //       }
    //     }
    //   });
    // },

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
        state.error =
          action.error.message ?? "Something went wrong with fetching.";
      })

      // posting todo and updating state
      .addCase(postTodo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postTodo.fulfilled, (state, action) => {
        const postedTodo = action.payload;
        if (postedTodo) {
          state.todos.push(postedTodo);
        }
        state.loading = false;
        state.error = null;
      })
      .addCase(postTodo.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message ?? "Something went wrong with posting.";
      })
      // changing todo status in server and updating state
      .addCase(markTodo.fulfilled, (state, action) => {
        const markedTodo = action.payload;

        if (markedTodo) {
          const newTodos = state.todos.map((todo) => {
            if (todo.id === markedTodo.id) {
              return { ...markedTodo };
            } else {
              return todo;
            }
          });
          state.todos = newTodos;
        }

        state.loading = false;
        state.error = null;
      })
      .addCase(markTodo.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message ?? "Something went wrong with marking.";
      });
  },
});

export const { deleteTodo, editTodo } = todosSlice.actions;

export default todosSlice.reducer;
