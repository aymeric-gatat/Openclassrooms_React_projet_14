import { createSlice } from "@reduxjs/toolkit";

const savedEmployees = JSON.parse(localStorage.getItem("employees")) || [];

const initialState = {
  list: savedEmployees,
};

export const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.list.push(action.payload);
    },
  },
});

export const { addEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
