import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Details from "./pages/Details.jsx";
import Watchlist from "./pages/Watchlist.jsx";
import Layout from "./components/layouts/Layout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <App />
      </Layout>
    ),
  },
  {
    path: "/details/:productId",
    element: (
      <Layout>
        <Details />
      </Layout>
    ),
  },
  {
    path: "/watchlist",
    element: (
      <Layout>
        <Watchlist />
      </Layout>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
