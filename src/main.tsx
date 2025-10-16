import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./global.css";
import App from "./App.tsx";

import VerifyEmail from "./Route/verifyEmail.tsx";
import SignUp from "./Route/signUp.tsx";
import Login from "./Route/LogIn.tsx";
import Dashboard from "./Route/dashBoard.tsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/Login", element: <Login /> },
  { path: "/verifyemail", element: <VerifyEmail /> },
  { path: "/dashboard", element: <Dashboard /> },
]);

createRoot(document.getElementById("root")!).render(
  // <App />
  <RouterProvider router={router} />
);
