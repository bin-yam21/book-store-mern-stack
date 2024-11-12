import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "sweetalert2/dist/sweetalert2.js";
import router from "./router/router.jsx";
import { RouterProvider } from "react-router-dom";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
