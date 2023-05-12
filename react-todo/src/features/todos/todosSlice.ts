import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { ITodoItem } from "../../Interfaces/Interfaces";
import {
  fetchTodosFromServer,
  postTodoToServer,
  changeTodoStatus,
  deleteTodoInServer,
  editTodoInServer,
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

export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (id: string) => {
    const todoId = await deleteTodoInServer(id);
    return todoId;
  }
);

export const editTodo = createAsyncThunk(
  "todos/editTodo",
  async (todo: ITodoItem) => {
    const editedTodo = await editTodoInServer(todo);
    return editedTodo;
  }
);

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    updateState: (state, action: PayloadAction<ITodoItem[]>) => {
      const newState = action.payload;
      state.todos = [...newState];
    },
    // editTodo: (state, action: PayloadAction<ITodoItem>) => {
    //   const editedItem = action.payload;
    //   const newTodos = state.todos.map((todo) => {
    //     if (todo.id === editedItem.id) {
    //       return { ...editedItem };
    //     } else {
    //       return todo;
    //     }
    //   });
    //   state.todos = newTodos;
    // },
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
      })

      //delete todo from server and update state
      .addCase(deleteTodo.fulfilled, (state, action) => {
        const todoId = action.payload;
        const newTodos = state.todos.filter((todo) => todo.id !== todoId);
        state.todos = [...newTodos];
        state.loading = false;
        state.error = null;
      })
      .addCase(deleteTodo.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message ?? "Something went wrong with posting.";
      })
      .addCase(editTodo.fulfilled, (state, action) => {
        const editedTodo = action.payload;

        if (editedTodo) {
          const newTodos = state.todos.map((todo) => {
            if (todo.id === editedTodo.id) {
              return { ...editedTodo };
            } else {
              return todo;
            }
          });
          state.todos = newTodos;
        }

        state.loading = false;
        state.error = null;
      });
  },
});

export const { updateState } = todosSlice.actions;
export default todosSlice.reducer;
