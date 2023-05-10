import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type SliceState = {
  show: boolean;
  todoId: string;
};

const initialState: SliceState = {
  show: false,
  todoId: "",
};

export const showModalSlice = createSlice({
  name: "showModal",
  initialState,
  reducers: {
    showEditModal: (state, action: PayloadAction<SliceState>) => {
      state.show = action.payload.show;
      state.todoId = action.payload.todoId;
    },
  },
});
export const { showEditModal } = showModalSlice.actions;
export default showModalSlice.reducer;
