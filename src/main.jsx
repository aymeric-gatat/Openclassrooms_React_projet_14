import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { Provider } from "react-redux";
import { store } from "./app/store";
import "./styles/style.scss";
import App from "./pages/App";
import Employee from "./pages/Employee";
import Test from "./pages/Test";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
