import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider, useParams } from "react-router-dom";
import Root from "./components/Root/Root.jsx";
import Home from "./components/Home/Home.jsx";
import Signin from "./components/Signin/Signin.jsx";
import Signup from "./components/Signup/Signup.jsx";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./components/AuthProvider/AuthProvider.jsx";
import EstateDetails from "./components/Home/EstateDetails.jsx";
import PrivateRoute from "./components/AuthProvider/PrivateRoute.jsx";
import villasData from '../public/villas.json';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signin",
        element: <Signin></Signin>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/estate/:id",
        element: <PrivateRoute><EstateDetails></EstateDetails></PrivateRoute>,
        loader: () => fetch('../public/villas.json')
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
