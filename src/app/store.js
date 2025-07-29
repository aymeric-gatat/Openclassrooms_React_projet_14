import { configureStore } from "@reduxjs/toolkit";
import employeesReducer from "../features/employees/employeesSlice";
import modalReducer from "./reducers/modalReducer";

export const store = configureStore({
  reducer: {
    employees: employeesReducer,
    modal: modalReducer,
  },
});
