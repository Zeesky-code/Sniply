import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Root from "./routes/root";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import ErrorPage from "./errorPage";
import SignupPage from "./routes/signup";
import LoginPage from "./routes/login";
import Dashboard from "./routes/dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "signup",
    element: <SignupPage/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "login",
    element: <LoginPage/>,
    errorElement: <ErrorPage />,
  },
  {path: "dashboard", 
  element: <Dashboard/>, 
  errorElement: <ErrorPage />}
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);