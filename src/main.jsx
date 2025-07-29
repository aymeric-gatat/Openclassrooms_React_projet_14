import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { Provider } from "react-redux";
import { store } from "./app/store";
import "./styles/style.scss";

const App = lazy(() => import("./pages/App"));
const Employee = lazy(() => import("./pages/Employee"));

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<div>Loading ...</div>}>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/employee" element={<Employee />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
